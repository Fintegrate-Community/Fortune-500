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
    <div className="card-print relative mx-auto w-full max-w-2xl">
      <div className="relative rounded-sm border-[3px] border-double border-parchment-edge bg-parchment px-6 pb-10 pt-6 text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:px-12 sm:pb-14 sm:pt-10">
        {/* corner flourishes */}
        <span className="absolute left-2 top-2 h-5 w-5 border-l-2 border-t-2 border-parchment-edge sm:left-4 sm:top-4" />
        <span className="absolute right-2 top-2 h-5 w-5 border-r-2 border-t-2 border-parchment-edge sm:right-4 sm:top-4" />
        <span className="absolute bottom-2 left-2 h-5 w-5 border-b-2 border-l-2 border-parchment-edge sm:bottom-4 sm:left-4" />
        <span className="absolute bottom-2 right-2 h-5 w-5 border-b-2 border-r-2 border-parchment-edge sm:bottom-4 sm:right-4" />

        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-ink-soft sm:text-base">
            {exact
              ? "An Official Reading, On This Exact Date"
              : `Nearest Reading On Record — ${daysAway} Day${daysAway === 1 ? "" : "s"} From Your Own`}
          </p>

          {/* Card banner: numeral + arcana name, like a tarot card caption */}
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px flex-1 bg-parchment-edge" />
            <span className="font-mono text-base tracking-[0.2em] text-ink-soft sm:text-lg">{arcana.numeral}</span>
            <span className="h-px flex-1 bg-parchment-edge" />
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
            {arcana.name}
          </h2>

          {/* Illustration panel */}
          <div className="mx-auto mt-6 aspect-[4/5] w-full max-w-xs rounded-sm border-2 border-parchment-edge bg-[#ece0c2] p-4 sm:max-w-sm">
            <ArcanaIllustration id={event.arcana} />
          </div>

          <p className="mx-auto mt-4 max-w-sm font-[family-name:var(--font-display)] text-xl italic leading-snug text-ink-soft">
            {arcana.tagline}
          </p>

          <div className="mx-auto my-7 h-px w-28 bg-parchment-edge" />

          {/* The historical event, presented as the card's real-world meaning */}
          <span className={`inline-block rounded-full px-4 py-1.5 font-mono text-sm tracking-[0.15em] sm:text-base ${typeAccent[event.type]}`}>
            {event.index}
          </span>

          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold italic leading-tight sm:text-4xl">
            {event.headline}
          </h3>

          <p className="mt-2 font-mono text-base tracking-widest text-ink-soft">
            {mm}/{dd}/{event.year}
          </p>

          {showMove && (
            <p className="mt-5 font-[family-name:var(--font-display)] text-6xl font-black sm:text-7xl">
              {sign}
              {event.movePercent.toFixed(1)}%
            </p>
          )}

          <p className="mx-auto mt-6 max-w-lg font-[family-name:var(--font-body)] text-lg leading-relaxed text-ink-soft sm:text-xl">
            {event.blurb}
          </p>

          <div className="mx-auto my-7 h-px w-28 bg-parchment-edge" />

          <p className="mx-auto max-w-lg font-[family-name:var(--font-display)] text-2xl italic leading-snug text-ink">
            &ldquo;{event.quip}&rdquo;
          </p>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-ink-soft">
            — The Oracle, speaking on behalf of Fortune 500
          </p>
        </div>
      </div>
    </div>
  );
}
