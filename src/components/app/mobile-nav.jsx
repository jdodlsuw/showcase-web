"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
// import { useMetaColor } from "@/hooks/use-meta-color"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useHeader } from "./header";
export function MobileNav() {
  const { open, setOpen } = useHeader();
  const navRef = useRef(null);
  const tl = useRef();
  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(
          "nav > div:first-child",
          {
            x: 0,
            ease: "power2.in",
          },
          0
        )
        .to("nav > div:last-child", { x: 0, ease: "power2.in" }, 0)
        .to(
          "button",
          {
            borderColor: "#000000",
            color: "#000000",
          },
          0
        )
        .to(
          "svg",
          {
            color: "#000000",
          },
          0
        )
        .to("svg > line:nth-child(1)", { opacity: 0, x: "-100%" }, 0)
        .to(
          "svg > line:nth-child(2)",
          {
            rotate: 45,
            transformOrigin: "left",
          },
          0
        )
        .to(
          "svg > line:nth-child(3)",
          {
            rotate: -45,
            transformOrigin: "left",
          },
          0
        );
    },
    { scope: navRef }
  );

  const toggle = contextSafe(() => {
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }

    setOpen(!open);
  });

  return (
    <div ref={navRef}>
      <nav className="flex flex-col fixed inset-0">
        <div
          className="flex-1 bg-[#fffce1] pt-28 px-4 rounded-xl"
          style={{ transform: "translateX(-100%)" }}
        >
          <ul className="text-xl font-semibold px-4 text-background flex flex-col gap-2">
            {docsConfig.mobileNav.map(({ title, href }, index) => (
              <li key={index}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="p-4 h-36 border border-foreground rounded-xl relative"
          style={{ transform: "translateX(100%)" }}
        >
          <ul className="text-foreground font-semibold">
            <li>
              <Link href="https://github.com/jdodlsuw">Github</Link>
            </li>
            <li>
              <Link href="https://facebook.com">Facebook</Link>
            </li>
            <li>
              <Link href="https://instagram.com">Instagram</Link>
            </li>
          </ul>
          <div className="absolute right-8 bottom-0 w-36 h-full t-2/5">
            <Image fill src="/cat.gif" alt="" />
          </div>
        </div>
      </nav>
      <button
        onClick={toggle}
        className={cn(
          "flex border-2 rounded-full px-4 py-1 gap-2 border-foreground relative z-1"
        )}
        variant="outline"
      >
        <span>Menu</span>
        <Menu />
      </button>
    </div>
  );
}

function MobileLink({ href, onOpenChange, className, children, ...props }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-base", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
