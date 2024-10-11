import { secondaryColor } from '@/config'
import styled from 'styled-components'

const itemNames = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface ListItemProps {
  text: string
}

const ListItem = styled.li<ListItemProps>`
  font-size: 12vh;
  font-style: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  &:after{
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: ${secondaryColor};
    width: 0%;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    &:after {
      animation: moveText 0.5s linear;

      @keyframes moveText {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`
const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {itemNames.map((itemName) => <ListItem key={itemName} text={itemName}>{itemName}</ListItem>)}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Works
