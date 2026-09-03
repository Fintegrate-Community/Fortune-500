import { ARCANA, type ArcanaId } from "@/lib/arcana";

// Warm gold/cream linework, designed to glow against a dark night backdrop.
const GOLD = "#f3dfae";

function Tower({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M80 18 L64 58 L78 58 L58 96" stroke={glow} strokeWidth={3.2} fill="none" />
      <rect x="46" y="96" width="30" height="34" />
      <rect x="50" y="130" width="34" height="30" transform="rotate(-3 67 145)" />
      <rect x="44" y="160" width="40" height="26" transform="rotate(2 64 173)" />
      <line x1="56" y1="104" x2="56" y2="112" />
      <line x1="66" y1="104" x2="66" y2="112" />
      <line x1="60" y1="138" x2="60" y2="146" />
      <line x1="70" y1="138" x2="70" y2="146" />
      <circle cx="104" cy="120" r="6" fill={glow} fillOpacity={0.5} stroke="none" />
      <circle cx="116" cy="146" r="5" fill={glow} fillOpacity={0.5} stroke="none" />
      <circle cx="98" cy="168" r="4.5" fill={glow} fillOpacity={0.5} stroke="none" />
      <line x1="24" y1="186" x2="112" y2="186" strokeWidth={1.6} strokeOpacity={0.6}
