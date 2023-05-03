import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Input } from "../Form/Input/index";
import { zodResolver } from "@hookform/resolvers/zod";
import { jobRegisterSchema, TJobRegisterValues } from "./jobRegisterSchema";

export const JobRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TJobRegisterValues>({
    resolver: zodResolver(jobRegisterSchema),
  });

  const submit: SubmitHandler<TJobRegisterValues> = (formData) => {
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        placeholder="Digite o título"
        {...register("title")}
        disabled={loading}
        error={errors.title}
      />
      <Input
        type="text"
        placeholder="Digite uma breve descrição do seu serviço"
        {...register("description")}
        disabled={loading}
        error={errors.description}
      />
      <Input
        type="text"
        placeholder="Digite seu telefone para contato"
        {...register("contact")}
        disabled={loading}
        error={errors.contact}
      />
      <select {...register("jobCategory")} >
        <option value="">Selecione o seu tipo de serviço</option>
        <option value="diarista">Diarista</option>
        <option value="pintor">Pintor</option>
        <option value="pedreiro">Pedreiro</option>
        <option value="eletricista">Eletricista</option>
        <option value="encanador">Encanador</option>
        <option value="all">Serviços Gerais</option>
      </select>
      
      <button type="submit" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};