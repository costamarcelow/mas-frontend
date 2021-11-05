import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import {
  Container,
  Content,
  FormContainer,
  Background,
  InputContainer
} from './style'

export function Login() {
  return (
    <Container>
      <Content>
        <FormContainer>
          <h2>Faça seu Login</h2>
          <form action="">
            <InputContainer>
              <FiMail size={40} />
              <input type="email" placeholder="E-mail" />
            </InputContainer>
            <InputContainer>
              <FiLock size={40} />
              <input type="password" placeholder="Senha" />
            </InputContainer>
            <Button type="submit">Entrar</Button>
          </form>
          <Link to="/register">
            <FiLogIn size={40} />
            Cadastre seu acesso
          </Link>
        </FormContainer>
      </Content>
      <Background />
    </Container>
  )
}