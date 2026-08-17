"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { hiddenTabTitle } from "@/lib/site";

/**
 * Anime document.title uniquement quand l'onglet est en arrière-plan.
 * Le <title> SSR (metadata Next.js) reste la source de vérité pour le SEO.
 */
export function AnimatedTabTitle() {
  const pathname = usePathname();
  const seoTitleRef = useRef("");
  const messageIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function clearRotation() {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    function restoreSeoTitle() {
      if (seoTitleRef.current) {
        document.title = seoTitleRef.current;
      }
    }

    function syncSeoTitleFromDom() {
      seoTitleRef.current = document.title;
    }

    function startRotation() {
      if (reducedMotionRef.current) {
        return;
      }

      clearRotation();
      messageIndexRef.current = 0;
      document.title = hiddenTabTitle.messages[0];

      intervalRef.current = setInterval(() => {
        messageIndexRef.current =
          (messageIndexRef.current + 1) % hiddenTabTitle.messages.length;
        document.title = hiddenTabTitle.messages[messageIndexRef.current];
      }, hiddenTabTitle.intervalMs);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        startRotation();
        return;
      }

      clearRotation();
      restoreSeoTitle();
    }

    const syncTimeoutId = window.setTimeout(() => {
      syncSeoTitleFromDom();

      if (document.hidden) {
        startRotation();
      }
    }, 0);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearTimeout(syncTimeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearRotation();

      if (!document.hidden) {
        restoreSeoTitle();
      }
    };
  }, [pathname]);

  return null;
}
