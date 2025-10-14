import * as z from "zod";

function validateCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let soma = 0;

  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }
  
  let resto = soma % 11;

  let digito1 = resto < 2 ? 0 : 11 - resto;

  if (digito1 !== parseInt(cpf[9])){
    return false;
  }

  soma = 0;

  for (let i = 0; i < 10; i++){
    soma += parseInt(cpf[i]) * (11 - i);
  }

  resto = soma % 11;

  let digito2 = resto < 2 ? 0 : 11 - resto;

  if (digito2 !== parseInt(cpf[10])){
    return false;
  }

  return true;
}

export const registerSchema = z
  .object({
    name:   z.string().min(5, "O nome deve conter pelo menos 5 letras"),
    email:  z.string().email("Formato de E-mail inválido"),
    cpf:    z.string()
             .min(11, "CPF deve conter 11 dígitos")
             .refine(validateCPF, { message: "CPF inválido" }),

    password:   z.string()
                 .min(6, "A senha deve ter pelo menos 6 caracteres"),

    confirmPassword: z.string()
                      .min(1, "Por favor, confirme sua senha"),
  })
  
  .superRefine((data, ctx) => {
    // validação do CPF
    if (!validateCPF(data.cpf)) {
      ctx.addIssue({
        path: ["cpf"],
        code: z.ZodIssueCode.custom,
        message: "CPF inválido",
      });
    }

    // Validação da senha
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: z.ZodIssueCode.custom,
        message: "As senhas não coincidem",
      });
    }
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;
