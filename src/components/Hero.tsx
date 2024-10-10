import Navbar from '@/components/Navbar'
import styled from 'styled-components'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`

const Hero = () => {
  return (
    <Section>
      <Navbar />
    </Section>
  )
}

export default Hero
