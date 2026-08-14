import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { legalLinks, logos, nav, site } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex">
            <Image
              src={logos.longLight}
              alt={site.name}
              width={148}
              height={33}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Infogérance et services managés à Bourges depuis {site.experienceYears} ans.
            Supervision 24/7, maintenance proactive, intégrateur Odoo certifié.
          </p>
          <Link
            href="/integrateur-odoo-bourges"
            className="mt-6 inline-block transition-opacity hover:opacity-90"
            aria-label="Proxi IT, partenaire Odoo Learning Partner à Bourges"
          >
            <Image
              src={logos.odooLearningPartner}
              alt="Odoo Learning Partner"
              width={200}
              height={72}
              className="h-11 w-auto"
            />
          </Link>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
            Services IT
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            {nav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>{site.address.full}</li>
            <li>
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-white/10" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 bg-brand-navy-ink py-3 text-center text-xs text-slate-600">
        Fait avec <span aria-hidden="true">♥</span> par{" "}
        <a
          href="https://kaitos.agency"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 transition-colors hover:text-white"
        >
          Agence Kaitos
        </a>
      </div>
    </footer>
  );
}
