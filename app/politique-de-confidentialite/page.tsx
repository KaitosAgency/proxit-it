import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles — Proxi IT.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-white section-padding">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h1 className="text-3xl font-bold text-brand-navy md:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="prose prose-slate mt-8 max-w-none space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Responsable du traitement</h2>
            <p className="mt-2">
              {site.legalName}, {site.address.full}. Contact :{" "}
              <a href={`mailto:${site.email}`} className="text-brand-navy hover:underline">
                {site.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Données collectées</h2>
            <p className="mt-2">
              Via le formulaire de contact : nom, e-mail, société, téléphone (optionnel), sujet de
              la demande, message et source de découverte (optionnel).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Finalités</h2>
            <p className="mt-2">
              Répondre à vos demandes de devis ou de démonstration, assurer le suivi commercial et
              améliorer nos services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Durée de conservation</h2>
            <p className="mt-2">
              Les données sont conservées pendant la durée nécessaire au traitement de votre
              demande, puis archivées conformément aux obligations légales applicables.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement, de limitation et d&apos;opposition. Pour exercer vos droits,
              contactez-nous à {site.email}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Cookies</h2>
            <p className="mt-2">
              Ce site preview n&apos;utilise pas de cookies de tracking. Des cookies techniques
              peuvent être utilisés par l&apos;hébergeur pour le bon fonctionnement du service.
            </p>
          </section>

          <p className="text-xs">
            Voir aussi les{" "}
            <Link href="/mentions-legales" className="text-brand-navy hover:underline">
              mentions légales
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
