<<<<<<< Updated upstream
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
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
=======
  InputContainer,
  Error,
  Background
>>>>>>> Stashed changes
} from './style'
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import api from '../../services/api'

<<<<<<< Updated upstream
export function Register() {
=======
interface FormData {
  name: string
  email: string
  password: string
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const history = useHistory()

  const onSubmit = handleSubmit(data =>
    api.post('/user', data).then(() => history.push('/'))
  )

>>>>>>> Stashed changes
  return (
    <Container>
      <Content>
        <FormContainer>
          <h2>Faça seu cadastro</h2>
          <form action="">
            <InputContainer>
<<<<<<< Updated upstream
              <FiUser size={40} />
              <input type="text" placeholder="Nome" />
            </InputContainer>
            <InputContainer>
              <FiMail size={40} />
              <input type="email" placeholder="E-mail" />
            </InputContainer>
            <InputContainer>
              <FiLock size={40} />
              <input type="password" placeholder="Senha" />
            </InputContainer>
=======
              <FiUser size={20} />
              <input
                placeholder="Nome"
                {...register('name', { required: true })}
                type="text"
              />
            </InputContainer>
            {errors.name && (
              <Error>O preenchimento deste campo é obrigatório</Error>
            )}
            <InputContainer>
              <FiMail size={20} />
              <input
                placeholder="E-mail"
                {...register('email', { required: true })}
                type="email"
              />
            </InputContainer>
            {errors.email && (
              <Error>O preenchimento deste campo é obrigatório</Error>
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
              <Error>O preenchimento deste campo é obrigatório</Error>
            )}
>>>>>>> Stashed changes
            <Button type="submit">Cadastrar</Button>
          </form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </FormContainer>
      </Content>
      <Background />
    </Container>
  )
}
