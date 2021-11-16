<<<<<<< Updated upstream
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
=======
>>>>>>> Stashed changes
import {
  Container,
  Content,
  FormContainer,
<<<<<<< Updated upstream
  Background,
  InputContainer
} from './style'
=======
  InputContainer,
  Error,
  Background
} from './styles'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/Auth'
>>>>>>> Stashed changes

export function Login() {
<<<<<<< Updated upstream
=======
  const { signIn } = useAuth()

  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit(
    async data =>
      await signIn({
        email: data.email,
        password: data.password
      }).then(() => history.push('/dashboard'))
  )

>>>>>>> Stashed changes
  return (
    <Container>
      <Content>
        <FormContainer>
<<<<<<< Updated upstream
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
=======
          <h2>Faça seu login</h2>
          <form onSubmit={onSubmit}>
            <InputContainer>
              <FiMail size={20} />
              <input
                placeholder="E-mail"
                {...register('email', { required: true })}
                type="email"
              />
            </InputContainer>
            {errors.email && (
              <Error>O prenchimento do campo é obrigatório</Error>
            )}
            <InputContainer>
              <FiLock size={20} />
              <input
                placeholder="Senha"
                {...register('password', { required: true })}
                type="password"
              />
            </InputContainer>
            {errors.password && (
              <Error>O prenchimento do campo é obrigatório</Error>
            )}
>>>>>>> Stashed changes
            <Button type="submit">Entrar</Button>
          </form>
          <Link to="/register">
            <FiLogIn />
            Cadastre sua conta
          </Link>
        </FormContainer>
      </Content>
      <Background />
    </Container>
  )
}
