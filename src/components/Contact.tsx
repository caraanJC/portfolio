import Map from '@/components/Map'
import { defaultEmailTemplate, publicKey, secondaryColor, serviceId } from '@/config'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

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

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Title = styled.h1`
  font-weight: 200;
`
const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceId, defaultEmailTemplate, formRef.current ?? '', publicKey)
      .then((result) => {
        console.log(result.text)
        setSuccessMessage("Your message has been sent. We'll get back to you soon :)")
      })
      .catch((error) => {
        console.log(error.text)
        setSuccessMessage('Email failed to submit')
      })
  }

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Email" name="email" required type="email" />
            <TextArea placeholder="Write your message" name="message" rows={10} required />
            <Button type="submit">Send</Button>
            {successMessage}
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
