import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { SiLaravel } from "react-icons/si";
import { useState } from "react";
import './App.css';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";


function App() {  
    const [isPressed, setIsPressed] = useState(false);

    const handleClickButton = () => setIsPressed(true);

    setTimeout(() => {
      setIsPressed(false)},200);
   
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-900">
        <main >
              <div className="flex flex-col items-center space-y-2 mb-6">                    
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500">
                    <SiLaravel className=" w-8 h-8 " />
                  </div>                      
                      <h2 className="text-white font-semibold text-lg">
                        Via Vendas
                      </h2> 
                      <Card className="flex w-92 rounded-xl border-gray-600 p-1 bg-gray-800 mt-1 shadow-xl justify-center">
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl font-bold  text-gray-100 tracking-tighter mb-2 mt-2">Bem vindo de Volta</CardTitle>
                          <CardDescription className=" text-gray-300"> Informe seu e-mail e enha para Entrar</CardDescription>
                        </CardHeader>

                        <CardContent>
                          
                          <Label htmlFor="email" className="text-gray-100">Email</Label>                     
                          <div className="justify-between items-center w-full rounded-md  border-gray-400 p-3 bg-gray-600 mt-1">
                            <Input id="email"  placeholder="exemplo@mail.com" type="email" className="items-center rounded-md bg-gray-700 px-4 py-2 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-white"></Input>
                          </div >

                          <div className="flex justify-between text-gray-100 w-full rounded-md border-gray-500 p-1 mt-4">
                            <Label htmlFor="senha" className="w-fullinline-block mt-6">Senha</Label>
                            <a href="#" className=" underline-offset-6 text-blue-400 inline-block ml-8 mt-4 decoration-gray-400 underline">Esqueceu sua Senha?</a>
                          </div>

                          <div className=" w-full rounded-md  border-gray-400 p-3 bg-gray-600">
                          <Input id="senha"  placeholder="********" type="password" className="items-center rounded-md bg-gray-700 px-4 py-2 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-white"></Input>
                          </div>

                          <div className="flex items-center space-x-2 text-gray-200 mt-5">
                            <Input id="checkbox" type="checkbox" className="h-4 w-4 accent-white text-black align-left rounded-md"></Input>
                            <CardDescription className="ml-2  block text-sm text-gray-100">Lembrar-me</CardDescription>
                          </div>  

                          <Button
                          onMouseDown={handleClickButton}                        
                          className={`bg-blue-500 text-white 
                                      hover:bg-blue-600 
                                      focus:outline-none 
                                      focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900
                                      mt-6 w-full h-10
                                      transition-transform duration-200
                                      
                                      ${isPressed ? " ring-4 ring-blue-400 ring-offset-2" : "ring-0"}
                                    `}
                            > Entrar</Button> 

                        </CardContent>
                        <CardFooter className="flex justify-center items-center text-sm text-gray-600 mb-2">
                            <Label className="text-gray-100 mr-1">Não tem uma conta?</Label>
                            <a href="" className="text-blue-400 underline underline-offset-4 decoration-gray-400">Cadastrar</a>                          
                        </CardFooter>
                      </Card>               
              </div>                
        </main>
      </div>    
    </>      
  )
}

export default App;
