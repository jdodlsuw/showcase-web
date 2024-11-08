"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { CodeBlockWrapper } from "@/components/ui/code-block-wrapper";

export function ComponentSource({ children, className, ...props }) {
  return (
    <CodeBlockWrapper
      expandButtonTitle="Expand"
      className={cn("my-6 overflow-hidden rounded-md", className)}
    >
      {children}
    </CodeBlockWrapper>
  );
}
