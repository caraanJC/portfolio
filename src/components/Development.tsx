import Factory from '@/components/models-3d/Factory'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Development = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[1, 0, 0.5]} zoom={0.7} />

      <Stage environment="city" intensity={1}>
        <Factory scale={1} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Development
