"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone } from "lucide-react";
import { MobileNav } from "@/components/layout/mobile-nav";
import { LinkButton } from "@/components/ui/link-button";
import { nav, logos, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type HeaderBarProps = {
  floating?: boolean;
  isScrolled?: boolean;
};

function ServicesMenu({ onDarkHero }: { onDarkHero: boolean }) {
  return (
    <div className="group relative">
      <Link
        href="/infogerance-informatique-bourges"
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium transition-colors duration-300",
          onDarkHero
            ? "text-white/85 hover:text-white"
            : "text-muted-foreground hover:text-brand-navy",
        )}
        aria-haspopup="menu"
      >
        <span className="nav-link-baseline">Services IT</span>
        <ChevronDown
          className="h-4 w-4 opacity-70 transition-transform duration-200 group-hover:rotate-180"
          aria-hidden
        />
      </Link>

      <div className="invisible absolute left-0 top-full z-50 min-w-[14rem] pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul
          role="menu"
          className={cn(
            "overflow-hidden rounded-[10px] border py-1.5 shadow-lg",
            onDarkHero
              ? "border-white/10 bg-brand-navy text-white shadow-black/25"
              : "border-slate-200 bg-white text-brand-navy shadow-black/10",
          )}
        >
          {nav.services.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className={cn(
                  "block px-4 py-2.5 text-sm transition-colors",
                  onDarkHero
                    ? "text-white/90 hover:bg-white/10 hover:text-white"
                    : "text-muted-foreground hover:bg-slate-50 hover:text-brand-navy",
                )}
              >
                <span className="nav-link-baseline">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HeaderBar({ floating = false, isScrolled = false }: HeaderBarProps) {
  const onDarkHero = floating && !isScrolled;
  const logoSrc = onDarkHero ? logos.longLight : logos.longDark;

  const navLinkClass = cn(
    "nav-link-baseline text-sm font-medium transition-colors duration-300",
    onDarkHero
      ? "text-white/85 hover:text-white"
      : "text-muted-foreground hover:text-brand-navy",
  );

  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-8 md:gap-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logoSrc}
            alt={site.name}
            width={158}
            height={35}
            className="h-8 w-auto transition-opacity duration-300 md:h-9"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex lg:gap-9"
          aria-label="Navigation principale"
        >
          <ServicesMenu onDarkHero={onDarkHero} />
          {nav.main
            .filter((item) => item.label !== "Services IT")
            .map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            ))}
        </nav>
      </div>

      <div className="flex shrink-0 items-center gap-4">
        <a
          href={site.phoneHref}
          className={cn(
            "hidden items-center gap-2 text-sm font-medium transition-colors duration-300 lg:inline-flex",
            onDarkHero ? "text-white/90 hover:text-white" : "text-brand-navy",
          )}
        >
          <Phone className="h-4 w-4 text-brand-teal" aria-hidden />
          02 18 15 05 30
        </a>
        <LinkButton href="/contact" variant="brand" size="ctaSm" className="hidden sm:inline-flex">
          Devis
        </LinkButton>
        <MobileNav />
      </div>
    </div>
  );
}

function SolidHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <HeaderBar />
    </header>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (!isHome) {
    return <SolidHeader />;
  }

  return (
    <>
      <header className="pointer-events-none fixed left-0 right-0 top-3 z-50 hidden md:block">
        <div
          className={cn(
            "pointer-events-auto mx-4 rounded-2xl border transition-all duration-300 md:mx-6 lg:mx-auto lg:max-w-6xl",
            isScrolled
              ? "border-slate-200 bg-white shadow-lg shadow-black/10"
              : "border-white/10 bg-brand-navy shadow-lg shadow-black/20",
          )}
        >
          <HeaderBar floating isScrolled={isScrolled} />
        </div>
      </header>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white md:hidden">
        <HeaderBar />
      </header>
    </>
  );
}
