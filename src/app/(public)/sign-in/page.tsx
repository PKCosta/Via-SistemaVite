"use client";

import Link from "next/link";
import { SiLaravel } from "react-icons/si";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

import { useLoginForm } from "./useLoginForm";

const LoginPage = () => {
  const { form, onSubmit, loginError } = useLoginForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-bl from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden">
      <div className="flex flex-col items-center justify-center w-full max-w-[460px] px-4">
        {/* Ícone e título */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 border-white">
          <SiLaravel className="w-8 h-8 text-white" />
        </div>
        <span className="text-lg md:text-xl font-semibold text-gray-100 mt-2">Via Vendas</span>

        {/* Card */}
        <Card className="w-full max-w-[380px] md:max-w-lg lg:max-w-xl border border-gray-600 shadow-xl bg-gray-800 mt-6 p-4 rounded-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="font-bold text-xl md:text-2xl text-gray-100 mt-2">
              Bem-vindo de volta
            </CardTitle>
            <CardDescription className="text-sm md:text-base text-gray-400">
              Informe seu email e senha para entrar
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-100">E-mail</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            placeholder="exemplo@email.com"
                            {...field}
                            className="text-gray-400 bg-gray-600 border border-gray-500 w-full"
                          />
                        </FormControl>
                        <FormMessage className="absolute text-xs text-red-500 mt-1 left-1 top-full" />
                      </div>
                    </FormItem>
                  )}
                />

               
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <FormLabel className="text-gray-100 mt-4 md:mt-6">Senha</FormLabel>
                        <Link
                          href="/forgotPassword"
                          className="text-sm text-blue-400 font-semibold mt-2 md:mt-4 md:ml-4 hover:underline underline-offset-4"
                          >
                          Esqueceu sua senha?
                        </Link>
                      </div>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="******"
                            {...field}
                            className="w-full text-gray-400 bg-gray-600 border border-gray-500"
                            />
                        </FormControl>
                        <FormMessage className="absolute text-xs text-red-500 mt-1 left-1 top-full" />
                      </div>
                    </FormItem>
                  )}
                  />

                          
                <FormLabel className="flex items-center space-x-2">
                  <div className="relative w-4 h-4">
                    <Input type="checkbox" className="peer absolute inset-0 w-8 h-8 opacity-0" />
                    <div className="w-4 h-4 border border-gray-500 rounded flex items-center justify-center peer-checked:bg-gray-100 peer-checked:border-gray-100 mt-2"></div>
                    <span className="absolute text-black text-[16px] left-0.5 top-[7psx] opacity-0 scale-50 pointer-events-none transition-all duration-200 ease-out peer-checked:opacity-100 peer-checked:scale-100">
                      ✓
                    </span>
                  </div>

                  <span className="text-xs md:text-sm text-gray-100 mt-3 flex flex-col md:flex-row md:items-center md:justify-between">Lembrar-me</span>
                  </FormLabel>

                <div className="relative flex justify-center">

                  {loginError && (<p className=" absolute text-red-500 text-sm text-center">{loginError}</p>)}

                  <Button
                    type="submit"
                    className=" w-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none mt-7 h-10 
                    transition-transform duration-200">Entrar
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 mt-4 text-center">
            <span className="text-sm text-gray-400 whitespace-normal wrap-break-words">
              Não tem uma conta?
            </span>
            <Link
              href="/register"
              className="text-sm font-semibold text-blue-400 hover:underline underline-offset-4 wrap-break-words"
            >
              Cadastrar
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
