import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd, organizationJsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Proxi IT à Bourges pour un devis infogérance ou une démo Odoo. 8 rue Jules Ferry, 18000 Bourges.",
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />

      <section className="section-glow border-b border-slate-200/80 section-padding-sm">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
            Parlons de votre informatique.
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Devis infogérance ou démo Odoo. Réponse sous 24h ouvrées.
          </p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
          <ContactForm />

          <div className="space-y-6">
            <Card className="border-slate-200/80 shadow-sm">
              <CardHeader>
                <CardTitle className="text-brand-navy">{site.legalName}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    {site.address.full}
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    <a href={site.phoneHref} className="hover:text-brand-navy">
                      {site.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    <a href={`mailto:${site.email}`} className="hover:text-brand-navy">
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Star className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                    {site.googleRating.contactDisplay}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-sm scroll-mt-28" id="carte">
              <iframe
                title="Carte Proxi IT Bourges"
                src="https://maps.google.com/maps?q=Proxi+IT+8+rue+Jules+Ferry+Bourges&output=embed"
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
