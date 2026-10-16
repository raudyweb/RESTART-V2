/* Ilustraciones de línea en tinta (palmera y paseo marítimo) */

export const PalmSketch = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 160 300" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
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
  <svg aria-hidden="true" viewBox="0 0 600 120" preserveAspectRatio="xMidYMax slice" className={className} fill="none" stroke="currentColor" strokeLinecap="round">
    {/* mástiles del puerto */}
    {[30, 48, 64, 82, 101, 122, 140].map((x, i) => (
      <g key={x}>
        <path d={`M${x} ${88}V${18 + (i % 3) * 8}`} strokeWidth="1" />
        <path d={`M${x} ${24 + (i % 3) * 8}L${x + 14} ${80}`} strokeWidth=".7" opacity=".7" />
      </g>
    ))}
    {/* palmeras pequeñas */}
    {[440, 470, 505, 545].map((x, i) => (
      <g key={x} strokeWidth="1.1">
        <path d={`M${x} 96c1-14 2-28 5-${40 - i * 3}`} />
        <path d={`M${x + 5} ${56 + i * 3}c-8-5-16-5-22 1M${x + 5} ${56 + i * 3}c7-6 15-6 22 0M${x + 5} ${56 + i * 3}c-3-8-1-14 4-18M${x + 5} ${56 + i * 3}c-10 1-14 8-16 14M${x + 5} ${56 + i * 3}c9 1 13 7 15 13`} />
      </g>
    ))}
    {/* montaña lejana y línea de costa */}
    <path d="M0 96c80-6 170-8 260-8s200 2 340 6" strokeWidth="1.6" />
    {/* olas */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path key={i} d={`M${20 + i * 70} 108c8-4 16-4 24 0`} strokeWidth="1" opacity=".7" />
    ))}
    {/* rocas */}
    <path d="M470 116c6-10 18-14 28-10 8-6 20-4 26 4 10-4 22 0 26 8" strokeWidth="1.3" />
  </svg>
);
