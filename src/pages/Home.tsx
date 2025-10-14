import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../schemas/loginSchema.ts"; //é o objeto com schema do zod na execução
import type { LoginSchema } from "../schemas/loginSchema.ts"; //tipo usado pelo ts para checar os erros em desenvolvimento

import { users, type User } from "@/data/users.ts";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";
import { SiLaravel } from "react-icons/si";




import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardHeader, CardContent, CardFooter } from "@/components/ui/card.tsx";



const Home = () => {
  
  const [loginError, setLoginError] = useState <string> ("");
  const navigate = useNavigate();


  //inicialização do formulario usando o react hook form
  const form = useForm<LoginSchema>({
  resolver: zodResolver(loginSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});

function onSubmit(values: LoginSchema) {
  //LOGIN LOCAL PARA TESTE
  const user: User | undefined = users.find( (user)=> user.email === values.email && user.password === values.password);

  if (user) {
   navigate ("/dashboard");
   console.log("Dados enviados:", values);
  } else {
    setLoginError ("Email ou Senha invalidos")
  }
}

  return (
    <>
   
    <div className="h-screen flex items-center justify-center p-4 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900">
      <div className="flex flex-col items-center w-full max-w-[460px] space-y-4">
        {/* Ícone em círculo */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 border-white">
          <SiLaravel className="w-8 h-8 text-white" />
        </div>

        {/* Texto abaixo do ícone */}
        <span className="text-lg md:text-xl font-semibold text-gray-100">
          Via Vendas
        </span>

          <Card className=" w-full max-w-[380px] 
                            h-full max-h-[600px]
                            md:max-w-lg 
                            lg:max-w-xl lg:h-[560px]
                            border border-gray-600 shadow-xl bg-gray-800 mt-06 p-2 mt-4">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="font-bold text-xl md:text-2xl lg:texto-3xl tracking-tigher text-gray-100 mt-2">Bem vindo de Volta</CardTitle>
              <CardDescription className=" text-sm md:text-base lg:text-lg text-gray-400">Informe seu Email e senha para entrar</CardDescription>
            </CardHeader>

            <CardContent>
            
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 "> {/* form.handleSubmit - valida os dados, se estiver ok, chama a função onSubmit */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">E-mail</FormLabel>
                        <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                          <div className=" relative bg-gray-700">
                          <Input placeholder="exemplo@email.com" {...field} className="text-gray-400 bg-gray-600 border border-gray-500 "/>
                          </div>
                        </FormControl>

                     </FormItem>
                    )}
                    />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                        <FormLabel className="text-gray-100 mt-6 " >Senha</FormLabel>
                        <a href="/ForgotPassword/" className="underline-offset-6 text-blue-400 
                                                              font-semibold inline-block ml-8 mt-4
                                                              decoration-gray-400 underline"> Esqueceu sua senha?</a>
                        </div>
                        <FormControl className="w-full rounded-md border-gray-400 p-3 bg-gray-600">
                          <div className=" bg-gray-700 border-gray-400">
                          <Input type="password" placeholder="******" {...field} className="w-full text-gray-400 bg-gray-600 border border-gray-500" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />

                    {/* MENSAGEM DE ERRO QUANDO LOGIN E SENHA NAO EXISTEM */}

                  <span>{loginError && (<p className="text-red-500 text-sm text-center">{loginError}</p>)}</span>

                  <FormLabel className="flex items-center space-x-2">
                          {/* Contêiner do checkbox */}
                          <div className="relative w-4 h-4">
                            {/* Checkbox real (invisível mas funcional) */}
                            <Input
                              type="checkbox"
                              className="peer absolute inset-0 w-4 h-4 opacity-0"
                            />

                            {/* Caixa customizada */}
                            <div
                              className="w-4 h-4 border border-gray-500 rounded
                                        flex items-center justify-center
                                        peer-checked:bg-gray-100 peer-checked:border-gray-100 mt-2"
                            ></div>

                            {/* Check animado */}
                            <span
                              className="
                                absolute text-black text-[16px] left-[2px] top-[0px] 
                                opacity-0 scale-50 pointer-events-none
                                transition-all duration-200 ease-out
                                peer-checked:opacity-100 peer-checked:scale-100
                              "
                            >
                              ✓
                            </span>
                          </div>

                          {/* Texto ao lado */}
                          <span className="text-xs md:text-sm text-gray-100 mt-3">Lembrar-me</span>
                        </FormLabel>

                  <Button type="submit" className="w-full bg-blue-500 text-white 
                                      hover:bg-blue-600 
                                      focus:outline-none 
                                      focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
                                      mt-6 h-10
                                      transition-transform duration-200">Entrar</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex items-center md:flex-row md:space-y-0 md:space-x-2 md:justify-center mb-2">
                <span className="text-sm text-gray-400">Nao tem uma conta?</span>
                <a href="/Register/" className="text-sm text-blue-00 font-semibold hover:underline underline-offset-6
                                              text-blue-400 inline-block decoration-gray-400 
                                              underline"> Cadastrar</a>
            </CardFooter>
          </Card>   
      </div>
    </div>
    </>
  )
}

export default Home
