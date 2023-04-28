import { useForm, SubmitHandler } from 'react-hook-form'
import { useContext, useState } from 'react';
import { UserContext } from '../../../providers/UserContext';
import { TRegisterFormValues, registerFormSchema } from './resgisterFormSchem';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from '../Input';

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const { userRegister } = useContext(UserContext);
  const { register, handleSubmit, formState: {errors}} = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit:SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData, setLoading)
            
  }
  return(
    <form onSubmit={handleSubmit(submit)}>
      <Input type='text' placeholder='Digite seu nome' {...register("name")} disabled={loading} error={errors.name} />
      <Input type='email' placeholder='Digite seu e-mail' {...register("email")} disabled={loading} error={errors.email} />
      <Input type='password' placeholder='Digite sua senha' {...register("password")} disabled={loading} error={errors.password} />
      <Input type='password' placeholder='Digite novamente sua senha' {...register("confirm")} disabled={loading} error={errors.confirm} />
      <button type='submit' disabled={loading} >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  )
};