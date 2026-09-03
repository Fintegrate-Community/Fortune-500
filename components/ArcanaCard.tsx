"use client";

import { useState } from "react";
import { ARCANA, type ArcanaId } from "@/lib/arcana";
import ArcanaIllustration from "@/components/arcana/ArcanaIllustration";

const CARD_HEIGHT = "h-[620px] sm:h-[700px]";

function TarotEmblem() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 sm:h-28 sm:w-28" role="img" aria-hidden="true">
      <g stroke="#ffb000" strokeWidth={1.6} fill="none">
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="42" strokeOpacity={0.5} />
        <path
          d="M60 20 L69 48 L98 48 L74 65 L83 93 L60 76 L37 93 L46 65 L22 48 L51 48 Z"
          strokeOpacity={0.9}
        />
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

export default function ArcanaCard({ arcanaId }: { arcanaId: ArcanaId }) {
  const [revealed, setRevealed] = useState(false);
  const arcana = ARCANA[arcanaId];

  return (
    <div className="[perspective:1600px]">
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-label={revealed ? `${arcana.name}, tap to hide` : "Tap to reveal your Tarot card"}
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
            <TarotEmblem />
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-amber/60 sm:text-base">
              Tarot Card
            </p>
            <p className="font-[family-name:var(--font-display)] text-2xl italic text-parchment sm:text-3xl">
              Click to discover your Tarot Card
            </p>
          </div>

          {/* BACK — revealed */}
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto rounded-sm border-[3px] border-double border-parchment-edge bg-parchment px-6 py-8 text-center text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_25px_60px_-15px_rgba(0,0,0,0.7)] [backface-visibility:hidden] [transform:rotateY(180deg)] sm:px-10">
            <span className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-parchment-edge" />
            <span className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-parchment-edge" />
            <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-parchment-edge" />
            <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-parchment-edge" />

            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-parchment-edge" />
              <span className="font-mono text-base tracking-[0.2em] text-ink-soft sm:text-lg">
                {arcana.numeral}
              </span>
              <span className="h-px w-10 bg-parchment-edge" />
            </div>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              {arcana.name}
            </h2>

            <div className="mx-auto mt-6 aspect-[4/5] w-full max-w-[220px] rounded-sm border-2 border-parchment-edge bg-[#ece0c2] p-4 sm:max-w-[260px]">
              <ArcanaIllustration id={arcanaId} />
            </div>

            <p className="mx-auto mt-6 max-w-sm font-[family-name:var(--font-display)] text-xl italic leading-snug text-ink-soft">
              {arcana.tagline}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}
