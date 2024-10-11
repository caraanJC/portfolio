import Map from '@/components/Map'
import { secondaryColor } from '@/config'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const Input = styled.input`
  padding: 20px;
  background-color: #e1e1e1;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e1e1e1;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: ${secondaryColor};
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`
const Right = styled.div`
  flex: 1;
`

const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
            <Title>Contact Us</Title>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <TextArea placeholder="Write your message" rows={10} />
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
