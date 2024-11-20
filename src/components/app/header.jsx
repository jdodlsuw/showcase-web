"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { AppMenu } from "@/components/app/menu";
import { MobileNav } from "./mobile-nav";

export function AppHeader() {

  return (
    <header className="sticky top-0 py-1 px-6 bg-background z-10">
      <nav className="h-14 flex items-center justify-between">
        <Icons.logo className="h-6 w-6" />
        <MobileNav />
      </nav>
    </header>
  );
}
