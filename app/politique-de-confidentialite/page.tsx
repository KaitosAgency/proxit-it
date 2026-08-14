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
            <p className="mt-2">
              Lors de votre navigation sur le site, des données de mesure d&apos;audience peuvent
              être collectées via Google Analytics 4 (pages consultées, durée de visite, type
              d&apos;appareil, source de trafic). Ces données ne permettent pas de vous identifier
              directement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Finalités</h2>
            <p className="mt-2">
              Répondre à vos demandes de devis ou de démonstration, assurer le suivi commercial et
              améliorer nos services. Les données de navigation servent à mesurer l&apos;audience du
              site, comprendre l&apos;usage des pages et améliorer l&apos;expérience proposée.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-brand-navy">Durée de conservation</h2>
            <p className="mt-2">
              Les données du formulaire de contact sont conservées pendant la durée nécessaire au
              traitement de votre demande, puis archivées conformément aux obligations légales
              applicables.
            </p>
            <p className="mt-2">
              Les données de mesure d&apos;audience Google Analytics sont conservées selon la
              durée configurée dans notre compte GA4 (14 mois maximum recommandé).
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
            <h2 className="text-lg font-semibold text-brand-navy">Cookies et mesure d&apos;audience</h2>
            <p className="mt-2">
              Ce site utilise Google Analytics 4, un service de mesure d&apos;audience fourni par
              Google Ireland Limited. Google Analytics dépose des cookies ou technologies similaires
              pour analyser la fréquentation du site et produire des statistiques anonymisées.
            </p>
            <p className="mt-2">
              Les données collectées sont transmises à Google et peuvent être hébergées en dehors
              de l&apos;Union européenne. Google peut les utiliser conformément à sa{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-brand-navy hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité
              </a>
              . Pour en savoir plus sur le fonctionnement de Google Analytics :{" "}
              <a
                href="https://support.google.com/analytics/answer/6004245"
                className="text-brand-navy hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                documentation Google
              </a>
              .
            </p>
            <p className="mt-2">
              Vous pouvez refuser le dépôt de cookies analytics en configurant votre navigateur,
              en installant un module de désactivation (
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                className="text-brand-navy hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                complément Google Analytics Opt-out
              </a>
              ) ou en activant le signal « Do Not Track » de votre navigateur.
            </p>
            <p className="mt-2">
              Des cookies strictement techniques peuvent également être utilisés par
              l&apos;hébergeur pour assurer le bon fonctionnement et la sécurité du site.
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
