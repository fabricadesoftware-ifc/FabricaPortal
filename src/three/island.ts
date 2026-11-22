import {
  BoxGeometry,
  BufferGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  ExtrudeGeometry,
  Group,
  IcosahedronGeometry,
  Mesh,
  MeshLambertMaterial,
  Shape,
  TorusGeometry,
  type ColorRepresentation,
} from 'three'

const COLORS = {
  orange: 0xff6a00,
  teal: 0x12b0ae,
  red: 0xff2020,
  blue: 0x2222ff,
  grassSide: 0x0b7c7a,
  soil: 0x5c4b42,
  rock: 0x6b574b,
  stone: 0x85838c,
  trunk: 0x8a4a22,
  wall: 0xe6e1d6,
  roof: 0xffa96b,
  dark: 0x3a3c44,
  metal: 0x8d919c,
  door: 0xa8440a,
  window: 0xffa64d,
}

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

function mesh(geometry: BufferGeometry, color: ColorRepresentation, position: Position) {
  const result = new Mesh(geometry, new MeshLambertMaterial({ color, flatShading: true }))
  result.position.set(...position)
  return result
}

const box = (size: Position, color: ColorRepresentation, position: Position) =>
  mesh(new BoxGeometry(...size), color, position)

const blob = (radius: number, color: ColorRepresentation, position: Position) =>
  mesh(roughen(new IcosahedronGeometry(radius, 1), radius * 0.06), color, position)

const boulder = (radius: number, color: ColorRepresentation, position: Position) =>
  mesh(roughen(new DodecahedronGeometry(radius), radius * 0.12), color, position)

function createGround() {
  const ground = new Group()

  const grass = mesh(
    roughen(new CylinderGeometry(2, 1.97, 0.22, 14, 1), 0.03),
    COLORS.teal,
    [0, -0.11, 0],
  )
  const side = mesh(
    roughen(new CylinderGeometry(1.97, 1.8, 0.3, 14, 1), 0.03),
    COLORS.grassSide,
    [0, -0.36, 0],
  )
  const soil = mesh(roughen(new ConeGeometry(1.8, 2.25, 9, 3), 0.07), COLORS.soil, [0, -1.6, 0])
  soil.rotation.x = Math.PI

  ground.add(grass, side, soil)
  return ground
}

function createTree() {
  const tree = new Group()
  const trunk = mesh(new CylinderGeometry(0.13, 0.2, 1.1, 7), COLORS.trunk, [0, 0.55, 0])
  const roots = mesh(new CylinderGeometry(0.17, 0.32, 0.26, 7), COLORS.trunk, [0, 0.13, 0])

  tree.add(
    trunk,
    roots,
    blob(0.62, COLORS.orange, [0.06, 1.55, 0]),
    blob(0.37, COLORS.orange, [-0.38, 1.1, 0.16]),
    blob(0.32, COLORS.orange, [0.46, 1.36, 0.02]),
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
  building.add(mesh(body, COLORS.wall, [0, 0, 0]))

  const slope = Math.hypot(toothWidth, TOOTH_HEIGHT)
  for (let i = 0; i < TEETH; i++) {
    const roof = box([slope, 0.04, DEPTH + 0.06], COLORS.roof, [
      -WIDTH / 2 + (i + 0.5) * toothWidth + 0.01,
      WALL + TOOTH_HEIGHT / 2 + 0.02,
      0,
    ])
    roof.rotation.z = -Math.atan2(TOOTH_HEIGHT, toothWidth)
    building.add(roof)
  }

  const front = DEPTH / 2
  building.add(
    box([WIDTH + 0.12, 0.1, DEPTH + 0.12], COLORS.dark, [0, 0.05, 0]),
    box([0.2, 0.36, 0.04], COLORS.door, [-0.42, 0.28, front]),
  )

  for (const x of [0, 0.28, 0.52]) {
    const pane = box([0.16, 0.18, 0.04], COLORS.window, [x, 0.38, front])
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
    const geometry = new CylinderGeometry(radiusAt(i + 1), radiusAt(i), bandHeight, 8)
    const color = i % 2 === 0 ? COLORS.dark : COLORS.orange
    chimney.add(mesh(geometry, color, [0, (i + 0.5) * bandHeight, 0]))
  }

  chimney.add(mesh(new CylinderGeometry(0.2, 0.18, 0.12, 8), COLORS.dark, [0, HEIGHT + 0.04, 0]))
  return chimney
}

function createSilo() {
  const silo = new Group()
  silo.add(
    mesh(new CylinderGeometry(0.24, 0.24, 0.6, 10), COLORS.metal, [0, 0.3, 0]),
    mesh(new CylinderGeometry(0.255, 0.255, 0.2, 10), COLORS.orange, [0, 0.27, 0]),
    mesh(new CylinderGeometry(0.12, 0.25, 0.1, 10), COLORS.metal, [0, 0.65, 0]),
  )
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
  const tip = mesh(new ConeGeometry(0.17, 0.36, 8), COLORS.wall, [0, 0.18, 0])
  tip.rotation.x = Math.PI

  pin.add(tip, mesh(new TorusGeometry(0.16, 0.085, 6, 14), COLORS.wall, [0, 0.5, 0]))
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

  const stone = blob(0.3, COLORS.stone, [-0.52, 0.17, 0.3])
  stone.scale.y = 0.75

  const metalCrate = box([0.28, 0.28, 0.28], COLORS.metal, [-0.62, 0.14, 1.25])
  metalCrate.rotation.y = 0.5
  const orangeCrate = box([0.34, 0.32, 0.34], COLORS.orange, [-0.05, 0.16, 1.3])
  orangeCrate.rotation.y = 0.5

  const bush = blob(0.17, COLORS.grassSide, [-1.2, 0.1, 1.2])

  const pin = createPin()
  pin.position.set(1, 1.1, 0.2)
  pin.scale.setScalar(0.6)

  const smoke = createSmoke()
  const debris = createDebris()

  root.add(createGround(), tree, building, chimney, silo, stone, metalCrate, orangeCrate, bush, pin)
  root.add(...smoke, ...debris)

  return { root, pin, smoke, debris }
}
