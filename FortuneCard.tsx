import type { MarketEvent } from "@/lib/events";
import { ARCANA } from "@/lib/arcana";
import ArcanaIllustration from "@/components/arcana/ArcanaIllustration";

const typeAccent: Record<MarketEvent["type"], string> = {
  crash: "bg-crash text-parchment",
  boom: "bg-boom text-parchment",
  quirk: "bg-quirk text-parchment",
  turn: "bg-ink text-parchment",
};

export default function FortuneCard({
  event,
  exact,
  daysAway,
}: {
  event: MarketEvent;
  exact: boolean;
  daysAway: number;
}) {
  const arcana = ARCANA[event.arcana];
  const sign = event.movePercent > 0 ? "+" : "";
  const showMove = event.type !== "turn";
  const [mm, dd] = event.date.split("-");

  return (
    <div className="card-print relative mx-auto w-full max-w-sm">
      <div className="relative rounded-sm border-[3px] border-double border-parchment-edge bg-parchment px-5 pb-8 pt-5 text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:px-7 sm:pb-10 sm:pt-6">
        {/* corner flourishes */}
        <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-parchment-edge sm:left-3 sm:top-3" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-parchment-edge sm:right-3 sm:top-3" />
        <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-parchment-edge sm:bottom-3 sm:left-3" />
        <span className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-parchment-edge sm:bottom-3 sm:right-3" />

        <div className="text-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-ink-soft">
            {exact
              ? "An Official Reading, On This Exact Date"
              : `Nearest Reading On Record — ${daysAway} Day${daysAway === 1 ? "" : "s"} From Your Own`}
          </p>

          {/* Card banner: numeral + arcana name, like a tarot card caption */}
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px flex-1 bg-parchment-edge" />
            <span className="font-mono text-xs tracking-[0.2em] text-ink-soft">{arcana.numeral}</span>
            <span className="h-px flex-1 bg-parchment-edge" />
          </div>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-[28px]">
            {arcana.name}
          </h2>

          {/* Illustration panel */}
          <div className="mx-auto mt-4 aspect-[4/5] w-full max-w-[220px] rounded-sm border-2 border-parchment-edge bg-[#ece0c2] p-3">
            <ArcanaIllustration id={event.arcana} />
          </div>

          <p className="mx-auto mt-3 max-w-[220px] font-[family-name:var(--font-display)] text-[13px] italic leading-snug text-ink-soft">
            {arcana.tagline}
          </p>

          <div className="mx-auto my-5 h-px w-20 bg-parchment-edge" />

          {/* The historical event, presented as the card's real-world meaning */}
          <span className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] ${typeAccent[event.type]}`}>
            {event.index}
          </span>

          <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold italic leading-tight">
            {event.headline}
          </h3>

          <p className="mt-1 font-mono text-[11px] tracking-widest text-ink-soft">
            {mm}/{dd}/{event.year}
          </p>

          {showMove && (
            <p className="mt-3 font-[family-name:var(--font-display)] text-4xl font-black">
              {sign}
              {event.movePercent.toFixed(1)}%
            </p>
          )}

          <p className="mx-auto mt-4 max-w-xs font-[family-name:var(--font-body)] text-sm leading-relaxed text-ink-soft">
            {event.blurb}
          </p>

          <div className="mx-auto my-5 h-px w-20 bg-parchment-edge" />

          <p className="mx-auto max-w-xs font-[family-name:var(--font-display)] text-base italic leading-snug text-ink">
            &ldquo;{event.quip}&rdquo;
          </p>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-soft">
            — The Oracle, speaking on behalf of Fortune 500
          </p>
        </div>
      </div>
    </div>
  );
}
