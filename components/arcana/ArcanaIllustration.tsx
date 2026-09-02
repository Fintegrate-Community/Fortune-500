import type { ArcanaId } from "@/lib/arcana";

const INK = "#2a2013";

function Tower() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* bolt */}
      <path d="M80 18 L64 58 L78 58 L58 96" stroke="#7a2e2e" strokeWidth={3.5} fill="none" />
      {/* tower body, offset blocks to suggest crumbling */}
      <rect x="46" y="96" width="30" height="34" />
      <rect x="50" y="130" width="34" height="30" transform="rotate(-3 67 145)" />
      <rect x="44" y="160" width="40" height="26" transform="rotate(2 64 173)" />
      {/* windows */}
      <line x1="56" y1="104" x2="56" y2="112" />
      <line x1="66" y1="104" x2="66" y2="112" />
      <line x1="60" y1="138" x2="60" y2="146" />
      <line x1="70" y1="138" x2="70" y2="146" />
      {/* falling coins */}
      <circle cx="104" cy="120" r="6" fill={INK} fillOpacity={0.12} />
      <circle cx="116" cy="146" r="5" fill={INK} fillOpacity={0.12} />
      <circle cx="98" cy="168" r="4.5" fill={INK} fillOpacity={0.12} />
      <line x1="24" y1="186" x2="112" y2="186" strokeWidth={2} />
    </g>
  );
}

function Sun() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round">
      <circle cx="80" cy="92" r="26" fill="#f2b705" fillOpacity={0.18} />
      <circle cx="80" cy="92" r="26" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const len = i % 2 === 0 ? 20 : 12;
        const x1 = 80 + Math.cos(angle) * 32;
        const y1 = 92 + Math.sin(angle) * 32;
        const x2 = 80 + Math.cos(angle) * (32 + len);
        const y2 = 92 + Math.sin(angle) * (32 + len);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <line x1="24" y1="160" x2="136" y2="160" strokeWidth={2} />
      <path d="M32 160 L48 148 L60 154 L76 132 L92 140 L108 118 L128 124" strokeWidth={2.5} />
    </g>
  );
}

function Wheel() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round">
      <circle cx="80" cy="100" r="42" />
      <circle cx="80" cy="100" r="4" fill={INK} />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x1 = 80 + Math.cos(angle) * 14;
        const y1 = 100 + Math.sin(angle) * 14;
        const x2 = 80 + Math.cos(angle) * 38;
        const y2 = 100 + Math.sin(angle) * 38;
        const up = i % 2 === 0;
        const tipX = 80 + Math.cos(angle) * 46;
        const tipY = 100 + Math.sin(angle) * 46 + (up ? -4 : 4);
        return (
          <g key={i}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} />
            <path
              d={`M${x2 - 4} ${y2} L${tipX} ${tipY} L${x2 + 4} ${y2}`}
              fill={up ? "#2c5c46" : "#7a2e2e"}
              stroke="none"
              fillOpacity={0.6}
            />
          </g>
        );
      })}
    </g>
  );
}

function HangedMan() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round">
      <line x1="40" y1="56" x2="120" y2="56" strokeWidth={3.5} />
      <line x1="52" y1="56" x2="52" y2="44" />
      <line x1="80" y1="56" x2="80" y2="68" />
      <line x1="80" y1="68" x2="80" y2="76" strokeWidth={1.5} strokeDasharray="2 3" />
      {/* inverted candlestick body */}
      <line x1="80" y1="76" x2="80" y2="96" strokeWidth={1.5} />
      <rect x="68" y="96" width="24" height="46" fill="#3c4a64" fillOpacity={0.16} />
      <line x1="80" y1="142" x2="80" y2="162" strokeWidth={1.5} />
      <line x1="52" y1="176" x2="108" y2="176" strokeWidth={2} />
    </g>
  );
}

function Death() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 82 L46 100 L40 116 L58 128 L52 148" stroke="#7a2e2e" strokeOpacity={0.7} />
      <circle cx="52" cy="148" r="3" fill="#7a2e2e" fillOpacity={0.7} stroke="none" />
      <path d="M52 148 Q64 150 72 140 Q84 128 100 132 Q116 136 128 116" stroke="#2c5c46" />
      <path d="M96 128 Q98 120 106 120 Q104 128 96 128 Z" fill="#2c5c46" fillOpacity={0.35} stroke="#2c5c46" />
      <line x1="24" y1="164" x2="132" y2="164" strokeWidth={2} />
    </g>
  );
}

function Devil() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round">
      <path d="M64 60 Q68 46 78 50 Q74 58 70 62" fill="#7a2e2e" fillOpacity={0.4} stroke="#7a2e2e" />
      <path d="M96 60 Q92 46 82 50 Q86 58 90 62" fill="#7a2e2e" fillOpacity={0.4} stroke="#7a2e2e" />
      <circle cx="80" cy="96" r="38" fill="#f2b705" fillOpacity={0.15} />
      <circle cx="80" cy="96" r="38" />
      <line x1="80" y1="134" x2="80" y2="160" strokeDasharray="3 3" />
      <circle cx="80" cy="164" r="4" fill={INK} />
      <path d="M108 78 L120 68" stroke="#7a2e2e" strokeWidth={3} />
      <circle cx="122" cy="66" r="3" fill="#7a2e2e" stroke="none" />
    </g>
  );
}

function Star() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M80 46 L88 68 L112 68 L92 82 L100 104 L80 90 L60 104 L68 82 L48 68 L72 68 Z"
        fill="#f2b705"
        fillOpacity={0.2}
      />
      <path
        d="M80 46 L88 68 L112 68 L92 82 L100 104 L80 90 L60 104 L68 82 L48 68 L72 68 Z"
      />
      <path d="M32 158 Q56 138 80 144 Q104 150 128 128" stroke="#2c5c46" strokeWidth={2.5} />
      <line x1="24" y1="172" x2="136" y2="172" strokeWidth={2} />
    </g>
  );
}

function Fool() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="24" y1="120" x2="88" y2="120" strokeWidth={3} />
      <path d="M32 120 L44 104 L56 112 L72 92 L88 120" />
      <line x1="88" y1="120" x2="112" y2="140" strokeDasharray="3 4" />
      <circle cx="118" cy="150" r="9" stroke="#3c4a64" fill="#3c4a64" fillOpacity={0.12} />
      <text x="118" y="154" fontSize="11" textAnchor="middle" fill="#3c4a64" stroke="none" fontFamily="var(--font-mono)">0</text>
      <line x1="24" y1="120" x2="24" y2="182" strokeWidth={2} />
    </g>
  );
}

function Justice() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="80" y1="48" x2="80" y2="70" strokeWidth={3} />
      <line x1="46" y1="70" x2="114" y2="70" strokeWidth={3} />
      <line x1="52" y1="70" x2="52" y2="98" strokeDasharray="2 3" />
      <line x1="108" y1="70" x2="108" y2="98" strokeDasharray="2 3" />
      <path d="M38 98 Q52 112 66 98" />
      <path d="M94 98 Q108 112 122 98" />
      <line x1="80" y1="70" x2="80" y2="158" strokeWidth={2.5} />
      <path d="M56 158 L104 158 L96 174 L64 174 Z" fill={INK} fillOpacity={0.06} />
    </g>
  );
}

function Chariot() {
  return (
    <g stroke={INK} strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="30" y1="168" x2="42" y2="140" stroke="#2c5c46" strokeWidth={2} />
      <line x1="42" y1="168" x2="58" y2="128" stroke="#2c5c46" strokeWidth={2} />
      <line x1="54" y1="168" x2="74" y2="116" stroke="#2c5c46" strokeWidth={2} />
      <rect x="78" y="130" width="16" height="38" fill="#2c5c46" fillOpacity={0.25} />
      <rect x="98" y="108" width="16" height="60" fill="#2c5c46" fillOpacity={0.25} />
      <rect x="118" y="82" width="16" height="86" fill="#2c5c46" fillOpacity={0.25} />
      <line x1="78" y1="130" x2="94" y2="130" />
      <line x1="98" y1="108" x2="114" y2="108" />
      <line x1="118" y1="82" x2="134" y2="82" />
      <line x1="24" y1="168" x2="140" y2="168" strokeWidth={2} />
    </g>
  );
}

const ICONS: Record<ArcanaId, () => React.ReactElement> = {
  tower: Tower,
  sun: Sun,
  wheel: Wheel,
  "hanged-man": HangedMan,
  death: Death,
  devil: Devil,
  star: Star,
  fool: Fool,
  justice: Justice,
  chariot: Chariot,
};

export default function ArcanaIllustration({ id }: { id: ArcanaId }) {
  const Icon = ICONS[id];
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full" role="img" aria-hidden="true">
      <Icon />
    </svg>
  );
}
