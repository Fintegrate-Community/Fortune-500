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
      <line x1="24" y1="186" x2="112" y2="186" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

function Sun({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round">
      <circle cx="80" cy="92" r="26" fill={glow} fillOpacity={0.35} />
      <circle cx="80" cy="92" r="26" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const len = i % 2 === 0 ? 22 : 13;
        const x1 = 80 + Math.cos(angle) * 32;
        const y1 = 92 + Math.sin(angle) * 32;
        const x2 = 80 + Math.cos(angle) * (32 + len);
        const y2 = 92 + Math.sin(angle) * (32 + len);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
      <line x1="24" y1="160" x2="136" y2="160" strokeWidth={1.6} strokeOpacity={0.6} />
      <path d="M32 160 L48 148 L60 154 L76 132 L92 140 L108 118 L128 124" stroke={glow} strokeWidth={2.6} />
    </g>
  );
}

function Wheel({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round">
      <circle cx="80" cy="100" r="42" />
      <circle cx="80" cy="100" r="4" fill={glow} stroke="none" />
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
              fill={glow}
              stroke="none"
              fillOpacity={0.85}
            />
          </g>
        );
      })}
    </g>
  );
}

function HangedMan({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round">
      <line x1="40" y1="56" x2="120" y2="56" strokeWidth={3} />
      <line x1="52" y1="56" x2="52" y2="44" />
      <line x1="80" y1="56" x2="80" y2="76" strokeWidth={1.4} strokeDasharray="2 3" />
      <rect x="68" y="96" width="24" height="46" fill={glow} fillOpacity={0.3} />
      <line x1="80" y1="76" x2="80" y2="96" strokeWidth={1.4} />
      <line x1="80" y1="142" x2="80" y2="162" strokeWidth={1.4} />
      <line x1="52" y1="176" x2="108" y2="176" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

function Death({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M28 82 L46 100 L40 116 L58 128 L52 148" strokeOpacity={0.6} />
      <circle cx="52" cy="148" r="3" fill={GOLD} fillOpacity={0.6} stroke="none" />
      <path d="M52 148 Q64 150 72 140 Q84 128 100 132 Q116 136 128 116" stroke={glow} strokeWidth={2.6} />
      <path d="M96 128 Q98 120 106 120 Q104 128 96 128 Z" fill={glow} fillOpacity={0.5} stroke={glow} />
      <line x1="24" y1="164" x2="132" y2="164" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

function Devil({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round">
      <path d="M64 60 Q68 46 78 50 Q74 58 70 62" fill={glow} fillOpacity={0.5} stroke={glow} />
      <path d="M96 60 Q92 46 82 50 Q86 58 90 62" fill={glow} fillOpacity={0.5} stroke={glow} />
      <circle cx="80" cy="96" r="38" fill={glow} fillOpacity={0.22} />
      <circle cx="80" cy="96" r="38" />
      <line x1="80" y1="134" x2="80" y2="160" strokeDasharray="3 3" />
      <circle cx="80" cy="164" r="4" fill={GOLD} stroke="none" />
      <path d="M108 78 L120 68" stroke={glow} strokeWidth={2.6} />
      <circle cx="122" cy="66" r="3" fill={glow} stroke="none" />
    </g>
  );
}

function Star({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M80 46 L88 68 L112 68 L92 82 L100 104 L80 90 L60 104 L68 82 L48 68 L72 68 Z"
        fill={glow}
        fillOpacity={0.4}
      />
      <path d="M80 46 L88 68 L112 68 L92 82 L100 104 L80 90 L60 104 L68 82 L48 68 L72 68 Z" />
      <path d="M32 158 Q56 138 80 144 Q104 150 128 128" stroke={glow} strokeWidth={2.6} />
      <line x1="24" y1="172" x2="136" y2="172" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

function Fool({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="24" y1="120" x2="88" y2="120" strokeWidth={2.6} />
      <path d="M32 120 L44 104 L56 112 L72 92 L88 120" />
      <line x1="88" y1="120" x2="112" y2="140" strokeDasharray="3 4" />
      <circle cx="118" cy="150" r="9" stroke={glow} fill={glow} fillOpacity={0.3} />
      <text x="118" y="154" fontSize="11" textAnchor="middle" fill={GOLD} stroke="none">0</text>
      <line x1="24" y1="120" x2="24" y2="182" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

function Justice({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="80" y1="48" x2="80" y2="70" strokeWidth={2.6} />
      <line x1="46" y1="70" x2="114" y2="70" strokeWidth={2.6} />
      <line x1="52" y1="70" x2="52" y2="98" strokeDasharray="2 3" />
      <line x1="108" y1="70" x2="108" y2="98" strokeDasharray="2 3" />
      <path d="M38 98 Q52 112 66 98" stroke={glow} strokeWidth={2.4} />
      <path d="M94 98 Q108 112 122 98" stroke={glow} strokeWidth={2.4} />
      <line x1="80" y1="70" x2="80" y2="158" strokeWidth={2.2} />
      <path d="M56 158 L104 158 L96 174 L64 174 Z" fill={glow} fillOpacity={0.25} />
    </g>
  );
}

function Chariot({ glow }: { glow: string }) {
  return (
    <g stroke={GOLD} strokeWidth={2.2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="30" y1="168" x2="42" y2="140" stroke={glow} strokeWidth={2} />
      <line x1="42" y1="168" x2="58" y2="128" stroke={glow} strokeWidth={2} />
      <line x1="54" y1="168" x2="74" y2="116" stroke={glow} strokeWidth={2} />
      <rect x="78" y="130" width="16" height="38" fill={glow} fillOpacity={0.3} />
      <rect x="98" y="108" width="16" height="60" fill={glow} fillOpacity={0.3} />
      <rect x="118" y="82" width="16" height="86" fill={glow} fillOpacity={0.3} />
      <line x1="78" y1="130" x2="94" y2="130" />
      <line x1="98" y1="108" x2="114" y2="108" />
      <line x1="118" y1="82" x2="134" y2="82" />
      <line x1="24" y1="168" x2="140" y2="168" strokeWidth={1.6} strokeOpacity={0.6} />
    </g>
  );
}

const ICONS: Record<ArcanaId, (props: { glow: string }) => React.ReactElement> = {
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

// Fixed positions so the "night sky" reads the same across every card.
const STARS = [
  { x: 18, y: 26, r: 1.4 }, { x: 142, y: 22, r: 1.1 }, { x: 12, y: 178, r: 1.2 },
  { x: 148, y: 172, r: 1.5 }, { x: 76, y: 14, r: 1.1 }, { x: 108, y: 192, r: 1.3 },
  { x: 26, y: 100, r: 1 }, { x: 134, y: 96, r: 1.1 },
];

export default function ArcanaIllustration({ id }: { id: ArcanaId }) {
  const Icon = ICONS[id];
  const glow = ARCANA[id].glow;
  const gradientId = `glow-${id}`;

  return (
    <svg viewBox="0 0 160 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor={glow} stopOpacity={0.55} />
          <stop offset="55%" stopColor={glow} stopOpacity={0.16} />
          <stop offset="100%" stopColor={glow} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="160" height="200" fill={`url(#${gradientId})`} />
      <g fill={GOLD}>
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fillOpacity={0.4 + (i % 3) * 0.15} />
        ))}
      </g>
      <circle cx="80" cy="100" r="76" fill="none" stroke={glow} strokeOpacity={0.35} strokeWidth={1.2} />
      <Icon glow={glow} />
    </svg>
  );
}
