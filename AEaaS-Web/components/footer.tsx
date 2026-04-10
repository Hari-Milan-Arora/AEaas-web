import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-10 dark:border-white/10">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-950 dark:text-white">AEaaS</p>
          <p className="max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">
            Founder-led AI systems company designing autonomous employees for the
            next era of work.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
              href={link.href}
              rel="noreferrer"
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              {link.label}
              <ArrowUpRight className="size-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
