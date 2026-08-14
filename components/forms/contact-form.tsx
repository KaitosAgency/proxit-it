"use client";

import { useState } from "react";
import { trackContactFormSubmit } from "@/lib/analytics-events";
import { attributionOptions, contactTopicOptions, getContactTopicLabel } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [topic, setTopic] = useState("");
  const [attribution, setAttribution] = useState("");

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

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      trackContactFormSubmit(topicLabel);
      setState("success");
      event.currentTarget.reset();
      setTopic("");
      setAttribution("");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (state === "success") {
    return (
      <Card variant="outline" className="rounded-2xl">
        <CardHeader variant="section">
          <CardTitle variant="success">Message envoyé</CardTitle>
          <CardDescription>Nous revenons vers vous sous 24h ouvrées.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="brandOutline" onClick={() => setState("idle")}>
            Envoyer un autre message
          </Button>
        </CardContent>
      </Card>
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
