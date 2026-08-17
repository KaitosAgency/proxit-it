"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { heroCodeBackdrop } from "@/lib/site";
import { cn } from "@/lib/utils";

function subscribeReducedMotion(onStoreChange: () => void): () => void {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot(): boolean {
  return false;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

type TypingColumnProps = {
  lines: readonly string[];
  className?: string;
  boundsClass?: string;
  maskClass?: string;
  textAlign?: "left" | "right";
  opacityClass?: string;
  contentClassName?: string;
  maxVisibleLines?: number;
  startDelayMs?: number;
  headStartLines?: number;
  charDelayMs?: number;
  linePauseMs?: number;
};

function StaticColumn({
  lines,
  className,
  boundsClass = "top-0 bottom-[28%]",
  maskClass = "[mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)]",
  textAlign = "left",
  opacityClass = "opacity-[0.14]",
  contentClassName,
  maxVisibleLines = 14,
}: TypingColumnProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none overflow-hidden",
        boundsClass,
        opacityClass,
        className,
      )}
    >
      <div className={cn("flex h-full flex-col justify-start px-3 pt-0", maskClass, contentClassName)}>
        <pre
          className={cn(
            "m-0 font-mono text-[11px] leading-[1.85] tracking-wide text-brand-teal lg:text-xs xl:text-[13px]",
            textAlign === "right" && "text-right",
          )}
        >
          {lines.slice(0, maxVisibleLines).map((line, index) => (
            <span key={`${line}-${index}`} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}

function TypingColumn({
  lines,
  className,
  boundsClass = "top-0 bottom-[28%]",
  maskClass = "[mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)]",
  textAlign = "left",
  opacityClass = "opacity-[0.14]",
  contentClassName,
  maxVisibleLines = 14,
  startDelayMs = 0,
  headStartLines = 0,
  charDelayMs = 32,
  linePauseMs = 520,
}: TypingColumnProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const safeHeadStart = Math.min(headStartLines, lines.length);

  if (prefersReducedMotion) {
    return (
      <StaticColumn
        lines={lines}
        className={className}
        boundsClass={boundsClass}
        maskClass={maskClass}
        textAlign={textAlign}
        opacityClass={opacityClass}
        contentClassName={contentClassName}
        maxVisibleLines={maxVisibleLines}
      />
    );
  }

  return (
    <AnimatedTypingColumn
      key={`${safeHeadStart}-${lines.length}-${lines[0] ?? ""}`}
      lines={lines}
      className={className}
      boundsClass={boundsClass}
      maskClass={maskClass}
      textAlign={textAlign}
      opacityClass={opacityClass}
      contentClassName={contentClassName}
      maxVisibleLines={maxVisibleLines}
      startDelayMs={startDelayMs}
      headStartLines={headStartLines}
      charDelayMs={charDelayMs}
      linePauseMs={linePauseMs}
    />
  );
}

function AnimatedTypingColumn({
  lines,
  className,
  boundsClass = "top-0 bottom-[28%]",
  maskClass = "[mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_88%,transparent_100%)]",
  textAlign = "left",
  opacityClass = "opacity-[0.14]",
  contentClassName,
  maxVisibleLines = 14,
  startDelayMs = 0,
  headStartLines = 0,
  charDelayMs = 32,
  linePauseMs = 520,
}: TypingColumnProps) {
  const safeHeadStart = Math.min(headStartLines, lines.length);
  const [completedLines, setCompletedLines] = useState<string[]>(() =>
    lines.slice(0, safeHeadStart),
  );
  const [currentLine, setCurrentLine] = useState("");
  const lineIndexRef = useRef(safeHeadStart % lines.length);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    lineIndexRef.current = safeHeadStart % lines.length;
    charIndexRef.current = 0;

    const clearTimer = () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    const schedule = (delay: number, fn: () => void) => {
      clearTimer();
      timeoutRef.current = window.setTimeout(fn, delay);
    };

    const typeNextCharacter = () => {
      const line = lines[lineIndexRef.current];
      if (!line) return;

      if (charIndexRef.current < line.length) {
        charIndexRef.current += 1;
        setCurrentLine(line.slice(0, charIndexRef.current));
        schedule(charDelayMs + Math.random() * 22, typeNextCharacter);
        return;
      }

      setCompletedLines((prev) => [...prev, line].slice(-maxVisibleLines));
      setCurrentLine("");
      charIndexRef.current = 0;
      lineIndexRef.current = (lineIndexRef.current + 1) % lines.length;

      schedule(linePauseMs + Math.random() * 220, typeNextCharacter);
    };

    schedule(startDelayMs, typeNextCharacter);

    return clearTimer;
  }, [lines, safeHeadStart, startDelayMs, charDelayMs, linePauseMs, maxVisibleLines]);

  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none overflow-hidden",
        boundsClass,
        opacityClass,
        className,
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col justify-start px-3 pt-0",
          maskClass,
          contentClassName,
        )}
      >
        <pre
          className={cn(
            "m-0 font-mono text-[11px] leading-[1.85] tracking-wide text-brand-teal lg:text-xs xl:text-[13px]",
            textAlign === "right" && "text-right",
          )}
        >
          {completedLines.map((line, index) => (
            <span key={`${line}-${index}`} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
          {currentLine ? (
            <span className="block whitespace-nowrap">
              {currentLine}
              <span className="animate-terminal-cursor text-brand-teal/70">▋</span>
            </span>
          ) : null}
        </pre>
      </div>
    </div>
  );
}

const columns: TypingColumnProps[] = [
  {
    lines: heroCodeBackdrop.left,
    className: "left-0 w-auto min-w-[9rem] max-w-[11rem] xl:max-w-[12rem]",
    boundsClass: "top-0 bottom-[22%]",
    maxVisibleLines: 16,
    maskClass:
      "[mask-image:linear-gradient(to_bottom,black_0%,black_4%,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_4%,black_82%,transparent_100%)]",
    textAlign: "left",
    opacityClass: "opacity-[0.15]",
    startDelayMs: 1600,
    headStartLines: 0,
    charDelayMs: 38,
    linePauseMs: 580,
  },
  {
    lines: heroCodeBackdrop.midLeft,
    className: "left-[11%] w-auto min-w-[8rem] max-w-[10rem] xl:left-[13%] xl:max-w-[11rem]",
    boundsClass: "top-0 bottom-[2%]",
    maxVisibleLines: 22,
    maskClass:
      "[mask-image:linear-gradient(to_bottom,black_0%,black_3%,black_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_3%,black_94%,transparent_100%)]",
    textAlign: "left",
    opacityClass: "opacity-[0.06]",
    startDelayMs: 700,
    headStartLines: 2,
    charDelayMs: 44,
    linePauseMs: 680,
  },
  {
    lines: heroCodeBackdrop.center,
    className: "left-[31%] w-auto min-w-[7rem] max-w-[9rem] xl:left-[34%] xl:max-w-[10rem]",
    boundsClass: "top-0 bottom-[38%]",
    maxVisibleLines: 12,
    maskClass:
      "[mask-image:linear-gradient(to_bottom,black_0%,black_5%,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_5%,black_70%,transparent_100%)]",
    textAlign: "left",
    opacityClass: "opacity-[0.07]",
    startDelayMs: 2400,
    headStartLines: 1,
    charDelayMs: 31,
    linePauseMs: 490,
  },
  {
    lines: heroCodeBackdrop.midRight,
    className: "left-[54%] w-auto min-w-[8rem] max-w-[10rem] xl:left-[57%] xl:max-w-[11rem]",
    boundsClass: "top-0 bottom-[16%]",
    maxVisibleLines: 18,
    maskClass:
      "[mask-image:linear-gradient(to_bottom,black_0%,black_4%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_4%,black_90%,transparent_100%)]",
    textAlign: "right",
    opacityClass: "opacity-[0.07]",
    contentClassName: "pr-1",
    startDelayMs: 450,
    headStartLines: 4,
    charDelayMs: 26,
    linePauseMs: 380,
  },
  {
    lines: heroCodeBackdrop.right,
    className: "right-0 w-auto min-w-[9rem] max-w-[11rem] xl:max-w-[12rem]",
    boundsClass: "top-0 bottom-0",
    maxVisibleLines: 24,
    maskClass:
      "[mask-image:linear-gradient(to_bottom,black_0%,black_3%,black_96%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_3%,black_96%,transparent_100%)]",
    textAlign: "right",
    opacityClass: "opacity-[0.14]",
    contentClassName: "pr-2",
    startDelayMs: 150,
    headStartLines: 5,
    charDelayMs: 27,
    linePauseMs: 410,
  },
];

export function HeroCodeBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block" aria-hidden>
      {columns.map((column, index) => (
        <TypingColumn key={index} {...column} />
      ))}
    </div>
  );
}
