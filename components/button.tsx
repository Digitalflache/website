"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  className?: string;
};

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const baseClass =
    variant === "primary" ? "btn-primary" : "btn-ghost";

  if (props.href) {
    return (
      <Link href={props.href} className={cn(baseClass, props.className)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={cn(baseClass, props.className)}
    >
      {props.children}
    </button>
  );
}
