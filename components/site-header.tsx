"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";

type NavItem = {
  label: string;
  href: Route;
};

const navItems: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Prozess", href: "/prozess" },
  { label: "Preise", href: "/preise" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Über uns", href: "/ueber-uns" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-transparent transition-colors",
        scrolled && "border-slate-800/70 bg-slate-950/80 backdrop-blur"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-linear-to-br from-sky-400 to-cyan-400 text-slate-950 shadow-lg shadow-sky-500/40">
              <span className="text-sm font-black leading-none tracking-tight">
                DF
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white sm:text-base">
                Digitalfläche
              </span>
              <span className="text-[11px] text-slate-400 sm:text-xs">
                Web-Studio aus Tirol
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-white",
                  active && "text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex">
          <Button href="/kontakt" variant="primary">
            Kostenloses Erstgespräch
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 p-2 text-slate-200 transition hover:border-sky-500/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:hidden"
        >
          <span className="sr-only">Navigation umschalten</span>
          <div className="flex h-4 w-4 flex-col justify-between">
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full rounded bg-current transition",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </Container>

      {open && (
        <div className="border-t border-slate-800/70 bg-slate-950/95 backdrop-blur md:hidden">
          <Container className="flex flex-col gap-2 py-4">
            <nav className="flex flex-col gap-1 text-sm text-slate-200">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-2 py-2 transition hover:bg-slate-800",
                      active && "bg-slate-800 text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-2">
              <Button href="/kontakt" className="w-full">
                Kostenloses Erstgespräch
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
