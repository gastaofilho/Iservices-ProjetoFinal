import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().nonempty("O e-mail é obrigatório."),
    password: z.string().nonempty("A senha é obrigatória."),
})

export type TLoginFormValues = z.infer<typeof LoginFormSchema>