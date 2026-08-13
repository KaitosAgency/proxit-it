import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/cta-band";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Intégrateur Odoo à Bourges",
  description:
    "Proxi IT, partenaire Odoo Learning Partner à Bourges. ERP, CRM, facturation électronique pour TPE/PME du Cher.",
};

export default function OdooPage() {
  return (
    <>
      <section className="section-glow border-b border-slate-200/80 section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-teal">Odoo · Bourges</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-brand-navy md:text-5xl">
            Intégrateur Odoo certifié à Bourges
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Seul partenaire Odoo Learning Partner basé à Bourges. ERP, CRM, facturation
            électronique : un interlocuteur unique pour votre IT et vos outils métier.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" variant="brand" size="cta">
              Demander une démo Odoo
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Audit & cadrage",
                text: "Analyse de vos processus et définition du périmètre Odoo adapté à votre activité.",
              },
              {
                step: "02",
                title: "Déploiement",
                text: "Configuration, migration des données et formation de vos équipes.",
              },
              {
                step: "03",
                title: "Accompagnement",
                text: "Support, évolutions et préparation à la facturation électronique 2026-2027.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-slate-200/80 shadow-sm">
                <CardHeader>
                  <p className="text-sm font-bold text-brand-teal">{item.step}</p>
                  <CardTitle className="text-brand-navy">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
