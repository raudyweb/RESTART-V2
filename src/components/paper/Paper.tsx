import type React from "react";
import type { CSSProperties } from "react";

/* ---------- Aleatorio con semilla: el mismo "rasgado" en cada render ---------- */
const rng = (seed: number) => {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

/**
 * clip-path con bordes de papel rasgado para fotos y tarjetas.
 * depth = cuánto entra el rasgado (en %), step = cada cuánto hay un "diente".
 */
export const tornClip = (
  seed: number,
  edges: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
  } = {
    top: true,
    right: true,
    bottom: true,
    left: true,
  },
  depth = 2.2,
  step = 2.5,
): CSSProperties => {
  const r = rng(seed);
  // Redondeado a 1 decimal: el mismo efecto con muchos menos caracteres en el HTML
  const j = (on?: boolean) => (on ? Math.round(r() * depth * 10) / 10 : 0);
  const pts: string[] = [];
  for (let x = 0; x <= 100; x += step)
    pts.push(`${+x.toFixed(1)}% ${j(edges.top)}%`);
  for (let y = step; y <= 100; y += step)
    pts.push(`${+(100 - j(edges.right)).toFixed(1)}% ${+y.toFixed(1)}%`);
  for (let x = 100 - step; x >= 0; x -= step)
    pts.push(`${+x.toFixed(1)}% ${+(100 - j(edges.bottom)).toFixed(1)}%`);
  for (let y = 100 - step; y > 0; y -= step)
    pts.push(`${j(edges.left)}% ${+y.toFixed(1)}%`);
  const poly = `polygon(${pts.join(",")})`;
  return { clipPath: poly };
};

/** Solo el polígono, para usarlo desde una variable CSS (p. ej. únicamente en escritorio). */
export const tornPolygon = (...args: Parameters<typeof tornClip>) =>
  tornClip(...args).clipPath as string;

/**
 * Borde rasgado para separar secciones. Se coloca dentro de una sección
 * con position:relative y toma su color con text-*.
 */
export const TornEdge = ({
  side,
  seed = 7,
  className = "",
}: {
  side: "top" | "bottom";
  seed?: number;
  className?: string;
}) => {
  const r = rng(seed);
  const W = 1200;
  const H = 28;
  let d = `M0 ${H}`;
  let y = 14;
  for (let x = 0; x <= W; x += 9 + r() * 14) {
    y = Math.min(H - 3, Math.max(3, y + (r() - 0.5) * 9));
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ` L${W} ${y.toFixed(1)} L${W} ${H} Z`;

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute left-0 z-10 h-4 w-full fill-current md:h-6 ${
        side === "top"
          ? "top-px -translate-y-full"
          : "bottom-px translate-y-full rotate-180"
      } ${className}`}
    >
      <path d={d} />
    </svg>
  );
};

/* Subrayado a mano alzada */
export const Scribble = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 200 14"
    className={`block ${className}`}
    fill="none"
  >
    <path
      d="M3 9.5C40 6 92 4.2 140 4.6c20 .2 38 1.1 56 2.4"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
  </svg>
);

/* Corazón dibujado */
export const HandHeart = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 40 36"
    className={`inline-block ${className}`}
    fill="none"
  >
    <path
      d="M20.5 32.5C13 26.4 3.6 19.6 3.4 11.4 3.2 5.8 7.6 2.6 12 3c3.9.3 6.6 3.2 8.4 7 1.6-4 4.6-7.4 9-7.2 4.6.2 7.6 4.3 7.2 9-.6 8.2-9.7 14.8-16.1 20.7Z"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* Trazo de pincel detrás de una palabra (como "Gluten free" o "en grano").
   underline: el trazo va en la mitad inferior, como un subrayado, para que no parezca tachado. */
export const Brush = ({
  children,
  className = "",
  underline = false,
}: {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}) => (
  <span className={`relative isolate inline-block px-[0.35em] ${className}`}>
    <svg
      aria-hidden="true"
      viewBox="0 0 300 60"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 -z-10 w-full text-sage-light ${
        underline ? "bottom-[-8%] h-[48%]" : "top-[12%] h-[86%]"
      }`}
    >
      <path
        d="M6 18c40-9 98-12 160-11 48 1 86 3 128 8 4 1 5 6 1 8-6 3-3 6 1 9 4 4 1 9-5 10-46 6-104 8-162 7-42-1-82-3-122-8-5-1-6-6-2-8 5-3 3-7-1-10-4-3-3-4 2-5Z"
        fill="currentColor"
      />
    </svg>
    <span className="relative">{children}</span>
  </span>
);

/* Rayitas de "brillo" a los lados de un icono dibujado */
export const Sparks = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`relative inline-flex items-center justify-center px-6 ${className}`}
  >
    <svg
      aria-hidden="true"
      viewBox="0 0 120 40"
      className="absolute inset-0 h-full w-full"
      fill="none"
    >
      <path
        d="M8 12l9 4M5 22h10M8 31l9-4M112 12l-9 4M115 22h-10M112 31l-9-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
    {children}
  </span>
);

/** Mantiene la última palabra pegada a lo que va detrás (p. ej. un corazón) para que no salte sola de línea. */
export const KeepLast = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const i = text.lastIndexOf(" ");
  return (
    <>
      {text.slice(0, i + 1)}
      <span className="whitespace-nowrap">
        {text.slice(i + 1)}
        {children}
      </span>
    </>
  );
};
