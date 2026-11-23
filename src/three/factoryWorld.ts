import {
  DirectionalLight,
  HemisphereLight,
  Mesh,
  NeutralToneMapping,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  Timer,
  Vector3,
  WebGLRenderer,
  type Material,
} from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { createIsland } from './island'

export interface FactoryWorld {
  dispose: () => void
}

const DRAG_SPEED = 0.008
const ISLAND_SCALE = 1.12
const ISLAND_Y = -0.35
const PIN_HEAD_Y = 0.5

/** The label receives its position through the `--pin-x` and `--pin-y` CSS variables. */
export function createFactoryWorld(canvas: HTMLCanvasElement, label: HTMLElement): FactoryWorld {
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  // Keeps the brand colors, which other tone mappings shift.
  renderer.toneMapping = NeutralToneMapping
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap

  const scene = new Scene()

  // Soft reflections on the metal and the glass.
  const pmrem = new PMREMGenerator(renderer)
  const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environment = environment
  scene.environmentIntensity = 0.35
  const camera = new PerspectiveCamera(28, 1, 0.1, 50)
  camera.position.set(0.1, 6.4, 16)
  camera.lookAt(0.1, 0.25, 0)

  const sun = new DirectionalLight(0xfff1e0, 3)
  sun.position.set(-3, 7, 5)
  sun.shadow.mapSize.set(1024, 1024)
  sun.shadow.camera.left = sun.shadow.camera.bottom = -4
  sun.shadow.camera.right = sun.shadow.camera.top = 4
  sun.shadow.camera.far = 20
  sun.shadow.bias = -0.0005
  sun.shadow.normalBias = 0.02
  sun.shadow.radius = 3

  // Cool light from behind, which outlines the shapes against the dark page.
  const rim = new DirectionalLight(0xa8c4ff, 0.9)
  rim.position.set(4, 3, -6)

  scene.add(new HemisphereLight(0xe6f0ff, 0x3a302a, 0.9), sun, rim)

  const { root, pin, smoke, debris } = createIsland()
  root.scale.setScalar(ISLAND_SCALE)
  root.position.y = ISLAND_Y
  scene.add(root)

  // Bobbing objects oscillate around the height they were placed at.
  const floaters = [...smoke, ...debris].map((object, index) => ({
    object,
    baseY: object.position.y,
    phase: index * 0.9,
  }))

  const pinBaseY = pin.position.y
  const pinHead = new Vector3()

  // Small screens show the label as the island's nameplate, so the pin has nothing to point.
  const largeScreen = window.matchMedia('(width >= 64rem)')
  const showPin = () => {
    pin.visible = largeScreen.matches
    draw()
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let dragX: number | null = null
  let dragYaw = 0

  const timer = new Timer()
  timer.connect(document)

  function update(time: number, delta: number) {
    const ease = 1 - Math.exp(-4 * delta)

    // Once released, the island eases back to its resting angle.
    if (dragX === null) dragYaw *= Math.exp(-1.2 * delta)

    const yaw = dragYaw + Math.sin(time * 0.4) * 0.06
    root.rotation.y += (yaw - root.rotation.y) * ease
    root.position.y = ISLAND_Y + Math.sin(time * 0.8) * 0.06

    pin.position.y = pinBaseY + Math.sin(time * 1.8) * 0.05
    // Keeps the pin facing the camera while the island turns.
    pin.rotation.y = -root.rotation.y

    for (const { object, baseY, phase } of floaters) {
      object.position.y = baseY + Math.sin(time * 1.1 + phase) * 0.05
      object.rotation.y = time * 0.25 + phase
    }
  }

  function draw() {
    renderer.render(scene, camera)

    pin.localToWorld(pinHead.set(0, PIN_HEAD_Y, 0)).project(camera)
    label.style.setProperty('--pin-x', `${((pinHead.x + 1) / 2) * canvas.clientWidth}px`)
    label.style.setProperty('--pin-y', `${((1 - pinHead.y) / 2) * canvas.clientHeight}px`)
  }

  function render() {
    timer.update()
    if (!reducedMotion) update(timer.getElapsed(), Math.min(timer.getDelta(), 0.1))
    draw()
  }

  const resizeObserver = new ResizeObserver(() => {
    const { clientWidth, clientHeight } = canvas
    if (!clientWidth || !clientHeight) return

    renderer.setSize(clientWidth, clientHeight, false)
    camera.aspect = clientWidth / clientHeight
    camera.updateProjectionMatrix()
    draw()
  })
  resizeObserver.observe(canvas)

  // Phones skip the shadows, which cost the most to draw.
  const shadowScreen = window.matchMedia('(width >= 48rem)')
  const toggleShadows = () => {
    sun.castShadow = shadowScreen.matches
    draw()
  }

  showPin()
  toggleShadows()

  // Renders only while the canvas is on screen.
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    renderer.setAnimationLoop(entry?.isIntersecting && !reducedMotion ? render : null)
  })
  visibilityObserver.observe(canvas)

  const listeners = new AbortController()
  const { signal } = listeners

  largeScreen.addEventListener('change', showPin, { signal })
  shadowScreen.addEventListener('change', toggleShadows, { signal })

  if (!reducedMotion) {
    window.addEventListener(
      'pointermove',
      (event) => {
        if (dragX === null) return
        dragYaw += (event.clientX - dragX) * DRAG_SPEED
        dragX = event.clientX
      },
      { signal },
    )
    canvas.addEventListener('pointerdown', (event) => (dragX = event.clientX), { signal })
    for (const type of ['pointerup', 'pointercancel', 'blur'] as const) {
      window.addEventListener(type, () => (dragX = null), { signal })
    }
  }

  return {
    dispose() {
      renderer.setAnimationLoop(null)
      environment.dispose()
      pmrem.dispose()
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      listeners.abort()
      timer.dispose()

      scene.traverse((object) => {
        if (!(object instanceof Mesh)) return
        object.geometry.dispose()
        ;(object.material as Material).dispose()
      })
      renderer.dispose()
    },
  }
}
