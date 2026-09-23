import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteNav } from "@/components/site-nav";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/70 bg-muted/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Mzansi Travel AI — your AI travel companion for South Africa.</p>
          <p className="flex gap-4">
            <Link to="/faq" className="hover:text-foreground">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      )}
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</h1>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
