import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/loginSchema.ts"; //é o objeto com schema do zod na execução
import type { LoginSchema } from "../schemas/loginSchema.ts"; //tipo usado pelo ts para checar os erros em desenvolvimento


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

  //inicialização do formulario usando o react hook form
  const form = useForm<LoginSchema>({
  resolver: zodResolver(loginSchema),
  defaultValues: {
    email: "",
    password: "",
  },
});

function onSubmit(values: LoginSchema) {
  console.log("Dados enviados:", values);
}

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className=" w-[390px]  max-w-full  h-[520px] max-h-full border border-gray-300 shadow-md">
        <CardHeader>
          <CardTitle>Bem vindo de Volta</CardTitle>
          <CardDescription>Informe seu Email e senha para entrar</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu@email.com" {...field} className="w-full"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                    <FormLabel>Senha</FormLabel>
                    <a href="#" className="text-sm text-blue-600 hover:underline"> Esqueceu sua senha?</a>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="******" {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
                />
                <div className="flex items-center space-x-2">
                  <Input type="checkbox" className="w-4 h4" />
                  <span className="text-sm text-gray-600">Lembrar-me</span>
                </div>

              <Button type="submit" className="w-full">Entrar</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
            <span className="text-sm text-gray-600">Nao tem conta?</span>
            <a href="#" className="text-sm text-blue-600 hover:underline"> Cadastrar</a>
        </CardFooter>
      </Card>   
    </div>
    </>
  )
}

export default Home
