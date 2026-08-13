"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { proofStats, site } from "@/lib/site";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function TypingText({
  text,
  delayMs = 0,
  charDelayMs = 45,
  className,
  onComplete,
}: {
  text: string;
  delayMs?: number;
  charDelayMs?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const onCompleteRef = useRef(onComplete);
  const hasFinishedRef = useRef(false);
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (hasFinishedRef.current) {
      setDisplayed(text);
      setShowCursor(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      hasFinishedRef.current = true;
      setDisplayed(text);
      setShowCursor(false);
      onCompleteRef.current?.();
      return;
    }

    let charIndex = 0;
    let timeout: number;
    let cancelled = false;

    const finish = () => {
      if (cancelled || hasFinishedRef.current) return;
      hasFinishedRef.current = true;
      setDisplayed(text);
      setShowCursor(false);
      onCompleteRef.current?.();
    };

    const startTyping = () => {
      timeout = window.setTimeout(function type() {
        if (cancelled || hasFinishedRef.current) return;

        if (charIndex < text.length) {
          charIndex++;
          setDisplayed(text.slice(0, charIndex));
          timeout = window.setTimeout(type, charDelayMs + Math.random() * 20);
          return;
        }

        finish();
      }, charDelayMs);
    };

    timeout = window.setTimeout(startTyping, delayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timeout);
    };
  }, [text, delayMs, charDelayMs]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && <span className="animate-terminal-cursor">▋</span>}
    </span>
  );
}

function StatusDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
    </div>
  );
}

export function ConsolePanel() {
  const [commandDone, setCommandDone] = useState(false);
  const [typingStatIndex, setTypingStatIndex] = useState<number | null>(null);

  return (
    <Card className="gap-0 border-brand-teal/25 bg-brand-navy/90 py-0 text-white shadow-2xl shadow-black/30 backdrop-blur">
      <CardHeader className="border-b border-brand-teal/15 px-6 pb-4 pt-6">
        <div className="flex items-center justify-between">
          <StatusDots />
          <span className="font-mono text-xs text-slate-500">proxi-it · console</span>
        </div>
        <div className="mt-3 font-mono text-xs text-slate-400">
          <span className="text-brand-teal">$</span>{" "}
          <TypingText
            text="proxi-it --status"
            delayMs={600}
            charDelayMs={55}
            onComplete={() => setCommandDone(true)}
          />
        </div>
        <div className="mt-1 min-h-4 font-mono text-xs text-green-400/90">
          {commandDone ? (
            <TypingText
              text="✓ prêt à intervenir à Bourges et dans les environs"
              delayMs={200}
              charDelayMs={42}
              onComplete={() => setTypingStatIndex(0)}
            />
          ) : (
            <span className="invisible" aria-hidden>
              ✓ prêt à intervenir à Bourges et dans les environs
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 px-6 py-5 sm:grid-cols-2">
        {proofStats.map((stat, index) => (
          <div
            key={stat.label}
            className="rounded-lg border border-brand-teal/10 bg-black/25 p-3 transition-colors duration-300 hover:border-brand-teal/25 hover:bg-black/35"
          >
            <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
              {stat.label}
            </p>
            <p className="mt-1 min-h-8 font-mono text-2xl font-semibold text-brand-teal">
              {typingStatIndex !== null && index < typingStatIndex ? (
                stat.value
              ) : typingStatIndex === index ? (
                <TypingText
                  text={stat.value}
                  delayMs={100}
                  charDelayMs={48}
                  onComplete={() => setTypingStatIndex(index + 1)}
                />
              ) : (
                <span className="invisible" aria-hidden>
                  {stat.value}
                </span>
              )}
            </p>
          </div>
        ))}
      </CardContent>
      <div className="border-t border-brand-teal/15 px-6 py-5">
        <p className="font-mono text-xs text-brand-teal/80">
          support humain · tarif au poste · sans surprise
        </p>
        <a
          href={site.googleRating.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 inline-flex items-center gap-2 rounded-md transition-colors hover:text-brand-teal"
          aria-label={`Voir les avis Google de ${site.name} (${site.googleRating.score}/5)`}
        >
          <span className="flex text-amber-400" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-3.5 w-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </span>
          <span className="font-mono text-[11px] text-slate-400 group-hover:text-brand-teal/90">
            {site.googleRating.score}/5 sur Google
          </span>
          <ExternalLink
            className="h-3.5 w-3.5 text-slate-500 transition-colors group-hover:text-brand-teal"
            aria-hidden
          />
        </a>
      </div>
    </Card>
  );
}
