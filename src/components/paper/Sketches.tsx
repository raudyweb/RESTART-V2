import type React from "react";
/* Ilustraciones de línea en tinta (palmera y paseo marítimo) */

export const PalmSketch = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 160 300"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* tronco */}
    <path d="M86 296c-4-40-2-82 2-120 3-30 6-50 8-72" strokeWidth="2.2" />
    <path d="M80 296c-3-42-1-84 3-122 3-30 6-50 9-70" strokeWidth="1.4" />
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
      const y = 286 - i * 12;
      const x = 80 + i * 0.75;
      return <path key={i} d={`M${x} ${y}c3-2 6-2 8 0`} strokeWidth="1.1" />;
    })}
    {/* hojas */}
    {[
      "M96 104C80 86 52 80 24 92",
      "M96 104C78 96 50 104 30 126",
      "M96 104C90 86 74 62 52 50",
      "M96 104C100 82 104 56 98 34",
      "M96 104C110 86 128 70 152 66",
      "M96 104C116 98 138 106 154 124",
      "M96 104C108 108 122 124 128 148",
    ].map((d, i) => (
      <g key={i}>
        <path d={d} strokeWidth="1.8" />
        <path d={d} strokeWidth="7" strokeDasharray="1.2 3.2" opacity=".55" />
      </g>
    ))}
  </svg>
);

export const SeafrontSketch = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 600 120"
    preserveAspectRatio="xMidYMax slice"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
  >
    {/* mástiles del puerto */}
    {[30, 48, 64, 82, 101, 122, 140].map((x, i) => (
      <g key={x}>
        <path d={`M${x} ${88}V${18 + (i % 3) * 8}`} strokeWidth="1" />
        <path
          d={`M${x} ${24 + (i % 3) * 8}L${x + 14} ${80}`}
          strokeWidth=".7"
          opacity=".7"
        />
      </g>
    ))}
    {/* palmeras pequeñas */}
    {[440, 470, 505, 545].map((x, i) => (
      <g key={x} strokeWidth="1.1">
        <path d={`M${x} 96c1-14 2-28 5-${40 - i * 3}`} />
        <path
          d={`M${x + 5} ${56 + i * 3}c-8-5-16-5-22 1M${x + 5} ${56 + i * 3}c7-6 15-6 22 0M${x + 5} ${56 + i * 3}c-3-8-1-14 4-18M${x + 5} ${56 + i * 3}c-10 1-14 8-16 14M${x + 5} ${56 + i * 3}c9 1 13 7 15 13`}
        />
      </g>
    ))}
    {/* montaña lejana y línea de costa */}
    <path d="M0 96c80-6 170-8 260-8s200 2 340 6" strokeWidth="1.6" />
    {/* olas */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path
        key={i}
        d={`M${20 + i * 70} 108c8-4 16-4 24 0`}
        strokeWidth="1"
        opacity=".7"
      />
    ))}
    {/* rocas */}
    <path
      d="M470 116c6-10 18-14 28-10 8-6 20-4 26 4 10-4 22 0 26 8"
      strokeWidth="1.3"
    />
  </svg>
);

/* ---------- Iconos dibujados (trazo fino, color heredado) ---------- */
const Doodle = ({
  className = "",
  children,
  vb = "0 0 48 48",
}: {
  className?: string;
  children: React.ReactNode;
  vb?: string;
}) => (
  <svg
    aria-hidden="true"
    viewBox={vb}
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export const CupDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className}>
    <path d="M10 20h24v6c0 7-5.4 12-12 12s-12-5-12-12v-6Z" />
    <path d="M34 23h3a4 4 0 0 1 0 8h-4" />
    <path d="M17 9c-1.5 2 1.5 3 0 5M22 8c-1.5 2 1.5 3 0 5M27 9c-1.5 2 1.5 3 0 5" />
  </Doodle>
);

export const EspressoMachineDoodle = ({
  className = "",
}: {
  className?: string;
}) => (
  <Doodle className={className}>
    <rect x="6" y="9" width="36" height="15" rx="2.5" />
    <rect x="11" y="13" width="9" height="5" rx="1" />
    <rect x="28" y="13" width="9" height="5" rx="1" />
    <circle cx="24" cy="16" r="2.4" />
    <path d="M14 24v4h6v-4M28 24v4h6v-4" />
    <path d="M8 40h32" />
    <path d="M14 34h6v4h-6zM28 34h6v4h-6z" />
    <path d="M6 24v16M42 24v16" />
  </Doodle>
);

export const LatteDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className}>
    <ellipse cx="24" cy="20" rx="15" ry="6" />
    <path d="M9 20c0 10 6.7 17 15 17s15-7 15-17" />
    <path d="M6 37c6 3.5 30 3.5 36 0" />
    <path d="M24 16.5v7M21 18c1 1.4 2 1.8 3 1.8s2-.4 3-1.8M20 20.5c1.2 1.4 2.6 2 4 2s2.8-.6 4-2" />
  </Doodle>
);

export const MilkJugDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className}>
    <path d="M13 10h18l-1 4c3 6 4 13 4 20 0 2-1 4-3 4H14c-2 0-3-2-3-4 0-7 1-14 4-20l-2-4Z" />
    <path d="M13 10 8 8" />
    <path d="M33 17c4 0 6 3 6 7s-2 7-5 7" />
  </Doodle>
);

export const PortafilterDoodle = ({
  className = "",
}: {
  className?: string;
}) => (
  <Doodle className={className} vb="0 0 64 40">
    <path d="M6 14h22v4c0 5-5 8-11 8S6 23 6 18v-4Z" />
    <path d="M4 14h26" />
    <path d="M28 17l30-4c2 0 3 1 3 3s-1 3-3 3l-30 3" />
    <path d="M13 26v4M20 26v4" />
  </Doodle>
);

export const ChemexDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className} vb="0 0 40 48">
    <path d="M7 4h26L22 22v2l11 18c1 2 0 3-2 3H9c-2 0-3-1-2-3l11-18v-2L7 4Z" />
    <path d="M15 18h10l-2 7h-6l-2-7Z" />
    <path d="M14 34h12" />
  </Doodle>
);

export const BeansGroundDoodle = ({
  className = "",
}: {
  className?: string;
}) => (
  <Doodle className={className} vb="0 0 56 44">
    <ellipse cx="14" cy="12" rx="6" ry="8.5" transform="rotate(-20 14 12)" />
    <path d="M11 5c3 3 3 11 1 14" />
    <ellipse cx="27" cy="10" rx="6" ry="8.5" transform="rotate(15 27 10)" />
    <path d="M28 2c-2 3-2 12 0 16" />
    <path d="M24 40c4-10 10-15 14-15s10 5 14 15H24Z" />
    <path d="M32 34h.01M38 31h.01M44 35h.01M36 37h.01" strokeWidth="2.6" />
  </Doodle>
);

export const BeansDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className} vb="0 0 60 40">
    <ellipse cx="14" cy="22" rx="8" ry="11" transform="rotate(-25 14 22)" />
    <path d="M10 13c4 4 4 14 1 19" />
    <ellipse cx="30" cy="16" rx="8" ry="11" />
    <path d="M30 6c-3 4-3 16 0 21" />
    <ellipse cx="46" cy="22" rx="8" ry="11" transform="rotate(25 46 22)" />
    <path d="M49 13c-4 4-4 14-1 19" />
  </Doodle>
);

export const GlobeDoodle = ({ className = "" }: { className?: string }) => (
  <Doodle className={className}>
    <circle cx="24" cy="24" r="17" />
    <path d="M12 14c4 1 6 3 5 6s-4 3-3 6 4 3 4 7M30 9c-1 3 1 5 4 5s5 3 3 6-5 2-6 5 2 6 0 9M24 41c0-3 2-4 4-4" />
  </Doodle>
);

export const CurvedArrow = ({ className = "" }: { className?: string }) => (
  <Doodle className={className} vb="0 0 60 40">
    <path d="M54 6C40 6 22 12 12 32" />
    <path d="M10 22l2 10 9-5" />
  </Doodle>
);
