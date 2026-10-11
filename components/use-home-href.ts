"use client";

import { usePathname } from "next/navigation";

export function useHomeHref() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (id: string) => (isHome ? `#${id}` : `/#${id}`);
}
