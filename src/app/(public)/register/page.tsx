"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchemaType  } from "@/schemas/registerSchema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { SiLaravel } from "react-icons/si";



const Register = () => {


  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    mode: "onSubmit",
    reValidateMode:"onChange",
    shouldFocusError:true,
    defaultValues:{
      name:"",
      email:"",
      cpf:"",
      password:"",
      confirmPassword:"",
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    /* codigo para backend  */
       console.log("Dados válidos:", data);
  };




  return (
      <div className="h-screen flex items-center justify-center p-4 bg-linear-to-bl from-slate-900 via-slate-800 to-slate-900">
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
                            h-auto 
                            md:max-w-lg 
                            lg:max-w-xl
                            border border-gray-600 shadow-xl bg-gray-800 mt-6 p-2">
            <CardHeader className="space-y-2 text-center">
            <CardTitle className="font-bold text-xl md:text-2xl lg:texto-3xl tracking-tigher text-gray-100 mt-2">Criar sua Conta</CardTitle>
            <CardDescription className=" text-sm md:text-base  text-gray-400">Informe seus dados abaixo para criar sua conta</CardDescription>
            </CardHeader>                  
            <CardContent>

              <Form {...form}>
                <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Nome completo</FormLabel>
                        <div className="relative">
                          <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                            <Input placeholder="Digite seu nome completo" className="text-gray-400 bg-gray-700 border border-gray-500 " {...field} />
                          </FormControl>
                          <FormMessage className="absolute text-sx text-red-500 mt-1 left-1 top-full" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Email</FormLabel>
                        <div className="relative">
                          <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                            <Input placeholder="email@exemplo.com" className="text-gray-400 bg-gray-700 border border-gray-500"  {...field} />
                          </FormControl>
                          <FormMessage className="absolute text-sx text-red-500 mt-1 left-1 top-full" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">CPF</FormLabel>
                        <div className="relative">
                          <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                            <Input placeholder="000.000.000-00" className="text-gray-400 bg-gray-700 border border-gray-500" {...field} />
                          </FormControl>
                          <FormMessage className="absolute text-sx text-red-500 mt-1 left-1 top-full" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Senha</FormLabel>
                        <div className="relative">
                          <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                            <Input type="password" placeholder="********" className="text-gray-400 bg-gray-700 border border-gray-500" {...field} />
                          </FormControl>
                          <FormMessage className="absolute text-sx text-red-500 mt-1 left-1 top-full" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Confirmar Senha</FormLabel>
                        <div className="relative">
                          <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                            <Input type="password" placeholder="********" className="text-gray-400 bg-gray-700 border border-gray-500"  {...field} />
                          </FormControl>
                          <FormMessage className="absolute text-sx text-red-500 mt-1 left-1 top-full" />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-blue-500 text-white 
                                      hover:bg-blue-600 
                                      focus:outline-none 
                                      focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
                                      h-10
                                      transition-transform duration-200">Criar Conta</Button>
                </form>
              </Form>
            </CardContent>

            <CardFooter className="flex items-center md:flex-row md:space-y-0 md:space-x-2 md:justify-center mb-2">
              <span className="text-sm text-gray-400"> Ja tem uma conta?</span>
              <a href="/" className="text-sm text-blue-00 font-semibold hover:underline underline-offset-6 text-blue-400 inline-block decoration-gray-400 underline">Entrar </a>                 
            </CardFooter>           
          </Card>
        </div>   
      </div>
  )
}

export default Register