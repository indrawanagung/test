import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Mendapatkan token dari cookies
  const token = request.cookies.get('token')?.value;
  const loginPage = '/login';
  const registerPage = '/register';

  
   // Jika token tidak ada dan pengguna mengakses halaman selain login, redirect ke login
   if (!token && request.nextUrl.pathname !== loginPage && request.nextUrl.pathname !== registerPage) {
    return NextResponse.redirect(new URL(loginPage, request.url));
  }

  if(token && (request.nextUrl.pathname === loginPage || request.nextUrl.pathname === registerPage) ) {
    return NextResponse.redirect(new URL("/", request.url));

  }

  // Jika token ada, biarkan request berjalan
  return NextResponse.next();
}

// Tentukan route mana yang memerlukan middleware
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // Apply to all routes except static files
  ],
};
