import { baseURL, secondaryColor } from '@/config'
import styled from 'styled-components'

const Section = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Logo = styled.img`
  height: 50px;
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: ${secondaryColor};
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={baseURL + '/images/logo.png'} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={baseURL + '/images/search.png'} />
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar
