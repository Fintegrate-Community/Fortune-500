"use client";

import { useState } from "react";
import type { MarketEvent } from "@/lib/events";

const CARD_HEIGHT = "h-[620px] sm:h-[700px]";

const typeAccent: Record<MarketEvent["type"], string> = {
  crash: "bg-crash text-parchment",
  boom: "bg-boom text-parchment",
  quirk: "bg-quirk text-parchment",
  turn: "bg-ink text-parchment",
};

function LedgerEmblem() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 sm:h-28 sm:w-28" role="img" aria-hidden="true">
      <g stroke="#ffb000" strokeWidth={1.6} fill="none">
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="42" strokeOpacity={0.5} />
        <path d="M32 74 L46 58 L58 66 L74 42 L90 50" strokeWidth={2} strokeOpacity={0.9} />
        <rect x="40" y="70" width="7" height="16" strokeOpacity={0.7} />
        <rect x="54" y="60" width="7" height="26" strokeOpacity={0.7} />
        <rect x="68" y="48" width="7" height="38" strokeOpacity={0.7} />
        <rect x="82" y="56" width="7" height="30" strokeOpacity={0.7} />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 60 + Math.cos(angle) * 52;
          const y1 = 60 + Math.sin(angle) * 52;
          const x2 = 60 + Math.cos(angle) * 58;
          const y2 = 60 + Math.sin(angle) * 58;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity={0.6} />;
        })}
      </g>
    </svg>
  );
}

export default function EventCard({
  event,
  exact,
  daysAway,
}: {
  event: MarketEvent;
  exact: boolean;
  daysAway: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const sign = event.movePercent > 0 ? "+" : "";
  const showMove = event.type !== "turn";
  const [mm, dd] = event.date.split("-");

  return (
    <div className="[perspective:1600px]">
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-label={revealed ? `${event.headline}, tap to hide` : "Tap to reveal your fortune"}
        className={`card-print relative w-full ${CARD_HEIGHT} cursor-pointer text-left`}
      >
        <div
          className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
            revealed ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* FRONT — face down */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 rounded-sm border-[3px] border-double border-amber-dim bg-terminal-panel px-8 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] [backface-visibility:hidden]">
            <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-amber-dim" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-amber-dim" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-amber-dim" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-amber-dim" />
            <LedgerEmblem />
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber/60 sm:text-base">
              Financial Event
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl italic text-parchment sm:text-3xl">
              Click to discover your fortune on that day
            </p>
          </div>

          {/* BACK — revealed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-sm border-[3px] border-double border-parchment-edge bg-parchment px-6 py-8 text-center text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_25px_60px_-15px_rgba(0,0,0,0.7)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-10">
            <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-parchment-edge" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-parchment-edge" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-parchment-edge" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-parchment-edge" />

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft sm:text-sm">
              {exact
                ? "An Official Reading, On This Exact Date"
                : `Nearest Reading On Record — ${daysAway} Day${daysAway === 1 ? "" : "s"} From Your Own`}
            </p>

            <span className={`mt-4 inline-block rounded-full px-4 py-1.5 font-mono text-sm tracking-[0.15em] sm:text-base ${typeAccent[event.type]}`}>
              {event.index}
            </span>

            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold italic leading-tight sm:text-3xl">
              {event.headline}
            </h3>

            <p className="mt-2 font-mono text-sm tracking-widest text-ink-soft sm:text-base">
              {mm}/{dd}/{event.year}
            </p>

            {showMove && (
              <p className="mt-4 font-[family-name:var(--font-display)] text-5xl font-black sm:text-6xl">
                {sign}
                {event.movePercent.toFixed(1)}%
              </p>
            )}

            <p className="mx-auto mt-4 max-w-sm font-[family-name:var(--font-body)] text-base leading-relaxed text-ink-soft sm:text-lg">
              {event.blurb}
            </p>

            <div className="mx-auto my-5 h-px w-20 bg-parchment-edge" />

            <p className="mx-auto max-w-sm font-[family-name:var(--font-display)] text-xl italic leading-snug text-ink">
              &ldquo;{event.quip}&rdquo;
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
              — The Oracle, speaking on behalf of Fortune 500
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
