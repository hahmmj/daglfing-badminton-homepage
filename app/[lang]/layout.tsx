import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  return <>{children}</>;
}