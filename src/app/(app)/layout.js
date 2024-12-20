"use client";

import { AppFooter } from "@/components/app/footer";
import { AppHeader } from "@/components/app/header";
import { SessionProvider } from "next-auth/react";

export default function AppLayout({ children }) {
  return (
    <SessionProvider>
      <main className="h-dvh overflow-hidden flex-1 flex flex-col">
        <AppHeader />
        <main className="min-h-0 overflow-auto flex-1 px-4">{children}</main>
        <AppFooter />
      </main>
    </SessionProvider>
  );
}
