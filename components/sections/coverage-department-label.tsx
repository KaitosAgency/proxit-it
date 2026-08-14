"use client";

import { useEffect, useState } from "react";
import { interventionZones } from "@/lib/site";
import { cn } from "@/lib/utils";

const INITIAL_DELAY_MS = 3200;
const HOLD_MS = 2600;
const FADE_MS = 320;

type CoverageDepartmentLabelProps = {
  className?: string;
  variant?: "title" | "inline";
};

export function CoverageDepartmentLabel({
  className,
  variant = "inline",
}: CoverageDepartmentLabelProps) {
  const labels = interventionZones.coveredDepartments;
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionEnabled(!media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    if (!motionEnabled || labels.length <= 1) {
      return;
    }

    let fadeTimeout: ReturnType<typeof setTimeout> | undefined;
    let holdTimeout: ReturnType<typeof setTimeout> | undefined;

    const cycle = () => {
      setVisible(false);
      fadeTimeout = setTimeout(() => {
        setIndex((current) => (current + 1) % labels.length);
        setVisible(true);
        holdTimeout = setTimeout(cycle, HOLD_MS);
      }, FADE_MS);
    };

    const startTimeout = setTimeout(cycle, INITIAL_DELAY_MS);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(holdTimeout);
    };
  }, [labels.length, motionEnabled]);

  const Tag = variant === "title" ? "span" : "p";

  return (
    <Tag
      className={cn(
        variant === "title"
          ? "inline-block min-w-[12.5rem] text-brand-teal transition-opacity duration-300 sm:min-w-[13.5rem]"
          : "min-h-5 text-sm font-bold text-brand-navy transition-opacity duration-300",
        visible ? "opacity-100" : "opacity-0",
        className,
      )}
      aria-live="polite"
    >
      {labels[index]}
    </Tag>
  );
}
