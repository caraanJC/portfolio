import Development from '@/components/Development'
import ProductDesign from '@/components/ProductDesign'
import SocialMedia from '@/components/SocialMedia'
import WebDesign from '@/components/WebDesign'
import { secondaryColor } from '@/config'
import { useState } from 'react'
import styled from 'styled-components'

const itemNames = ['Web Design', 'Development', 'Product Design', 'Social Media']

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

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
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

  &:after {
    content: '${(props) => props.text}';
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
      animation: moveText 0.5s linear forwards;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0;
  }
`

const Right = styled.div`
  flex: 1;
  padding: 10px;
`
const Works = () => {
  const [work, setWork] = useState('Web Design')

  let workComponent

  switch (work) {
    case 'Development':
      workComponent = <Development />
      break
    case 'Product Design':
      workComponent = <ProductDesign />
      break
    case 'Social Media':
      workComponent = <SocialMedia />
      break
    default:
      workComponent = <WebDesign />
  }

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {itemNames.map((itemName) => (
              <ListItem key={itemName} text={itemName} onClick={() => setWork(itemName)}>
                {itemName}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>{workComponent}</Right>
      </Container>
    </Section>
  )
}

export default Works
