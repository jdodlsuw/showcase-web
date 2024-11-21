"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { AppMenu } from "@/components/app/menu";
import { MobileNav } from "./mobile-nav";
import { createContext, useMemo, useState, useContext } from "react";

const HeaderContext = createContext(null);

function useHeader() {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderContext.");
  }

  return context;
}

function AppHeader() {
  const [open, setOpen] = useState(false);
  const contextValue = useMemo(
    () => ({
      open,
      setOpen,
    }),
    [open, setOpen]
  );
  return (
    <HeaderContext.Provider value={contextValue}>
      <header className="sticky top-0 py-1 px-6 bg-background z-10">
        <nav className="mt-7 h-14 flex items-center justify-between">
          <div className="w-40 z-10">
            {open ? (
              <div className="flex flex-col text-background text-sm gap-1">
                <Icons.logo />
                <span>by ntsan</span>
              </div>
            ) : (
              <div className="flex flex-col text-foreground text-sm gap-1">
                <Icons.logo fill="#fffce1" />
                <span>by ntsan</span>
              </div>
            )}
          </div>
          <MobileNav />
        </nav>
      </header>
    </HeaderContext.Provider>
  );
}

export { useHeader, AppHeader };
