"use client";

import { usePathname, useRouter } from "next/navigation";

export default function HomeTopLink({
  lang,
  className,
  children,
}: {
  lang: string;
  className?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname === `/${lang}`) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    router.push(`/${lang}`);
  };

  return (
    <a href={`/${lang}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}