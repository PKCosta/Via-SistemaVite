import * as z from "zod";

export const ForgotPasswordSchema = z.object ({
    email: z.string()
            .email("Formato de E-mail inválido"),
});

export type ForgotPasswordSchemaType = z.infer <typeof ForgotPasswordSchema>;