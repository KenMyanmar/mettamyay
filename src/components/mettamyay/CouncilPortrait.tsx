import { useMemo } from "react";

// Deterministic stylised lotus / silhouette per name. No representational
// portraits — these are decorative placeholders until real photos arrive.
const PALETTES = [
  ["hsl(20 52% 46%)", "hsl(42 52% 51%)"],   // clay / gold
  ["hsl(100 14% 25%)", "hsl(34 52% 80%)"],  // moss / sand
  ["hsl(20 55% 35%)", "hsl(42 70% 67%)"],   // clay-dark / gold-light
  ["hsl(30 33% 36%)", "hsl(37 42% 94%)"],   // earth / cream
];

const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

const CouncilPortrait = ({ seed }: { seed: string }) => {
  const palette = useMemo(() => PALETTES[hash(seed) % PALETTES.length], [seed]);
  const id = useMemo(() => `lotus-${hash(seed)}`, [seed]);

  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" role="img" aria-hidden="true">
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={palette[1]} stopOpacity="0.35" />
          <stop offset="100%" stopColor={palette[0]} stopOpacity="0.15" />
        </radialGradient>
      </defs>
      <rect width="120" height="120" fill={`url(#${id})`} />
      {/* Lotus petals */}
      <g transform="translate(60 70)" fill={palette[0]} fillOpacity="0.55">
        <ellipse cx="0" cy="-12" rx="9" ry="22" />
        <ellipse cx="0" cy="-12" rx="9" ry="22" transform="rotate(40)" />
        <ellipse cx="0" cy="-12" rx="9" ry="22" transform="rotate(-40)" />
        <ellipse cx="0" cy="-12" rx="9" ry="22" transform="rotate(80)" />
        <ellipse cx="0" cy="-12" rx="9" ry="22" transform="rotate(-80)" />
      </g>
      {/* Silhouette head */}
      <circle cx="60" cy="46" r="14" fill={palette[0]} fillOpacity="0.8" />
      <path d="M40 78 Q60 60 80 78 L80 92 L40 92 Z" fill={palette[0]} fillOpacity="0.8" />
    </svg>
  );
};

export default CouncilPortrait;
