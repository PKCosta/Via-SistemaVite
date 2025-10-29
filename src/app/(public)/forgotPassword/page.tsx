"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { ForgotPasswordSchema, type ForgotPasswordSchemaType} from "@/schemas/forgotPasswordSchema";



import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SiLaravel } from "react-icons/si";


const ForgotPassword = () => {

  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues:{
      email:"",
    },
  });

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    /* codigo para backend */
    console.log("Dados válidos:", data);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-bl from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
  <div className="flex flex-col items-center justify-center w-full max-w-[460px] px-4">

    {/* Ícone em círculo */}
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 border border-white">
      <SiLaravel className="w-8 h-8 text-white" />
    </div>

    {/* Texto abaixo do ícone */}
    <span className="text-lg md:text-xl font-semibold text-gray-100 mt-2">
      Via Vendas
    </span>

    {/* Card */}
    <Card
      className="w-full max-w-[380px] md:max-w-lg lg:max-w-xl 
                 border border-gray-600 shadow-xl bg-gray-800 
                 mt-6 p-4 rounded-lg"
    >
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-xl md:text-2xl tracking-tight text-gray-100 mt-2 mb-2">
          Esqueceu sua Senha
        </CardTitle>
        <CardDescription className="text-sm text-gray-400">
          Digite seu e-mail para receber o link de redefinição de senha.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-100">Endereço de E-mail</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        placeholder="email@exemplo.com"
                        className="text-gray-200 bg-gray-700 border border-gray-500 mt-2 w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="absolute text-xs text-red-500 mt-1 left-1 top-full" />
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white 
                         hover:bg-blue-600 
                         focus:outline-none 
                         focus:ring-2 focus:ring-blue-400 
                         focus:ring-offset-2 focus:ring-offset-gray-900
                         h-10 transition-transform duration-200"
            >
              Link para redefinir senha
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 mt-4 text-center">
        <span className="text-sm text-gray-400 whitespace-normal wrap-break-words">
          Ou, volte para
        </span>
        <a
          href="/"
          className="text-sm font-semibold text-blue-400 hover:underline underline-offset-4 wrap-break-words"
        >
          log in
        </a>
      </CardFooter>
    </Card>
  </div>
</div>
  )
}

export default ForgotPassword
