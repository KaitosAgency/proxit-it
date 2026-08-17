"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Phone } from "lucide-react";
import { trackContactFormSubmit } from "@/lib/analytics-events";
import { attributionOptions, contactTopicOptions, getContactTopicLabel, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LinkButton } from "@/components/ui/link-button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type FormState = "idle" | "loading" | "success" | "error";

type SubmittedSummary = {
  name: string;
  topic: string;
};

function ContactFormSuccess({
  summary,
  onReset,
}: {
  summary: SubmittedSummary;
  onReset: () => void;
}) {
  const firstName = summary.name.trim().split(/\s+/)[0] || summary.name;

  return (
    <Card variant="outline" className="rounded-2xl">
      <CardContent className="flex flex-col items-center px-6 py-10 text-center md:px-10 md:py-12">
        <div
          className="flex size-16 items-center justify-center rounded-full bg-brand-teal/10"
          aria-hidden
        >
          <CheckCircle2 className="size-8 text-brand-teal" strokeWidth={2} />
        </div>

        <div className="mt-5 max-w-md space-y-2">
          <h2 className="text-xl font-bold text-brand-teal md:text-2xl">Message envoyé</h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Merci {firstName}, votre demande concernant{" "}
            <span className="font-medium text-brand-navy">{summary.topic}</span> a bien été
            transmise à l&apos;équipe Proxi IT.
          </p>
        </div>

        <div className="mt-8 w-full max-w-md rounded-xl border border-slate-200/80 bg-slate-50/80 p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
            Prochaines étapes
          </p>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li className="flex flex-col items-center gap-2">
              <Clock className="size-4 text-brand-teal" aria-hidden />
              <span>
                Un conseiller vous recontacte sous <strong className="text-brand-navy">24 h ouvrées</strong>{" "}
                (souvent bien plus vite).
              </span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Phone className="size-4 text-brand-teal" aria-hidden />
              <span>
                Besoin urgent ? Appelez-nous au{" "}
                <a href={site.phoneHref} className="font-medium text-brand-navy hover:text-brand-teal">
                  {site.phone}
                </a>
                .
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button variant="brandOutline" onClick={onReset}>
            Envoyer un autre message
          </Button>
          <LinkButton href="/" variant="brand" size="default">
            Retour à l&apos;accueil
          </LinkButton>
        </div>
      </CardContent>
    </Card>
  );
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [attribution, setAttribution] = useState("");
  const [submittedSummary, setSubmittedSummary] = useState<SubmittedSummary | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError(null);

    if (!topic) {
      setState("error");
      setError("Merci de choisir un sujet.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const topicLabel = getContactTopicLabel(topic);
    payload.topic = topicLabel;
    payload.attribution = attribution;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { ok?: boolean; via?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      if (process.env.NODE_ENV === "development") {
        console.info("[contact-form] Envoi réussi", data);
      }

      trackContactFormSubmit(topicLabel);
      setSubmittedSummary({
        name: String(payload.name),
        topic: topicLabel,
      });
      setTopic("");
      setAttribution("");
      setState("success");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (state === "success" && submittedSummary) {
    return (
      <ContactFormSuccess
        summary={submittedSummary}
        onReset={() => {
          setSubmittedSummary(null);
          setState("idle");
        }}
      />
    );
  }

  return (
    <Card variant="outline" className="rounded-2xl">
      <CardHeader variant="section">
        <CardTitle variant="section">Écrivez-nous</CardTitle>
        <CardDescription>Devis infogérance ou démo Odoo. Réponse sous 24h.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Votre nom *</Label>
              <Input id="name" name="name" required className="bg-white" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" name="phone" type="tel" className="bg-white" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input id="email" name="email" type="email" required className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Société *</Label>
            <Input id="company" name="company" required className="bg-white" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Votre demande concerne *</Label>
            <Select value={topic} onValueChange={(value) => setTopic(value ?? "")}>
              <SelectTrigger id="topic" className="w-full bg-white">
                <SelectValue placeholder="Choisir un sujet">
                  {topic ? getContactTopicLabel(topic) : null}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {contactTopicOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attribution">Comment nous avez-vous connu ?</Label>
            <Select value={attribution} onValueChange={(value) => setAttribution(value ?? "")}>
              <SelectTrigger id="attribution" className="w-full bg-white">
                <SelectValue placeholder="Comment nous avez-vous connu ?" />
              </SelectTrigger>
              <SelectContent>
                {attributionOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Votre message *</Label>
            <Textarea id="message" name="message" rows={5} required className="bg-white" />
          </div>

          {error ? <p className="text-sm text-destructive">{error}</p> : null}

          <Button type="submit" variant="brand" size="cta" disabled={state === "loading"}>
            {state === "loading" ? "Envoi..." : "Envoyer ma demande"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
