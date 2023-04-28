import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, TLoginFormValues } from './loginFormSchema';
import { Input } from '../Input';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);
  const {register, handleSubmit, formState: {errors}} = useForm<TLoginFormValues>({
    resolver: zodResolver(LoginFormSchema)
  })
  const submit: SubmitHandler<TLoginFormValues> = (formData) => {   
    userLogin(formData, setLoading);       
  }
  return(
  <form onSubmit={handleSubmit(submit)}>
    <Input type='text' placeholder='Digite seu e-mail' {...register("email")} disabled={loading} error={errors.email} />
    <Input type='password' placeholder='Digite sua senha' {...register("password")} disabled={loading} error={errors.password} />
    <button type='submit' disabled={loading}>
      {loading ? "Entrando..." : "Entrar"}
    </button>
  </form>
  )
};