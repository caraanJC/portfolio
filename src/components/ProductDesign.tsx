import Watch from '@/components/models-3d/Watch'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const ProductDesign = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[10, 1, 10]} zoom={0.7} />

      <Stage environment="studio" intensity={0.5}>
        <Watch scale={0.6} />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default ProductDesign
