import { Suspense, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Starfield } from './Starfield'
import { GeometricShape } from './GeometricShape'

interface MouseReactiveCameraProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
}

function MouseReactiveCamera({ mouse }: MouseReactiveCameraProps) {
  const { camera } = useThree()

  useFrame(() => {
    const targetX = mouse.current.x * 0.8
    const targetY = mouse.current.y * 0.5
    camera.position.x += (targetX - camera.position.x) * 0.05
    camera.position.y += (targetY - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return null
}

function SceneContent({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>
}) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#00F0FF" />
      <pointLight position={[-10, -5, -5]} intensity={0.8} color="#FF00E5" />
      <Starfield />
      <GeometricShape />
      <MouseReactiveCamera mouse={mouse} />
    </>
  )
}

export default function Scene3D() {
  const mouse = useRef({ x: 0, y: 0 })

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
  }

  return (
    <div
      className="absolute inset-0 h-full w-full"
      onPointerMove={handlePointerMove}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
