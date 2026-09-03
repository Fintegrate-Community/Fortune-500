import { ARCANA, type ArcanaId } from "@/lib/arcana";

// Warm gold linework, designed to glow against a dark night backdrop.
const GOLD = "#f3dfae";

function spikePath(cx: number, cy: number, angleDeg: number, rIn: number, rOut: number, w: number) {
  const a = (angleDeg * Math.PI) / 180;
  const dx = Math.cos(a), dy = Math.sin(a);
  const px = -dy, py = dx;
  const x1 = cx + dx * rIn + px * w, y1 = cy + dy * rIn + py * w;
  const x2 = cx + dx * rOut, y2 = cy + dy * rOut;
  const x3 = cx + dx * rIn - px * w, y3 = cy + dy * rIn - py * w;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} Z`;
}

function Burst({
  cx, cy, count, rIn, rLong, rShort, w, opacity = 0.9, color = GOLD,
}: { cx: number; cy: number; count: number; rIn: number; rLong: number; rShort: number; w: number; opacity?: number; color?: string }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const angle = i * (360 / count);
        const rOut = i % 2 === 0 ? rLong : rShort;
        return <path key={i} d={spikePath(cx, cy, angle, rIn, rOut, w)} fill={color} fillOpacity={opacity} />;
      })}
    </>
  );
}

function OrbitRing({ cx, cy, r }: { cx: number; cy: number; r: number }) {
  const planets = [
    { ang: 20, size: 3.2, op: 0.8 },
    { ang: 200, size: 2.2, op: 0.6 },
    { ang: 110, size: 1.8, op: 0.5 },
  ];
  const crescentAngle = (300 * Math.PI) / 180;
  const cxA = cx + Math.cos(crescentAngle) * r, cyA = cy + Math.sin(crescentAngle) * r;
  return (
    <>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={GOLD} strokeWidth={1} strokeDasharray="1.5 4" strokeOpacity={0.55} />
      {planets.map((p, i) => {
        const a = (p.ang * Math.PI) / 180;
        return <circle key={i} cx={cx + Math.cos(a) * r} cy={cy + Math.sin(a) * r} r={p.size} fill={GOLD} fillOpacity={p.op} />;
      })}
      <circle cx={cxA} cy={cyA} r={4} fill="none" stroke={GOLD} strokeWidth={1.2} strokeOpacity={0.7} />
      <circle cx={cxA + 2.2} cy={cyA - 1} r={4} fill="#100a06" stroke="none" />
    </>
  );
}

function Sparkle({ cx, cy, s, opacity = 1 }: { cx: number; cy: number; s: number; opacity?: number }) {
  const d = `M${cx} ${cy - s} Q${cx + s * 0.25} ${cy - s * 0.25} ${cx + s} ${cy} Q${cx + s * 0.25} ${cy + s * 0.25} ${cx} ${cy + s} Q${cx - s * 0.25} ${cy + s * 0.25} ${cx - s} ${cy} Q${cx - s * 0.25} ${cy - s * 0.25} ${cx} ${cy - s} Z`;
  return <path d={d} fill={GOLD} fillOpacity={opacity} />;
}

function Corners() {
  return (
    <>
      <Sparkle cx={24} cy={26} s={5} />
      <Sparkle cx={176} cy={26} s={5} />
      <Sparkle cx={24} cy={198} s={4} />
      <Sparkle cx={176} cy={198} s={4} />
    </>
  );
}

function Face({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      <path d={`M${cx - 11} ${cy - 3} Q${cx - 7} ${cy - 8} ${cx - 3} ${cy - 3}`} stroke={GOLD} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <path d={`M${cx + 3} ${cy - 3} Q${cx + 7} ${cy - 8} ${cx + 11} ${cy - 3}`} stroke={GOLD} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <line x1={cx} y1={cy - 1} x2={cx - 2} y2={cy + 7} stroke={GOLD} strokeWidth={1.3} strokeLinecap="round" />
      <path d={`M${cx - 6} ${cy + 13} Q${cx} ${cy + 17} ${cx + 6} ${cy + 13}`} stroke={GOLD} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <line x1={cx - 18} y1={cy + 6} x2={cx - 14} y2={cy + 2} stroke={GOLD} strokeWidth={1.1} strokeOpacity={0.6} />
      <line x1={cx - 18} y1={cy + 11} x2={cx - 14} y2={cy + 7} stroke={GOLD} strokeWidth={1.1} strokeOpacity={0.6} />
      <line x1={cx + 18} y1={cy + 6} x2={cx + 14} y2={cy + 2} stroke={GOLD} strokeWidth={1.1} strokeOpacity={0.6} />
      <line x1={cx + 18} y1={cy + 11} x2={cx + 14} y2={cy + 7} stroke={GOLD} strokeWidth={1.1} strokeOpacity={0.6} />
    </>
  );
}

function leafPath(cx: number, cy: number, angleDeg: number, length: number, width: number) {
  const a = (angleDeg * Math.PI) / 180;
  const dx = Math.cos(a), dy = Math.sin(a);
  const px = -dy, py = dx;
  const tipx = cx + dx * length, tipy = cy + dy * length;
  const midx = cx + dx * length * 0.55, midy = cy + dy * length * 0.55;
  const c1x = midx + px * width, c1y = midy + py * width;
  const c2x = midx - px * width, c2y = midy - py * width;
  return `M${cx} ${cy} Q${c1x.toFixed(1)} ${c1y.toFixed(1)} ${tipx.toFixed(1)} ${tipy.toFixed(1)} Q${c2x.toFixed(1)} ${c2y.toFixed(1)} ${cx} ${cy} Z`;
}

function Tower({ glow }: { glow: string }) {
  const cx = 100, cy = 118;
  return (
    <g>
      <path d="M100 20 L78 68 L96 68 L70 116" stroke={glow} strokeWidth={3.2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 20 L78 68 L96 68 L70 116" stroke={glow} strokeOpacity={0.25} strokeWidth={9} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="60" y="116" width="40" height="38" fill="none" stroke={GOLD} strokeWidth={2} />
      <line x1="60" y1="132" x2="100" y2="132" stroke={GOLD} strokeWidth={1} strokeOpacity={0.5} />
      <line x1="66" y1="122" x2="62" y2="130" stroke={GOLD} strokeWidth={0.9} strokeOpacity={0.5} />
      <line x1="74" y1="122" x2="70" y2="130" stroke={GOLD} strokeWidth={0.9} strokeOpacity={0.5} />
      <rect x="64" y="154" width="46" height="34" transform="rotate(-2.5 87 171)" fill="none" stroke={GOLD} strokeWidth={2} />
      <rect x="58" y="188" width="52" height="30" transform="rotate(2 84 203)" fill="none" stroke={GOLD} strokeWidth={2} />
      <circle cx="128" cy="140" r="4.5" fill={glow} fillOpacity={0.6} stroke="none" />
      <circle cx="136" cy="162" r="3.6" fill={glow} fillOpacity={0.6} stroke="none" />
      <OrbitRing cx={cx} cy={cy - 6} r={92} />
    </g>
  );
}

function Sun({ glow }: { glow: string }) {
  const cx = 100, cy = 112;
  return (
    <g>
      {[35, 145, 215, 325].map((ang, i) => (
        <path key={i} d={leafPath(cx, cy, ang, 78, 12)} fill="none" stroke={glow} strokeWidth={1.6} strokeOpacity={0.7} />
      ))}
      <Burst cx={cx} cy={cy} count={16} rIn={36} rLong={88} rShort={52} w={4.5} opacity={0.92} />
      <circle cx={cx} cy={cy} r={30} fill="#100a06" stroke={GOLD} strokeWidth={1.8} />
      <Face cx={cx} cy={cy} />
    </g>
  );
}

function Wheel({ glow }: { glow: string }) {
  const cx = 100, cy = 112;
  return (
    <g>
      <circle cx={cx} cy={cy} r="52" fill="none" stroke={GOLD} strokeWidth={2.4} />
      <circle cx={cx} cy={cy} r="44" fill="none" stroke={GOLD} strokeWidth={1} strokeOpacity={0.5} />
      <circle cx={cx} cy={cy} r="9" fill={glow} fillOpacity={0.3} stroke={GOLD} strokeWidth={2} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i} x1={cx + Math.cos(a) * 9} y1={cy + Math.sin(a) * 9} x2={cx + Math.cos(a) * 52} y2={cy + Math.sin(a) * 52} stroke={GOLD} strokeWidth={1.8} />
        );
      })}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * 22.5 * Math.PI) / 180;
        return (
          <line key={i} x1={cx + Math.cos(a) * 52} y1={cy + Math.sin(a) * 52} x2={cx + Math.cos(a) * 58} y2={cy + Math.sin(a) * 58} stroke={GOLD} strokeWidth={2} />
        );
      })}
      <OrbitRing cx={cx} cy={cy} r={84} />
    </g>
  );
}

function HangedMan({ glow }: { glow: string }) {
  const cx = 100, cy = 116;
  return (
    <g>
      <line x1="52" y1="56" x2="148" y2="56" stroke={GOLD} strokeWidth={2.8} />
      <path d="M52 56 L44 66" stroke={GOLD} strokeWidth={1.6} strokeOpacity={0.6} />
      <path d="M148 56 L156 66" stroke={GOLD} strokeWidth={1.6} strokeOpacity={0.6} />
      <line x1="68" y1="56" x2="68" y2="42" stroke={GOLD} strokeWidth={1.6} />
      <line x1={cx} y1="56" x2={cx} y2="80" stroke={GOLD} strokeWidth={1.6} />
      <line x1={cx} y1="80" x2={cx} y2="92" stroke={GOLD} strokeWidth={1.4} strokeDasharray="2 3" />
      <rect x="82" y="92" width="36" height="60" fill={glow} fillOpacity={0.26} stroke={GOLD} strokeWidth={2} />
      <line x1="94" y1="102" x2="94" y2="142" stroke={GOLD} strokeWidth={1} strokeOpacity={0.4} />
      <line x1="106" y1="102" x2="106" y2="142" stroke={GOLD} strokeWidth={1} strokeOpacity={0.4} />
      <line x1={cx} y1="152" x2={cx} y2="176" stroke={GOLD} strokeWidth={1.6} />
      <Sparkle cx={cx} cy={182} s={4.5} opacity={0.8} />
      <OrbitRing cx={cx} cy={cy} r={90} />
    </g>
  );
}

function Death({ glow }: { glow: string }) {
  const cx = 100, cy = 116;
  return (
    <g>
      <path d="M30 74 L52 96 L42 116 L64 132 L54 158" stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeOpacity={0.55} />
      {[[38, 84], [48, 105], [60, 124]].map(([x, y], i) => (
        <line key={i} x1={x - 5} y1={y - 5} x2={x + 5} y2={y + 5} stroke={GOLD} strokeWidth={1} strokeOpacity={0.35} />
      ))}
      <circle cx="54" cy="158" r="3" fill={GOLD} fillOpacity={0.6} stroke="none" />
      <path d="M54 158 Q72 161 84 145 Q98 127 120 132 Q142 137 158 108" stroke={glow} strokeWidth={2.8} fill="none" />
      <path d="M54 158 Q72 161 84 145 Q98 127 120 132 Q142 137 158 108" stroke={glow} strokeOpacity={0.28} strokeWidth={8} fill="none" />
      {[[86, 143], [112, 130], [138, 118]].map(([x, y], i) => (
        <path key={i} d={leafPath(x, y, -50 + i * 10, 14, 5)} fill="none" stroke={glow} strokeWidth={1.5} strokeOpacity={0.75} />
      ))}
      <OrbitRing cx={cx} cy={cy} r={92} />
    </g>
  );
}

function Devil({ glow }: { glow: string }) {
  const cx = 100, cy = 118;
  return (
    <g>
      <circle cx={cx} cy={cy} r="42" fill={glow} fillOpacity={0.16} stroke={GOLD} strokeWidth={2.2} />
      <path d={`M${cx - 6} ${cy - 6} Q${cx - 3} ${cy - 2} ${cx} ${cy - 6}`} stroke={GOLD} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <path d={`M${cx} ${cy - 6} Q${cx + 3} ${cy - 2} ${cx + 6} ${cy - 6}`} stroke={GOLD} strokeWidth={1.6} fill="none" strokeLinecap="round" />
      <path d={`M${cx - 8} ${cy + 6} Q${cx} ${cy + 14} ${cx + 8} ${cy + 6}`} stroke={GOLD} strokeWidth={1.8} fill="none" strokeLinecap="round" />
      <path d={`M${cx - 16} ${cy - 38} Q${cx - 22} ${cy - 56} ${cx - 8} ${cy - 50} Q${cx - 12} ${cy - 42} ${cx - 16} ${cy - 38}`} fill={glow} fillOpacity={0.5} stroke={GOLD} strokeWidth={1.6} />
      <path d={`M${cx + 16} ${cy - 38} Q${cx + 22} ${cy - 56} ${cx + 8} ${cy - 50} Q${cx + 12} ${cy - 42} ${cx + 16} ${cy - 38}`} fill={glow} fillOpacity={0.5} stroke={GOLD} strokeWidth={1.6} />
      <line x1={cx} y1={cy + 42} x2={cx} y2={cy + 76} stroke={GOLD} strokeWidth={1.6} strokeDasharray="2 4" />
      <circle cx={cx} cy={cy + 82} r="6" fill="none" stroke={GOLD} strokeWidth={1.8} />
      <OrbitRing cx={cx} cy={cy - 6} r={90} />
    </g>
  );
}

function Star({ glow }: { glow: string }) {
  const cx = 100, cy = 112;
  return (
    <g>
      <circle cx={cx} cy={cy} r="20" fill={glow} fillOpacity={0.25} stroke="none" />
      <Burst cx={cx} cy={cy} count={10} rIn={14} rLong={72} rShort={42} w={3.2} opacity={0.92} />
      <OrbitRing cx={cx} cy={cy} r={90} />
    </g>
  );
}

function Fool({ glow }: { glow: string }) {
  return (
    <g>
      <line x1="30" y1="128" x2="106" y2="128" stroke={GOLD} strokeWidth={2.4} />
      <path d="M38 128 L52 108 L66 118 L84 92 L106 128" stroke={GOLD} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 128 L52 108 L66 118 L84 92 L106 128" stroke={GOLD} strokeOpacity={0.22} strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="106" y1="128" x2="132" y2="152" stroke={GOLD} strokeWidth={1.6} strokeDasharray="2 4" />
      <Sparkle cx={118} cy={140} s={2.4} opacity={0.6} />
      <circle cx="140" cy="164" r="11" fill={glow} fillOpacity={0.32} stroke={GOLD} strokeWidth={1.8} />
      <text x="140" y="169" fontSize="13" textAnchor="middle" fill={GOLD} stroke="none">0</text>
      <OrbitRing cx={100} cy={116} r={92} />
    </g>
  );
}

function Justice({ glow }: { glow: string }) {
  const cx = 100;
  return (
    <g>
      <line x1={cx} y1="40" x2={cx} y2="66" stroke={GOLD} strokeWidth={2.4} />
      <circle cx={cx} cy="36" r="4.5" fill={GOLD} fillOpacity={0.7} />
      <line x1={cx - 48} y1="66" x2={cx + 48} y2="66" stroke={GOLD} strokeWidth={2.4} />
      <line x1={cx - 48} y1="66" x2={cx - 48} y2="100" stroke={GOLD} strokeWidth={1.4} strokeDasharray="2 3" />
      <line x1={cx + 48} y1="66" x2={cx + 48} y2="100" stroke={GOLD} strokeWidth={1.4} strokeDasharray="2 3" />
      <path d={`M${cx - 64} 100 Q${cx - 48} 116 ${cx - 32} 100`} stroke={GOLD} strokeWidth={2} fill="none" />
      <path d={`M${cx + 32} 100 Q${cx + 48} 116 ${cx + 64} 100`} stroke={GOLD} strokeWidth={2} fill="none" />
      <line x1={cx} y1="66" x2={cx} y2="170" stroke={GOLD} strokeWidth={2} />
      <path d={`M${cx - 26} 170 L${cx + 26} 170 L${cx + 18} 190 L${cx - 18} 190 Z`} fill={glow} fillOpacity={0.24} stroke={GOLD} strokeWidth={1.8} />
      <OrbitRing cx={cx} cy={120} r={92} />
    </g>
  );
}

function Chariot({ glow }: { glow: string }) {
  const cx = 100, cy = 120;
  return (
    <g>
      <line x1="34" y1="152" x2="48" y2="118" stroke={glow} strokeWidth={2} />
      <line x1="48" y1="152" x2="66" y2="106" stroke={glow} strokeWidth={2} />
      <line x1="62" y1="152" x2="84" y2="94" stroke={glow} strokeWidth={2} />
      <rect x="88" y="112" width="15" height="40" fill={glow} fillOpacity={0.32} stroke={GOLD} strokeWidth={1.8} />
      <rect x="108" y="86" width="15" height="66" fill={glow} fillOpacity={0.32} stroke={GOLD} strokeWidth={1.8} />
      <rect x="128" y="58" width="15" height="94" fill={glow} fillOpacity={0.32} stroke={GOLD} strokeWidth={1.8} />
      <Sparkle cx={135} cy={50} s={4} opacity={0.85} />
      <circle cx="70" cy="176" r="12" fill="none" stroke={GOLD} strokeWidth={1.8} />
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i * 60 * Math.PI) / 180;
        return <line key={i} x1={70 + Math.cos(a) * 4} y1={176 + Math.sin(a) * 4} x2={70 + Math.cos(a) * 12} y2={176 + Math.sin(a) * 12} stroke={GOLD} strokeWidth={1.4} />;
      })}
      <OrbitRing cx={cx} cy={cy} r={92} />
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

export default function ArcanaIllustration({ id }: { id: ArcanaId }) {
  const Icon = ICONS[id];
  const glow = ARCANA[id].glow;
  const gradientId = `glow-${id}`;

  return (
    <svg viewBox="0 0 200 224" className="h-full w-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="46%" r="65%">
          <stop offset="0%" stopColor={glow} stopOpacity={0.32} />
          <stop offset="60%" stopColor={glow} stopOpacity={0.08} />
          <stop offset="100%" stopColor={glow} stopOpacity={0} />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="200" height="224" fill="#100a06" />
      <rect x="0" y="0" width="200" height="224" fill={`url(#${gradientId})`} />
      <Icon glow={glow} />
      <Corners />
    </svg>
  );
}
