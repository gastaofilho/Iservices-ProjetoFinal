import { z } from "zod";

export const jobRegisterSchema = z.object({
    title: z.string().nonempty("Um título é obrigatório"),
    description: z.string().nonempty("Decrição é obrigatória"),
    contact: z.string().nonempty("Seu contato é obrigatório"),
    jobCategory: z.string().nonempty("Você precisa selecionar uma categoria"),
    });

export type TJobRegisterValues = z.infer<typeof jobRegisterSchema>