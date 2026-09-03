import type { MarketEvent } from "@/lib/events";
import ArcanaCard from "@/components/ArcanaCard";
import EventCard from "@/components/EventCard";

export default function FortuneCard({
  event,
  exact,
  daysAway,
}: {
  event: MarketEvent;
  exact: boolean;
  daysAway: number;
}) {
  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
      <ArcanaCard arcanaId={event.arcana} />
      <EventCard event={event} exact={exact} daysAway={daysAway} />
    </div>
  );
}
