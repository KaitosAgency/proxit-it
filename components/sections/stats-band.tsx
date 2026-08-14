"use client";

import { useEffect, useState } from "react";
import { BandBottomArc } from "@/components/ui/band-bottom-arc";
import {
  statsBandBadges,
  statsBandMessages,
  type StatsBandMessage,
} from "@/lib/site";

function getStatsBandMessage(): StatsBandMessage {
  // Europe/Paris timezone
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    hour: "numeric",
    weekday: "short",
  });
  const parts = formatter.formatToParts(now);
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "12", 10);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";

  const isWeekend = ["sam.", "dim."].includes(weekday.toLowerCase());
  const isMonday = weekday.toLowerCase() === "lun.";

  if (isWeekend) {
    return statsBandMessages.weekend;
  }
  if (isMonday && hour < 12) {
    return statsBandMessages.mondayMorning;
  }
  if (hour < 12) {
    return statsBandMessages.morningWeekday;
  }
  // Pause déjeuner : 12h-14h
  if (hour < 14) {
    return statsBandMessages.lunchWeekday;
  }
  if (hour < 18) {
    return statsBandMessages.afternoonWeekday;
  }
  return statsBandMessages.eveningWeekday;
}

export function StatsBand() {
  // Default message for SSR (morning weekday)
  const [message, setMessage] = useState<StatsBandMessage>(
    statsBandMessages.morningWeekday
  );

  useEffect(() => {
    setMessage(getStatsBandMessage());
  }, []);

  return (
    <section className="relative z-10 bg-brand-navy pb-5 md:pb-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-7 md:flex-row md:items-center md:justify-between md:px-6">
        {/* Centré verticalement avec items-center */}
        <div className="flex items-center gap-4">
          {/* Figure plus imposante, sans-serif, stylisée */}
          <span className="text-5xl font-extrabold leading-none tracking-tight text-brand-teal md:text-6xl">
            {message.figure}
          </span>
          <p className="max-w-xs text-sm leading-snug text-slate-300 md:max-w-sm">
            {message.headline}{" "}
            <span className="block text-slate-500">{message.aside}</span>
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          {statsBandBadges.map((badge) => (
            <li
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-brand-teal/15 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-slate-400"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal/70"
                aria-hidden
              />
              {badge.label}
            </li>
          ))}
        </ul>
      </div>

      <BandBottomArc />
    </section>
  );
}
