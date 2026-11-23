import {
  BoxGeometry,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  ExtrudeGeometry,
  Float32BufferAttribute,
  Color,
  Group,
  IcosahedronGeometry,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshStandardMaterial,
  Quaternion,
  Shape,
  TorusGeometry,
  Vector3,
  type ColorRepresentation,
} from 'three'
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const COLORS = {
  orange: 0xff6a00,
  teal: 0x12b0ae,
  red: 0xff2020,
  blue: 0x2222ff,
  grassSide: 0x0b7c7a,
  soil: 0x5c4b42,
  rock: 0x6b574b,
  stone: 0x85838c,
  wall: 0xe6e1d6,
  roof: 0xffa96b,
  dark: 0x3a3c44,
  metal: 0x8d919c,
  door: 0xa8440a,
  window: 0xffa64d,
  glass: 0x9fb4c4,
  bark: 0x5e3a22,
}

/** How the surface takes the light: rough for stone and wood, smooth and reflective for metal. */
interface Finish {
  roughness?: number
  metalness?: number
  /** Faceted, for rocks and soil. Organic shapes are smooth. */
  flat?: boolean
}

const METAL: Finish = { roughness: 0.35, metalness: 0.85 }
const ROCK: Finish = { roughness: 0.95, flat: true }

type Position = [x: number, y: number, z: number]

/** Deterministic noise in [-1, 1], so coincident vertices always move together. */
function noise(x: number, y: number, z: number) {
  const value = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453
  return (value - Math.floor(value)) * 2 - 1
}

/** Displaces vertices to break the regularity of primitive geometries. */
function roughen(geometry: BufferGeometry, amount: number) {
  const position = geometry.getAttribute('position')

  for (let i = 0; i < position.count; i++) {
    // Rounding plus `|| 0` keeps seam vertices (1e-17, -0...) identical.
    const [x, y, z] = [position.getX(i), position.getY(i), position.getZ(i)].map(
      (value) => Math.round(value * 1000) / 1000 || 0,
    ) as Position

    position.setXYZ(
      i,
      x + noise(x, y, z) * amount,
      y + noise(y, z, x) * amount,
      z + noise(z, x, y) * amount,
    )
  }

  geometry.computeVertexNormals()
  return geometry
}

/** Gentle waves along the radius, for shapes that bulge like foliage and smoke. */
function bulge(geometry: BufferGeometry, amount: number, frequency: number) {
  const position = geometry.getAttribute('position')
  const point = new Vector3()

  for (let i = 0; i < position.count; i++) {
    point.fromBufferAttribute(position, i)
    const [x, y, z] = [point.x * frequency, point.y * frequency, point.z * frequency]
    const wave = (Math.sin(x + 1.3) + Math.sin(y * 1.2 + 2.1) + Math.sin(z * 0.9 + 0.4)) / 3
    point.multiplyScalar(1 + wave * amount)
    position.setXYZ(i, point.x, point.y, point.z)
  }

  return geometry
}

/** Joins the faces, so the light rounds over them instead of showing each one. */
function smooth(geometry: BufferGeometry) {
  geometry.deleteAttribute('normal')
  geometry.deleteAttribute('uv')
  const result = mergeVertices(geometry)
  result.computeVertexNormals()
  return result
}

function mesh(
  geometry: BufferGeometry,
  color: ColorRepresentation,
  position: Position,
  { roughness = 0.85, metalness = 0, flat = false }: Finish = {},
) {
  const material = new MeshStandardMaterial({ color, roughness, metalness, flatShading: flat })
  const result = new Mesh(geometry, material)
  result.position.set(...position)
  result.castShadow = true
  result.receiveShadow = true
  return result
}

const box = (size: Position, color: ColorRepresentation, position: Position, finish?: Finish) =>
  mesh(new BoxGeometry(...size), color, position, finish)

/** Round and soft, like smoke. */
const blob = (radius: number, color: ColorRepresentation, position: Position) =>
  mesh(smooth(bulge(new IcosahedronGeometry(radius, 4), 0.09, 3.2 / radius)), color, position, {
    roughness: 0.95,
  })

/** Lumpy, like a mass of leaves. */
const foliage = (radius: number, color: ColorRepresentation, position: Position) =>
  mesh(
    smooth(roughen(bulge(new IcosahedronGeometry(radius, 3), 0.14, 4.5 / radius), radius * 0.06)),
    color,
    position,
    { roughness: 1 },
  )

const boulder = (radius: number, color: ColorRepresentation, position: Position) =>
  mesh(roughen(new DodecahedronGeometry(radius, 1), radius * 0.1), color, position, ROCK)

function createGround() {
  const ground = new Group()

  const grass = mesh(
    roughen(new CylinderGeometry(2, 1.97, 0.22, 40, 1), 0.025),
    COLORS.teal,
    [0, -0.11, 0],
    { roughness: 1 },
  )
  const side = mesh(
    roughen(new CylinderGeometry(1.97, 1.8, 0.3, 40, 2), 0.03),
    COLORS.grassSide,
    [0, -0.36, 0],
    ROCK,
  )
  const soil = mesh(
    roughen(new ConeGeometry(1.8, 2.25, 22, 6), 0.08),
    COLORS.soil,
    [0, -1.6, 0],
    ROCK,
  )
  soil.rotation.x = Math.PI

  ground.add(grass, side, soil, createBlades())
  return ground
}

/** Tufts of grass over the top, in a few shades of the brand teal. */
function createBlades() {
  const COUNT = 420
  const blades = new InstancedMesh(
    new ConeGeometry(0.022, 0.14, 3),
    new MeshStandardMaterial({ roughness: 1 }),
    COUNT,
  )
  blades.receiveShadow = true

  const matrix = new Matrix4()
  const rotation = new Quaternion()
  const axis = new Vector3()
  const color = new Color()
  const base = new Color(COLORS.teal)
  const light = new Color(0x4fd8d2)

  for (let i = 0; i < COUNT; i++) {
    // Spread evenly over the disc, by the golden angle.
    const radius = 1.92 * Math.sqrt((i + 0.5) / COUNT)
    const angle = i * 2.39996 + noise(i, 1, 2) * 0.3
    const height = 0.7 + (noise(i, 3, 4) + 1) * 0.4

    rotation.setFromAxisAngle(axis.set(noise(i, 5, 6), 0, noise(i, 7, 8)).normalize(), 0.25)
    matrix.compose(
      new Vector3(Math.cos(angle) * radius, 0.06 * height, Math.sin(angle) * radius),
      rotation,
      new Vector3(1, height, 1),
    )
    blades.setMatrixAt(i, matrix)
    blades.setColorAt(i, color.lerpColors(base, light, (noise(i, 9, 1) + 1) * 0.3))
  }

  return blades
}

/**
 * Faceted mass of leaves, darker underneath, as the crown shades itself. One color for every
 * part, so the crown reads as a whole instead of patches.
 */
function crownPart(radius: number, position: Position) {
  const geometry = roughen(new IcosahedronGeometry(radius, 1), radius * 0.06)
  const vertices = geometry.getAttribute('position')
  const shades: number[] = []

  for (let i = 0; i < vertices.count; i++) {
    const height = (vertices.getY(i) / radius + 1) / 2
    const shade = 0.6 + 0.4 * height * height * (3 - 2 * height)
    shades.push(shade, shade, shade)
  }
  geometry.setAttribute('color', new Float32BufferAttribute(shades, 3))

  const part = mesh(geometry, COLORS.orange, position, { roughness: 1, flat: true })
  part.material.vertexColors = true
  return part
}

/** The shape of the first tree, with the current materials. */
function createTree() {
  const tree = new Group()
  const bark: Finish = { roughness: 1, flat: true }
  const trunk = mesh(new CylinderGeometry(0.13, 0.2, 1.1, 7), COLORS.bark, [0, 0.55, 0], bark)
  const roots = mesh(new CylinderGeometry(0.17, 0.32, 0.26, 7), COLORS.bark, [0, 0.13, 0], bark)

  tree.add(
    trunk,
    roots,
    crownPart(0.62, [0.06, 1.55, 0]),
    crownPart(0.37, [-0.38, 1.1, 0.16]),
    crownPart(0.32, [0.46, 1.36, 0.02]),
  )
  return tree
}

function createBuilding() {
  const WIDTH = 1.44
  const DEPTH = 1.1
  const WALL = 0.62
  const TOOTH_HEIGHT = 0.36
  const TEETH = 3

  const building = new Group()
  const toothWidth = WIDTH / TEETH

  const outline = new Shape()
  outline.moveTo(0, 0)
  for (let i = 0; i < TEETH; i++) {
    outline.lineTo(i * toothWidth, WALL + TOOTH_HEIGHT)
    outline.lineTo((i + 1) * toothWidth, WALL)
  }
  outline.lineTo(WIDTH, 0)

  const body = new ExtrudeGeometry(outline, { depth: DEPTH, bevelEnabled: false })
  body.translate(-WIDTH / 2, 0, -DEPTH / 2)
  building.add(mesh(body, COLORS.wall, [0, 0, 0], { roughness: 0.9 }))

  const slope = Math.hypot(toothWidth, TOOTH_HEIGHT)
  for (let i = 0; i < TEETH; i++) {
    const roof = box(
      [slope, 0.04, DEPTH + 0.06],
      COLORS.roof,
      [-WIDTH / 2 + (i + 0.5) * toothWidth + 0.01, WALL + TOOTH_HEIGHT / 2 + 0.02, 0],
      { roughness: 0.55, metalness: 0.35 },
    )
    roof.rotation.z = -Math.atan2(TOOTH_HEIGHT, toothWidth)
    building.add(roof)

    // Sawtooth roofs light the floor through the glass of each step.
    if (i > 0) {
      building.add(
        box(
          [0.02, TOOTH_HEIGHT * 0.7, DEPTH * 0.85],
          COLORS.glass,
          [-WIDTH / 2 + i * toothWidth - 0.012, WALL + TOOTH_HEIGHT * 0.45, 0],
          { roughness: 0.08, metalness: 0.9 },
        ),
      )
    }
  }

  const front = DEPTH / 2
  building.add(
    box([WIDTH + 0.12, 0.1, DEPTH + 0.12], COLORS.dark, [0, 0.05, 0], { roughness: 0.95 }),
    box([0.26, 0.42, 0.03], COLORS.dark, [-0.42, 0.29, front]),
    box([0.2, 0.36, 0.04], COLORS.door, [-0.42, 0.28, front], { roughness: 0.6, metalness: 0.4 }),
  )

  for (const x of [0, 0.28, 0.52]) {
    building.add(box([0.2, 0.22, 0.03], COLORS.dark, [x, 0.38, front]))
    const pane = box([0.16, 0.18, 0.04], COLORS.window, [x, 0.38, front], {
      roughness: 0.15,
      metalness: 0.2,
    })
    pane.material.emissive.set(COLORS.window)
    pane.material.emissiveIntensity = 0.45
    building.add(pane)
  }

  return building
}

function createChimney() {
  const HEIGHT = 2.05
  const BANDS = 8

  const chimney = new Group()
  const bandHeight = HEIGHT / BANDS
  const radiusAt = (band: number) => 0.2 - (band / BANDS) * 0.05

  for (let i = 0; i < BANDS; i++) {
    const geometry = new CylinderGeometry(radiusAt(i + 1), radiusAt(i), bandHeight, 20)
    const color = i % 2 === 0 ? COLORS.dark : COLORS.orange
    chimney.add(mesh(geometry, color, [0, (i + 0.5) * bandHeight, 0], { roughness: 0.75 }))
  }

  chimney.add(
    mesh(new CylinderGeometry(0.2, 0.18, 0.12, 20), COLORS.dark, [0, HEIGHT + 0.04, 0], METAL),
  )
  return chimney
}

function createSilo() {
  const silo = new Group()
  silo.add(
    mesh(new CylinderGeometry(0.24, 0.24, 0.6, 32), COLORS.metal, [0, 0.3, 0], METAL),
    mesh(new CylinderGeometry(0.255, 0.255, 0.2, 32), COLORS.orange, [0, 0.27, 0], {
      roughness: 0.45,
      metalness: 0.3,
    }),
    mesh(new CylinderGeometry(0.12, 0.25, 0.1, 32), COLORS.metal, [0, 0.65, 0], METAL),
  )

  // Rings that hold the metal sheets.
  for (const y of [0.08, 0.5]) {
    const ring = mesh(new TorusGeometry(0.245, 0.012, 6, 32), COLORS.dark, [0, y, 0], METAL)
    ring.rotation.x = Math.PI / 2
    silo.add(ring)
  }
  return silo
}

/** Four puffs that echo the institutional logo. */
function createSmoke() {
  return [
    blob(0.34, COLORS.orange, [0.95, 2.52, -0.35]),
    blob(0.235, COLORS.teal, [1.58, 2.82, -0.35]),
    blob(0.175, COLORS.red, [2.05, 2.86, -0.35]),
    blob(0.12, COLORS.blue, [2.4, 2.76, -0.35]),
  ]
}

/** Map pin whose tip sits at the origin of the group. */
function createPin() {
  const pin = new Group()
  const finish: Finish = { roughness: 0.35 }
  const tip = mesh(new ConeGeometry(0.17, 0.36, 20), COLORS.wall, [0, 0.18, 0], finish)
  tip.rotation.x = Math.PI

  pin.add(tip, mesh(new TorusGeometry(0.16, 0.085, 12, 28), COLORS.wall, [0, 0.5, 0], finish))
  return pin
}

function createDebris() {
  return [
    boulder(0.2, COLORS.rock, [1.78, -0.12, 1]),
    boulder(0.16, COLORS.rock, [-1.85, -1.45, 0.2]),
    boulder(0.12, COLORS.rock, [-2.4, -1.85, 0]),
  ]
}

export function createIsland() {
  const root = new Group()

  const tree = createTree()
  tree.position.set(-1, 0, 0.45)

  const building = createBuilding()
  building.position.set(0.8, 0, 0)
  building.rotation.y = -0.45

  const chimney = createChimney()
  chimney.position.set(0.55, 0, -0.4)

  const silo = createSilo()
  silo.position.set(0.66, 0, 1.1)

  const stone = boulder(0.3, COLORS.stone, [-0.52, 0.17, 0.3])
  stone.scale.y = 0.75

  const metalCrate = box([0.28, 0.28, 0.28], COLORS.metal, [-0.62, 0.14, 1.25], METAL)
  metalCrate.rotation.y = 0.5
  const orangeCrate = box([0.34, 0.32, 0.34], COLORS.orange, [-0.05, 0.16, 1.3], {
    roughness: 0.7,
  })
  orangeCrate.rotation.y = 0.5

  const bush = foliage(0.17, COLORS.grassSide, [-1.2, 0.1, 1.2])

  const pin = createPin()
  pin.position.set(1, 1.1, 0.2)
  pin.scale.setScalar(0.6)

  const smoke = createSmoke()
  const debris = createDebris()

  root.add(createGround(), tree, building, chimney, silo, stone, metalCrate, orangeCrate, bush, pin)
  root.add(...smoke, ...debris)

  return { root, pin, smoke, debris }
}
