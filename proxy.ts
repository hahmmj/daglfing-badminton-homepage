import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./lib/i18n";

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const lower = acceptLanguage.toLowerCase();

  if (lower.includes("de")) return "de";
  if (lower.includes("ko")) return "ko";
  if (lower.includes("en")) return "en";

  return defaultLocale;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${getLocale(request)}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};