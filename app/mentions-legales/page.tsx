import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de Proxi IT, prestataire informatique basé à Bourges : éditeur, hébergement, propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">Mentions légales</h1>

        <div className="prose prose-slate mt-8 max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Éditeur du site</h2>
            <p className="mt-2">
              {site.legalName}
              <br />
              {site.address.full}
              <br />
              Téléphone : {site.phone}
              <br />
              E-mail : {site.email}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Directeur de la publication</h2>
            <p className="mt-2">Le représentant légal de {site.legalName}.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Hébergement</h2>
            <p className="mt-2">
              Ce site preview est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA
              91723, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus de ce site (textes, visuels, structure) est protégé par
              le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
