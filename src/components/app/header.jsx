"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export function AppHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 py-1 px-6 bg-background z-10">
      <nav className="h-14 flex items-center">
        <Button variant="outline">
          <span>Menu</span>
          <Menu onClick={toggleSidebar} />
        </Button>
      </nav>
      <nav className="h-14 flex items-center">
        <Menu onClick={toggleSidebar} />
      </nav>
    </header>
  );
}
