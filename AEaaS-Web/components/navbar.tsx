"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

const ThemeToggle = dynamic(
  () => import("@/components/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false },
);

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="container">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-emerald-400 text-sm font-bold text-white shadow-glow">
              AE
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold tracking-[0.24em] text-slate-900 dark:text-white">
                AEaaS
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Autonomous Employees as a Service
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <Button
              aria-label="Toggle mobile menu"
              size="icon"
              variant="secondary"
              onClick={() => setOpen((current) => !current)}
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>

        {open ? (
          <div className="space-y-2 border-t border-slate-200/60 py-4 dark:border-white/10 lg:hidden">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "surface text-slate-700 dark:text-slate-200",
                )}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
