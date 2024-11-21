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
      <nav className="mt-7 h-14 flex items-center justify-between">
        <div className="w-40 z-10">
          <div className="flex flex-col text-background text-sm gap-1">
            <Icons.logo />
            <span>by ntsan</span>
          </div>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
