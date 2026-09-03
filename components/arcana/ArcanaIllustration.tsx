import { ARCANA, type ArcanaId } from "@/lib/arcana";

// Warm gold/cream linework, designed to glow against a dark night backdrop.
const GOLD = "#f3dfae";
const GOLD_SOFT = "#d9c090";

function Landscape({ glow }: { glow: string }) {
  return (
    <g>
      {/* three layered hills for depth, like a woodcut horizon */}
      <path
        d="M0 152 C 26 142, 54 148, 82 140 C 110 133, 134 144, 160 136 L160 200 L0 200 Z"
        fill={glow}
        fillOpacity={0.1}
        stroke="none"
      />
      <path
        d="M0 166 C 24 156, 52 163, 80 155 C 108 149, 132 160, 160 151 L160 200 L0 200 Z"
        fill={glow}
        fillOpacity={0.18}
        stroke={GOLD_SOFT}
        strokeOpacity={0.35}
        strokeWidth={1}
      />
      <path
        d="M0 183 C 22 172, 50 180, 78 171 C 106 164, 130 175, 160 168 L160 200 L0 200 Z"
        fill={glow}
        fillOpacity={0.3}
        stroke={GOLD}
        strokeOpacity={0.55}
        strokeWidth={1.2}
      />
      {/* tiny pines along the front ridge */}
      <g stroke={GOLD} strokeOpacity={0.6} strokeWidth={1.2} fill="none" strokeLinejoin="round">
        <path d="M28 171 L33 160 L38 171 Z" />
        <path d="M126 169 L131 158 L136 169 Z" />
      </g>
      {/* two small birds */}
      <g stroke={GOLD} strokeOpacity={0.55} strokeWidth={1.3} fill="none" strokeLinecap="round">
        <path d="M40 32 Q44 28 48 32 Q52 28 56 32" />
        <path d="M112 44 Q116 40 120 44 Q124 40 128 44" />
      </g>
    </g>
  );
}

function Tower({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 14 L61 56 L77 56 L54 98" stroke={glow} strokeWidth={3} fill="none" />
        <path d="M80 14 L61 56 L77 56 L54 98" strokeOpacity={0.4} strokeWidth={7} stroke={glow} />
        <rect x="44" y="98" width="32" height="32" />
        <line x1="44" y1="112" x2="76" y2="112" strokeOpacity={0.5} strokeWidth={1} />
        <rect x="48" y="128" width="36" height="30" transform="rotate(-3 66 143)" />
        <line x1="48" y1="142" x2="84" y2="140" strokeOpacity={0.5} strokeWidth={1} transform="rotate(-3 66 143)" />
        <rect x="42" y="156" width="42" height="28" transform="rotate(2 63 170)" />
        <line x1="54" y1="106" x2="54" y2="114" />
        <line x1="66" y1="106" x2="66" y2="114" />
        <line x1="58" y1="136" x2="58" y2="144" />
        <line x1="70" y1="136" x2="70" y2="144" />
        <circle cx="102" cy="112" r="5.5" fill={glow} fillOpacity={0.55} stroke="none" />
        <circle cx="112" cy="134" r="4.5" fill={glow} fillOpacity={0.55} stroke="none" />
        <circle cx="96" cy="152" r="4" fill={glow} fillOpacity={0.55} stroke="none" />
      </g>
    </g>
  );
}

function Sun({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round">
        <circle cx="80" cy="76" r="24" fill={glow} fillOpacity={0.4} />
        <circle cx="80" cy="76" r="24" />
        <circle cx="80" cy="76" r="15" strokeOpacity={0.5} />
        <path d="M70 72 Q75 68 80 72" strokeOpacity={0.6} strokeWidth={1.4} />
        <path d="M80 72 Q85 68 90 72" strokeOpacity={0.6} strokeWidth={1.4} />
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2;
          const len = i % 2 === 0 ? 20 : 11;
          const x1 = 80 + Math.cos(angle) * 30;
          const y1 = 76 + Math.sin(angle) * 30;
          const x2 = 80 + Math.cos(angle) * (30 + len);
          const y2 = 76 + Math.sin(angle) * (30 + len);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </g>
  );
}

function Wheel({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round">
        <circle cx="80" cy="88" r="40" fill={glow} fillOpacity={0.08} />
        <circle cx="80" cy="88" r="40" />
        <circle cx="80" cy="88" r="27" strokeOpacity={0.5} />
        <circle cx="80" cy="88" r="4" fill={glow} stroke="none" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
          const x1 = 80 + Math.cos(angle) * 12;
          const y1 = 88 + Math.sin(angle) * 12;
          const x2 = 80 + Math.cos(angle) * 36;
          const y2 = 88 + Math.sin(angle) * 36;
          const up = i % 2 === 0;
          const tipX = 80 + Math.cos(angle) * 45;
          const tipY = 88 + Math.sin(angle) * 45 + (up ? -4 : 4);
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
    </g>
  );
}

function HangedMan({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round">
        <line x1="36" y1="50" x2="124" y2="50" strokeWidth={2.8} />
        <path d="M36 50 L30 58" strokeOpacity={0.6} />
        <path d="M124 50 L130 58" strokeOpacity={0.6} />
        <line x1="52" y1="50" x2="52" y2="38" />
        <line x1="80" y1="50" x2="80" y2="66" />
        <line x1="80" y1="66" x2="80" y2="76" strokeWidth={1.4} strokeDasharray="2 3" />
        <rect x="66" y="76" width="28" height="48" fill={glow} fillOpacity={0.28} />
        <line x1="76" y1="84" x2="76" y2="116" strokeOpacity={0.4} strokeWidth={1} />
        <line x1="84" y1="84" x2="84" y2="116" strokeOpacity={0.4} strokeWidth={1} />
        <line x1="80" y1="124" x2="80" y2="148" strokeWidth={1.4} />
        <circle cx="80" cy="88" r="10" fill="none" stroke={glow} strokeOpacity={0.5} />
      </g>
    </g>
  );
}

function Death({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 66 L44 86 L36 104 L56 118 L48 140" strokeOpacity={0.55} />
        <path d="M24 66 L44 86 L36 104 L56 118 L48 140" strokeOpacity={0.2} strokeWidth={6} />
        <circle cx="48" cy="140" r="3" fill={GOLD} fillOpacity={0.6} stroke="none" />
        <path d="M48 140 Q62 142 72 130 Q84 116 102 120 Q120 124 134 102" stroke={glow} strokeWidth={2.6} />
        <path d="M48 140 Q62 142 72 130 Q84 116 102 120 Q120 124 134 102" stroke={glow} strokeOpacity={0.3} strokeWidth={7} />
        <path d="M96 116 Q99 106 110 106 Q107 116 96 116 Z" fill={glow} fillOpacity={0.55} stroke={glow} />
        <path d="M110 108 Q113 100 122 100 Q119 109 110 108 Z" fill={glow} fillOpacity={0.4} stroke={glow} strokeWidth={1.4} />
      </g>
    </g>
  );
}

function Devil({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round">
        <path d="M62 48 Q67 30 80 36 Q75 46 70 51" fill={glow} fillOpacity={0.5} stroke={glow} />
        <path d="M98 48 Q93 30 80 36 Q85 46 90 51" fill={glow} fillOpacity={0.5} stroke={glow} />
        <circle cx="80" cy="86" r="36" fill={glow} fillOpacity={0.24} />
        <circle cx="80" cy="86" r="36" />
        <circle cx="80" cy="86" r="24" strokeOpacity={0.4} />
        <path d="M62 122 Q80 130 98 122" strokeOpacity={0.5} />
        <line x1="80" y1="122" x2="80" y2="146" strokeDasharray="3 3" />
        <circle cx="80" cy="150" r="4" fill={GOLD} stroke="none" />
        <path d="M104 66 L118 54" stroke={glow} strokeWidth={2.6} />
        <circle cx="120" cy="52" r="3.2" fill={glow} stroke="none" />
      </g>
    </g>
  );
}

function Star({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="80" cy="72" r="34" fill={glow} fillOpacity={0.14} stroke={glow} strokeOpacity={0.35} />
        <path
          d="M80 40 L87 60 L108 60 L91 73 L98 94 L80 82 L62 94 L69 73 L52 60 L73 60 Z"
          fill={glow}
          fillOpacity={0.45}
        />
        <path d="M80 40 L87 60 L108 60 L91 73 L98 94 L80 82 L62 94 L69 73 L52 60 L73 60 Z" />
        <circle cx="42" cy="42" r="2" fill={GOLD} stroke="none" fillOpacity={0.8} />
        <circle cx="122" cy="46" r="1.6" fill={GOLD} stroke="none" fillOpacity={0.7} />
        <circle cx="128" cy="80" r="1.6" fill={GOLD} stroke="none" fillOpacity={0.7} />
      </g>
    </g>
  );
}

function Fool({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="108" x2="90" y2="108" strokeWidth={2.4} />
        <path d="M30 108 L42 90 L54 99 L70 76 L90 108" />
        <path d="M30 108 L42 90 L54 99 L70 76 L90 108" strokeOpacity={0.25} strokeWidth={6} />
        <line x1="90" y1="108" x2="118" y2="132" strokeDasharray="3 4" />
        <circle cx="126" cy="144" r="10" stroke={glow} fill={glow} fillOpacity={0.3} />
        <text x="126" y="148" fontSize="12" textAnchor="middle" fill={GOLD} stroke="none">0</text>
      </g>
    </g>
  );
}

function Justice({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="80" y1="34" x2="80" y2="58" strokeWidth={2.6} />
        <circle cx="80" cy="30" r="4" fill={glow} fillOpacity={0.5} />
        <line x1="44" y1="58" x2="116" y2="58" strokeWidth={2.6} />
        <line x1="50" y1="58" x2="50" y2="88" strokeDasharray="2 3" />
        <line x1="110" y1="58" x2="110" y2="88" strokeDasharray="2 3" />
        <path d="M36 88 Q50 104 64 88" stroke={glow} strokeWidth={2.4} />
        <path d="M96 88 Q110 104 124 88" stroke={glow} strokeWidth={2.4} />
        <line x1="80" y1="58" x2="80" y2="150" strokeWidth={2} />
        <path d="M54 150 L106 150 L98 168 L62 168 Z" fill={glow} fillOpacity={0.28} />
      </g>
    </g>
  );
}

function Chariot({ glow }: { glow: string }) {
  return (
    <g>
      <Landscape glow={glow} />
      <g stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <line x1="26" y1="146" x2="40" y2="114" stroke={glow} strokeWidth={2} />
        <line x1="40" y1="146" x2="58" y2="102" stroke={glow} strokeWidth={2} />
        <line x1="54" y1="146" x2="76" y2="88" stroke={glow} strokeWidth={2} />
        <rect x="80" y="108" width="15" height="38" fill={glow} fillOpacity={0.3} />
        <rect x="100" y="84" width="15" height="62" fill={glow} fillOpacity={0.3} />
        <rect x="120" y="56" width="15" height="90" fill={glow} fillOpacity={0.3} />
        <line x1="80" y1="108" x2="95" y2="108" />
        <line x1="100" y1="84" x2="115" y2="84" />
        <line x1="120" y1="56" x2="135" y2="56" />
        <circle cx="127" cy="48" r="3" fill={glow} stroke="none" fillOpacity={0.8} />
      </g>
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
  { x: 18, y: 20, r: 1.4 }, { x: 142, y: 18, r: 1.1 }, { x: 12, y: 200, r: 1.2 },
  { x: 148, y: 196, r: 1.5 }, { x: 76, y: 10, r: 1.1 }, { x: 108, y: 18, r: 1.3 },
  { x: 26, y: 50, r: 1 }, { x: 134, y: 60, r: 1.1 }, { x: 20, y: 130, r: 1 },
  { x: 140, y: 120, r: 1.1 },
];

export default function ArcanaIllustration({ id }: { id: ArcanaId }) {
  const Icon = ICONS[id];
  const glow = ARCANA[id].glow;
  const gradientId = `glow-${id}`;

  return (
    <svg viewBox="0 0 160 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={glow} stopOpacity={0.5} />
          <stop offset="55%" stopColor={glow} stopOpacity={0.14} />
          <stop offset="100%" stopColor={glow} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="160" height="200" fill={`url(#${gradientId})`} />
      <g fill={GOLD}>
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fillOpacity={0.35 + (i % 3) * 0.15} />
        ))}
      </g>
      <Icon glow={glow} />
    </svg>
  );
}
