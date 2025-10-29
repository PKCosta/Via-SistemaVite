import { NextRequest, NextResponse } from "next/server";
import type { MiddlewareConfig } from "next/server";

//  Rotas públicas e seu comportamento quando autenticado
const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/forgotPassword", whenAuthenticated: "redirect" },
] as const;

//  Rota padrão para redirecionar quando o usuário não estiver autenticado
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Verifica se a rota atual é pública
  const publicRoute = publicRoutes.find((route) => route.path === path);

  // Captura o token de autenticação (simples verificação de existência)
  const authToken = request.cookies.get("token")?.value;

  // 1Caso o usuário não esteja autenticado e esteja acessando uma rota pública → OK
  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  // Caso o usuário não esteja autenticado e esteja acessando uma rota privada → redireciona pro login
  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  // Caso o usuário esteja autenticado e tente acessar uma rota pública marcada para redirecionar
  if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/dashboard"; // destino padrão pós-login
    return NextResponse.redirect(redirectUrl);
  }

  // Caso o usuário esteja autenticado e acesse uma rota privada → OK
  if (authToken && !publicRoute) {
    // Aqui você poderia futuramente validar expiração do token JWT
    // e até implementar refresh tokens — mas isso é feito no servidor, não no middleware
    return NextResponse.next();
  }

  // Fallback (caso não entre em nenhuma das condições acima)
  return NextResponse.next();
}

// Define as rotas que o middleware deve interceptar

export const config: MiddlewareConfig = {
  matcher: [
    // Aplica o middleware em todas as rotas, exceto:
    // - /api (rotas de API)
    // - _next/static (arquivos estáticos)
    // - _next/image (imagens otimizadas)
    // - favicon, sitemap, robots
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
