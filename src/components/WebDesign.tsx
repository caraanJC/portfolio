import Ipad from '@/components/models-3d/Ipad'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const WebDesign = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[8, 1, -5]} />

      <Stage environment="studio" intensity={0.5}>
        <Ipad scale={0.6} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default WebDesign
