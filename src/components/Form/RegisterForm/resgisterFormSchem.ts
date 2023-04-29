import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z.string().nonempty("E-mail é obrigatório").email("Forneça um em-mail válido"),
    password: z.string().min(7, "A senha precisa conter pelo menos 7 caracteres")
    .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula"),
    confirm: z.string().nonempty("É obrigatório confirmar a senha"),
    zipcode: z.string().nonempty("É obrigatório seu CEP")
    .regex(/^[0-9]{5}-[0-9]{3}$/, "É necessário formato XXXXX-XXX"),
    userType: z.any()
}).refine(({password, confirm}) => password === confirm, {
    message: "Os campos de senha e confirmação devem ser iguais.",
    path: ["confirm"],
});

export type TRegisterFormValues = z.infer<typeof registerFormSchema>