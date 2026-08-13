"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, logos, site } from "@/lib/site";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Ouvrir le menu" />
        }
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle className="sr-only">{site.name}</SheetTitle>
          <Link href="/" className="mx-auto inline-flex pt-2">
            <Image
              src={logos.longDark}
              alt={site.name}
              width={140}
              height={31}
              className="h-8 w-auto"
            />
          </Link>
        </SheetHeader>

        <nav className="flex flex-col gap-1 px-4" aria-label="Navigation mobile">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
            Navigation
          </p>
          {nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}

          <p className="mb-2 mt-6 text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
            Services
          </p>
          {nav.services.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-slate-50 hover:text-brand-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 p-4">
          <a
            href={site.phoneHref}
            className="btn-fill inline-flex h-8 items-center justify-center gap-2 rounded-[10px] border border-slate-200/80 bg-white/60 px-3.5 text-[0.8125rem] font-semibold text-brand-navy transition-colors duration-150 hover:bg-white/75"
          >
            <Phone className="h-4 w-4 text-brand-teal" aria-hidden />
            02 18 15 05 30
          </a>
          <LinkButton href="/contact" variant="brand" size="ctaSm" className="w-full">
            Demander un devis
          </LinkButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
