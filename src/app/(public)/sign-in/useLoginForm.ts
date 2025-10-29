"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { loginSchema } from "@/schemas/loginSchema";
import type { LoginSchema } from "@/schemas/loginSchema";
import { users, type User } from "@/data/users";

export function useLoginForm() {
  const [loginError, setLoginError] = useState<string>("");
  const router = useRouter();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginSchema) {
    const user: User | undefined = users.find(
      (u) => u.email === values.email && u.password === values.password
    );

    if (user) {
    //criar token provisorio para acessar o dashboard
      document.cookie = "token=fake-auth-token; path=/"; 
      router.push("/dashboard");
      console.log(user);
    } else {
      setLoginError("Email ou senha inválidos");
    }
  }

  return { form, onSubmit, loginError };
}