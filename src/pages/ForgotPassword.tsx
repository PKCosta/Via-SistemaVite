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
    <div>
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
            <CardTitle className="text-xl md:text-2xl lg:texto-3xl tracking-tigher text-gray-100 mt-2 mb-2">Forgot password</CardTitle>
            <CardDescription className="text-sm text-gray-400">Enter your email to receive a password reset link</CardDescription>
            </CardHeader>                  
            <CardContent>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-100">Email Adress</FormLabel>
                        <FormControl className="w-full rounded-md border-gray-400 p-3 br-gray-600">
                          <Input placeholder="email@exemplo.com" className="text-gray-200 bg-gray-600 border border-gray-500 mt-2 " {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-white  
                                      hover:bg-gray-300 
                                      focus:outline-none 
                                      focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
                                      h-10transition-transform duration-200 text-gray-800">Email Password Resett Link</Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex items-center md:flex-row md:space-y-0 md:space-x-2 md:justify-center mb-4">
            <span className="text-sm md:text-base lg:text-lg text-gray-400">Or, return to </span>
            <a href="/" className=" text-sm text-blue-00 font-semibold hover:underline underline-offset-6
                                  text-white inline-block
                                  decoration-gray-400 underline ">log in</a>                 
            
            </CardFooter> 
           
          </Card>   
      </div>
    </div>
      
    </div>
  )
}

export default ForgotPassword
