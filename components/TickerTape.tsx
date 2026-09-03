import { EVENTS } from "@/lib/events";

function formatEntry(e: (typeof EVENTS)[number]) {
  const sign = e.movePercent > 0 ? "+" : "";
  const move = e.type === "turn" ? "—" : `${sign}${e.movePercent.toFixed(1)}%`;
  return `${e.index} ${move}  ${e.headline}  ${e.date.replace("-", "/")}/${e.year}`;
}

export default function TickerTape() {
  const entries = EVENTS.map(formatEntry);
  const line = entries.join("     ///     ") + "     ///     ";

  return (
    <div className="w-full overflow-hidden border-y border-terminal-line bg-terminal-panel py-3.5">
      <div className="ticker-track flex w-max whitespace-nowrap font-mono text-sm tracking-wide text-amber/80 sm:text-base">
        <span className="pr-0">{line}</span>
        <span aria-hidden="true">{line}</span>
      </div>
    </div>
  );
}
