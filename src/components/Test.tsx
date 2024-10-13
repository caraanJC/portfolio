import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'
import Cube from '@/components/Cube'

const Container = styled.div`
  height: 100vh;
  width: 100%;
`

const Test = () => {
  return (
    <Container>
      <Canvas camera={{fov: 25, position: [5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  )
}

export default Test
