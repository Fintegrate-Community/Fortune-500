import type { MarketEvent } from "@/lib/events";

const typeStyles: Record<MarketEvent["type"], { seal: string; label: string; ring: string }> = {
  crash: { seal: "bg-crash text-parchment", label: "CRASH", ring: "ring-crash-soft" },
  boom: { seal: "bg-boom text-parchment", label: "BOOM", ring: "ring-boom-soft" },
  quirk: { seal: "bg-quirk text-parchment", label: "ANOMALY", ring: "ring-quirk-soft" },
  turn: { seal: "bg-ink text-parchment", label: "TURNING POINT", ring: "ring-ink-soft" },
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
  const style = typeStyles[event.type];
  const sign = event.movePercent > 0 ? "+" : "";
  const showMove = event.type !== "turn";
  const [mm, dd] = event.date.split("-");

  return (
    <div className="card-print relative mx-auto w-full max-w-xl">
      <div className="relative rounded-sm border-[3px] border-double border-parchment-edge bg-parchment px-6 py-8 text-ink shadow-[0_0_0_1px_rgba(0,0,0,0.4),0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:px-10 sm:py-10">
        {/* corner flourishes */}
        <span className="absolute left-2 top-2 h-4 w-4 border-l-2 border-t-2 border-parchment-edge sm:left-3 sm:top-3" />
        <span className="absolute right-2 top-2 h-4 w-4 border-r-2 border-t-2 border-parchment-edge sm:right-3 sm:top-3" />
        <span className="absolute bottom-2 left-2 h-4 w-4 border-b-2 border-l-2 border-parchment-edge sm:bottom-3 sm:left-3" />
        <span className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-parchment-edge sm:bottom-3 sm:right-3" />

        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-soft">
            {exact ? "An Official Reading, On This Exact Date" : `The Nearest Reading On Record — ${daysAway} Day${daysAway === 1 ? "" : "s"} From Your Own`}
          </p>
          <div className="mx-auto my-4 h-px w-24 bg-parchment-edge" />

          <span
            className={`inline-block rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.2em] ${style.seal}`}
          >
            {style.label} · {event.index}
          </span>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold italic leading-tight sm:text-4xl">
            {event.headline}
          </h2>

          <p className="mt-2 font-mono text-xs tracking-widest text-ink-soft">
            {mm}/{dd}/{event.year}
          </p>

          {showMove && (
            <p className="mt-5 font-[family-name:var(--font-display)] text-5xl font-black sm:text-6xl">
              {sign}
              {event.movePercent.toFixed(1)}%
            </p>
          )}

          <p className="mx-auto mt-5 max-w-md font-[family-name:var(--font-body)] text-[15px] leading-relaxed text-ink-soft">
            {event.blurb}
          </p>

          <div className="mx-auto my-6 h-px w-24 bg-parchment-edge" />

          <p className="mx-auto max-w-sm font-[family-name:var(--font-display)] text-lg italic leading-snug text-ink">
            &ldquo;{event.quip}&rdquo;
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft">
            — The Oracle, speaking on behalf of Fortune 500
          </p>
        </div>
      </div>
    </div>
  );
}
