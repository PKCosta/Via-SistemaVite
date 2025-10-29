(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
//  Rotas públicas e seu comportamento quando autenticado
const publicRoutes = [
    {
        path: "/sign-in",
        whenAuthenticated: "redirect"
    },
    {
        path: "/register",
        whenAuthenticated: "redirect"
    },
    {
        path: "/forgotPassword",
        whenAuthenticated: "redirect"
    }
];
//  Rota padrão para redirecionar quando o usuário não estiver autenticado
const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/sign-in";
function middleware(request) {
    const path = request.nextUrl.pathname;
    // Verifica se a rota atual é pública
    const publicRoute = publicRoutes.find((route)=>route.path === path);
    // Captura o token de autenticação (simples verificação de existência)
    const authToken = request.cookies.get("token")?.value;
    // 1Caso o usuário não esteja autenticado e esteja acessando uma rota pública → OK
    if (!authToken && publicRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Caso o usuário não esteja autenticado e esteja acessando uma rota privada → redireciona pro login
    if (!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // Caso o usuário esteja autenticado e tente acessar uma rota pública marcada para redirecionar
    if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = "/dashboard"; // destino padrão pós-login
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // Caso o usuário esteja autenticado e acesse uma rota privada → OK
    if (authToken && !publicRoute) {
        // Aqui você poderia futuramente validar expiração do token JWT
        // e até implementar refresh tokens — mas isso é feito no servidor, não no middleware
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Fallback (caso não entre em nenhuma das condições acima)
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        // Aplica o middleware em todas as rotas, exceto:
        // - /api (rotas de API)
        // - _next/static (arquivos estáticos)
        // - _next/image (imagens otimizadas)
        // - favicon, sitemap, robots
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map