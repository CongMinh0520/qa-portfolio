import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles, TorusKnot } from '@react-three/drei'
import { useRef } from 'react'

function QualityCore() {
  const core = useRef()
  useFrame((_, delta) => { core.current.rotation.x += delta * .22; core.current.rotation.y += delta * .42 })
  return <Float speed={2} rotationIntensity={.35} floatIntensity={.7}><group ref={core}><TorusKnot args={[1.12,.27,128,24]}><meshStandardMaterial color="#c9f36b" emissive="#55731f" emissiveIntensity={.7} metalness={.8} roughness={.2} wireframe /></TorusKnot></group></Float>
}

export default function Scene3D() { return <div className="absolute inset-0"><Canvas camera={{ position:[0,0,4.5], fov:45 }} dpr={[1,1.8]}><color attach="background" args={['#0d211c']} /><ambientLight intensity={.6} /><pointLight position={[3,3,3]} color="#c9f36b" intensity={18} /><pointLight position={[-3,-2,2]} color="#55e5c0" intensity={12} /><QualityCore /><Sparkles count={90} scale={5} size={2.2} speed={.35} color="#c9f36b" /><OrbitControls enableZoom={false} autoRotate autoRotateSpeed={.5} /></Canvas><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#07100f99_100%)]" /></div> }
