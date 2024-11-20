"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
// import { useMetaColor } from "@/hooks/use-meta-color"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
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
          className="flex-1 bg-[#fffce1] pt-24"
          style={{ transform: "translateX(-100%)" }}
        >
          <ul>
            <li><button className="text-lg">Docs</button></li>
          </ul>
        </div>
        <div className="h-36" style={{ transform: "translateX(100%)" }}></div>
      </nav>
      <button onClick={toggle} className={cn("flex border-2 rounded-full px-4 py-1 gap-2 border-foreground relative z-1")} variant="outline">
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
