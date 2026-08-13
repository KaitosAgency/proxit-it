import Image from "next/image";
import Link from "next/link";
import { legalLinks, logos, nav, site } from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex">
            <Image
              src={logos.longDark}
              alt={site.name}
              width={148}
              height={33}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">            Infogérance et services managés à Bourges depuis {site.experienceYears} ans.
            Supervision 24/7, maintenance proactive, intégrateur Odoo certifié.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-teal">
            Services IT
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-navy">
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
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{site.address.full}</li>
            <li>
              <a href={site.phoneHref} className="hover:text-brand-navy">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand-navy">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="bg-slate-200" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-muted-foreground md:flex-row md:px-6">
        <p>
          © {new Date().getFullYear()} {site.legalName}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-navy">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
