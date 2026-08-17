"use client";

import Link from "next/link";
import { LinkButton } from "@/components/ui/link-button";
import { routes } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section-glow flex flex-1 items-center section-padding">
      <div className="mx-auto max-w-xl px-4 text-center md:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">Erreur 404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-muted-foreground">
          Cette adresse n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou contactez
          Proxi IT à Bourges.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <LinkButton href="/" variant="brand" size="cta">
            Retour à l&apos;accueil
          </LinkButton>
          <LinkButton href={routes.contact} variant="brandOutline" size="default">
            Nous contacter
          </LinkButton>
        </div>
        <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
          <li>
            <Link href={routes.infogerance} className="hover:text-brand-navy">
              Infogérance informatique Bourges
            </Link>
          </li>
          <li>
            <Link href={routes.supervision} className="hover:text-brand-navy">
              Supervision informatique 24/7
            </Link>
          </li>
          <li>
            <Link href={routes.odoo} className="hover:text-brand-navy">
              Intégrateur Odoo Bourges
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
