"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
// import { useMetaColor } from "@/hooks/use-meta-color"
import { Button } from "@/components/ui/button";
import { Menu, Plus, Minus } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useHeader } from "./header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";
import AuthButtons from "@/components/app/auth-button";

export function MobileNav() {
  const { open, setOpen } = useHeader();
  const navRef = useRef(null);
  const tl = useRef();
  const accordionTl = useRef();
  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to("nav", { visibility: "visible" })
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

      accordionTl.current = gsap
        .timeline({ paused: true })
        .to("svg > path:last-child", { opacity: 0 });
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

  const toggleAccordion = contextSafe((item) => {
    if (item) {
      accordionTl.current.play();
    } else {
      accordionTl.current.reverse();
    }
  });

  return (
    <div ref={navRef}>
      <nav
        className="flex flex-col fixed inset-0"
        style={{ visibility: "hidden" }}
      >
        <div
          className="flex-1 bg-[#fffce1] pt-28 px-8 rounded-xl flex"
          style={{ transform: "translateX(-100%)" }}
        >
          <ul className="flex-1 text-xl font-semibold  text-background flex flex-col gap-2">
            {docsConfig.mobileNav.map(({ title, href, items }, i) => (
              <>
                {!items?.length ? (
                  <li key={i} onClick={toggle}>
                    <Link href={href}>{title}</Link>
                  </li>
                ) : (
                  <Accordion
                    key={i}
                    type="single"
                    collapsible
                    onValueChange={toggleAccordion}
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        <span>{title}</span>
                        <Plus />
                      </AccordionTrigger>
                      <AccordionContent className="pl-4 pt-2">
                        {items.map((item, ii) => (
                          <li key={ii} onClick={toggle}>
                            <Link href={item.href}>{item.title}</Link>
                          </li>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )}
              </>
            ))}
          </ul>
          <AuthButtons />
        </div>
        <div
          className="bg-background p-4 h-36 border border-foreground rounded-xl relative"
          style={{ transform: "translateX(100%)" }}
        >
          <ul className="text-foreground font-semibold">
            <li>
              <Link href={siteConfig.links.github}>Github</Link>
            </li>
            <li>
              <Link href={siteConfig.links.facebook}>Facebook</Link>
            </li>
            <li>
              <Link href={siteConfig.links.instagram}>Instagram</Link>
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
