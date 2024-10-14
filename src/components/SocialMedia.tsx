import Phone from '@/components/models-3d/Phone'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const SocialMedia = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[5, 1, 15]} zoom={0.8} />

      <Stage environment="studio" intensity={0.5}>
        <Phone scale={0.5} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default SocialMedia
