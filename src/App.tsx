import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Who from '@/components/Who'
import Works from '@/components/Works'
import styled from 'styled-components'
import { baseURL } from '@/config'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
  color: white;
  background: url(${baseURL}/images/bg.jpeg);
`

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
