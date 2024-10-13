import Navbar from '@/components/Navbar'
import { baseURL, secondaryColor } from '@/config'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  width: 80%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Line = styled.img`
  height: 5px;
`

const Subtitle = styled.h2`
  color: ${secondaryColor};
`

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Button = styled.button`
  background-color: ${secondaryColor};
  color: white;
  border: none;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 3;
  position: relative;
`

const Img = styled.img`
  width: 60%;
  /* width: 600px; */
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src={baseURL + '/images/line.png'} />
            <Subtitle>What We Do</Subtitle>
          </WhatWeDo>
          <Desc>we enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={4} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 300]} scale={2.7}>
              <MeshDistortMaterial color="#3d1c56" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Canvas>
          <Img src={baseURL + '/images/moon.png'}></Img>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
