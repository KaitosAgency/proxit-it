import { LinkButton } from "@/components/ui/link-button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { logos, site } from "@/lib/site";
import { ConsolePanel } from "./console-panel";
import { HeroCodeBackdrop } from "./hero-code-backdrop";

export function HeroSection() {
  return (
    <div className="bg-brand-navy-deep text-white">
      <section className="relative overflow-x-clip border-b border-brand-teal/10">
        <div className="absolute inset-0 grid-glow opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(95,194,186,0.14),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(95,194,186,0.06),_transparent_40%)]" />
        <HeroCodeBackdrop />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 pb-20 pt-28 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:px-6 md:pb-32 md:pt-40">
          <div className="relative">
            <div
              className="hero-content-scrim pointer-events-none absolute -inset-x-3 -inset-y-4 rounded-3xl md:-inset-x-5 md:-inset-y-6"
              aria-hidden
            />

            <div className="relative text-center md:text-left">
            <Badge
              variant="outline"
              className="mb-6 inline-flex items-center gap-2 border-brand-teal/30 bg-brand-teal/5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-teal"
            >
              <span
                className="h-2 w-2 shrink-0 animate-blink rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.55)]"
                aria-hidden
              />
              Infogérance · Bourges · Cher
            </Badge>

            <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-white md:mx-0 md:text-6xl">
              Votre informatique,
              <span className="block text-brand-teal">{" on s'en occupe."}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:mx-0">
              Supervision 24/7, maintenance proactive et support humain pour les TPE et PME
              de Bourges. Tarif au poste, sans surprise.
            </p>

            <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:items-stretch md:justify-start">
              <LinkButton href="/contact" variant="brand" size="cta" className="w-full sm:w-auto">
                Demander un devis
              </LinkButton>
              <LinkButton href={site.phoneHref} variant="brandOutlineLight" size="cta" className="w-full sm:w-auto">
                Appeler maintenant
              </LinkButton>
            </div>

            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-xs text-slate-400 md:justify-start">
              <span className="inline-flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-[#714B67] px-1.5 py-0.5 shadow-sm shadow-black/20">
                  <Image
                    src={logos.odoo}
                    alt="Odoo"
                    width={72}
                    height={20}
                    className="h-5 w-auto brightness-0 invert"
                  />
                </span>
                Odoo Learning Partner
              </span>
              <span aria-hidden>·</span>
              <Link
                href={site.contactMapHref}
                className="transition-colors hover:text-brand-teal"
              >
                {site.address.full}
              </Link>
            </p>
            </div>
          </div>

          <ConsolePanel />
        </div>
      </section>
    </div>
  );
}
