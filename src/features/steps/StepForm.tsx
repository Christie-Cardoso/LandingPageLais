"use client";

import { ChevronLeft, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StepFormProps } from "../../lib/types";

const schema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome")
    .regex(
      /^[a-záàâãéèêíïóôõöúçñ\s]+$/i,
      "Nome não pode conter números ou caracteres especiais"
    )
    .refine(
      (val) => val.trim().split(/\s+/).length >= 2,
      "Informe nome e sobrenome"
    ),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .regex(/^[0-9()\-+\s]+$/, "Telefone inválido")
    .refine((val) => {
      const digitos = val.replace(/\D/g, "");
      return digitos.length === 10 || digitos.length === 11;
    }, "Telefone deve ter 10 ou 11 dígitos (DDD + número)"),
  email: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|outlook\.com)$/i.test(val),
      "Email deve ser de gmail.com, hotmail.com ou outlook.com"
    ),
});

type FormData = z.infer<typeof schema>;

export const StepForm: React.FC<StepFormProps> = ({
  name,
  phone,
  email,
  setName,
  setPhone,
  setEmail,
  handleBack,
  handleFinish,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: name || "",
      phone: phone || "",
      email: email || "",
    },
  });

  const onSubmit = (data: FormData) => {
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email || "");
    handleFinish();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="animate-fade-in max-w-md mx-auto h-full flex flex-col"
    >
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center gap-1 text-stone-400 hover:text-stone-600 mb-6 w-fit text-sm font-bold cursor-pointer"
      >
        <ChevronLeft size={16} /> Voltar
      </button>

      <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">
        Estamos quase lá!
      </h3>

      <div className="space-y-4 flex-1">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            Nome Completo
          </label>
          <input
            {...register("name")}
            type="text"
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            WhatsApp
          </label>
          <input
            {...register("phone")}
            type="tel"
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="(31) 99999-9999"
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-stone-700 mb-1">
            Email (Opcional)
          </label>
          <input
            {...register("email")}
            type="email"
            className="w-full p-4 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-stone-50 focus:bg-white transition-colors"
            placeholder="exemplo@email.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-100">
        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-emerald-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
        >
          Agendar no WhatsApp <CheckCircle size={20} />
        </button>
      </div>
    </form>
  );
};
