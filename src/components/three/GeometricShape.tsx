import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function GeometricShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <mesh ref={meshRef} scale={1.4}>
      <icosahedronGeometry args={[1.2, 1]} />
      <MeshDistortMaterial
        color="#00F0FF"
        distort={0.35}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        emissive="#FF00E5"
        emissiveIntensity={0.15}
        wireframe={false}
      />
    </mesh>
  )
}
