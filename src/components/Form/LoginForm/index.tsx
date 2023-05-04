import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, TLoginFormValues } from './loginFormSchema';
import { useNavigate } from 'react-router-dom';
import { Button, Flex } from '@chakra-ui/react';
import { StyledFieldset } from '../../../styles/fieldset';
import { StyledInput } from '../../../styles/input';
import { theme } from '../../../styles/theme';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const navigate = useNavigate()
  const {register, handleSubmit, formState: {errors}} = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema)
  })
  const submit: SubmitHandler<TLoginFormValues> = (formData) => {   
    userLogin(formData, setLoading);       
  }
  const registerRedirect = () => {
    navigate("/register")
}

  return(
    <Flex
    width={"100vw"}
    height={"24vh"}
    justifyContent={"center"}
    alignItems={"center"}
    >
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mx={"auto"}
      >
        <form onSubmit={handleSubmit(submit)}>
          <StyledFieldset>
            <StyledInput type='text' placeholder='Digite seu e-mail' {...register("email")} disabled={loading} error={errors.email} />
            <StyledInput type='password' placeholder='Digite sua senha' {...register("password")} disabled={loading} error={errors.password} />
            <Flex
            justifyContent={"center"}
            alignItems={"center"}
            width={"30rem"}
            gap={"10px"}
            >
              <Button
              width={"7rem"}
                height={"2rem"}
                bgColor={theme.colors.primary}
              type='submit' disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </Button>
              <Button
                width={"7rem"}
                height={"2rem"}
                bgColor={theme.colors.primary}
              onClick={registerRedirect}>Cadastre-se</Button>
            </Flex>
          </StyledFieldset>
        </form>
      </Flex>
    </Flex>
  )
};