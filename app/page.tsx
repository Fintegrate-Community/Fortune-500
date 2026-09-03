"use client";

import { useState, useRef } from "react";
import TickerTape from "@/components/TickerTape";
import FortuneCard from "@/components/FortuneCard";
import { findClosestEvent, getDistribution, type MarketEvent } from "@/lib/events";

type Result = { event: MarketEvent; exact: boolean; daysAway: number };

export default function Home() {
  const [dob, setDob] = useState("");
  const [status, setStatus] = useState<"idle" | "reading" | "done">("idle");
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const dist = getDistribution();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dob) return;
    setStatus("reading");
    setResult(null);

    const [year, month, day] = dob.split("-").map(Number);

    window.setTimeout(() => {
      const r = findClosestEvent(month, day, year);
      setResult(r);
      setStatus("done");
      setTimeout(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 50);
    }, 1400);
  }

  function reset() {
    setStatus("idle");
    setResult(null);
    setCopied(false);
  }

  async function copyFortune() {
    if (!result) return;
    const { event, exact, daysAway } = result;
    const sign = event.movePercent > 0 ? "+" : "";
    const text = exact
      ? `My Fortune 500 reading: "${event.headline}" (${event.index} ${sign}${event.movePercent.toFixed(1)}%, ${event.date}/${event.year}). "${event.quip}" — fortune500`
      : `My Fortune 500 reading (nearest match, ${daysAway}d away): "${event.headline}" (${event.index} ${sign}${event.movePercent.toFixed(1)}%, ${event.date}/${event.year}). "${event.quip}" — fortune500`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable, silently ignore
    }
  }

  return (
    <main className="min-h-screen bg-terminal-black">
      <TickerTape />

      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-16 text-center sm:pt-24">
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-amber-dim sm:text-base">
          Est. never · Trusted by no regulator
        </p>
        <h1 className="crt-flicker mt-5 font-[family-name:var(--font-display)] text-6xl font-black text-amber sm:text-8xl">
          FORTUNE 500
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-body)] text-xl text-parchment/80 sm:text-2xl">
          Your birthday, read like a balance sheet. Enter your date of birth and
          the Oracle will consult the historical record for the day the market
          truly showed its character.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-md flex-col items-center gap-5 rounded-md border border-terminal-line bg-terminal-panel p-8 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]"
        >
          <label htmlFor="dob" className="font-mono text-base uppercase tracking-[0.2em] text-amber/70">
            Enter your date of birth
          </label>
          <input
            id="dob"
            type="date"
            required
            value={dob}
            max={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDob(e.target.value)}
            className="w-full rounded border border-amber-dim bg-terminal-black px-5 py-4 font-mono text-xl text-amber outline-none focus:border-amber focus:ring-1 focus:ring-amber"
          />
          <button
            type="submit"
            disabled={status === "reading"}
            className="mt-1 w-full rounded bg-amber px-5 py-4 font-mono text-lg font-semibold uppercase tracking-[0.15em] text-terminal-black transition hover:bg-amber/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "reading" ? "Consulting the ticker…" : "Read My Fortune"}
          </button>
        </form>

        {status === "reading" && (
          <p className="mt-10 animate-pulse font-mono text-base uppercase tracking-[0.2em] text-amber/60">
            Cross-referencing 90+ years of market history…
          </p>
        )}
      </section>

      {status === "done" && result && (
        <section ref={cardRef} className="mx-auto max-w-5xl px-6 pb-14">
          <FortuneCard event={result.event} exact={result.exact} daysAway={result.daysAway} />

          <div className="mx-auto mt-10 max-w-xl text-center font-mono text-base text-parchment/60">
            <p>
              Across every reading in the archive: {dist.crashPct}% crash,{" "}
              {dist.boomPct}% boom, {dist.quirkPct}% pure anomaly. Your result
              places you in one of these camps, for better or worse.
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={copyFortune}
              className="w-full rounded border border-amber-dim px-6 py-3.5 font-mono text-base uppercase tracking-[0.15em] text-amber transition hover:border-amber sm:w-auto"
            >
              {copied ? "Copied to clipboard" : "Copy My Fortune"}
            </button>
            <button
              onClick={reset}
              className="w-full rounded px-6 py-3.5 font-mono text-base uppercase tracking-[0.15em] text-parchment/60 transition hover:text-parchment sm:w-auto"
            >
              Read Another Date
            </button>
          </div>
        </section>
      )}

      <footer className="border-t border-terminal-line px-6 py-10 text-center font-mono text-sm uppercase tracking-[0.2em] text-parchment/30">
        Historical figures are widely reported approximations, for entertainment purposes. Not financial advice, obviously.
      </footer>
    </main>
  );
}
