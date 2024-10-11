import { baseURL, secondaryColor } from '@/config'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 74px;
`

const WhoWeAre = styled.div`
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
  width: 120px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>{/* 3d model */}</Left>
        <Right>
          <Title>Think outside the box</Title>
          <WhoWeAre>
            <Line src={baseURL + '/images/line.png'} />
            <Subtitle>Who We Are</Subtitle>
          </WhoWeAre>
          <Desc>a creative group of designers and developers with a passion for the arts.</Desc>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who
