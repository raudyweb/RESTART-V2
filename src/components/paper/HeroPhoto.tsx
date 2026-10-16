import type { CSSProperties } from "react";
import { tornPolygon } from "@/components/paper/Paper";

/**
 * Foto de cabecera.
 * - Móvil y tablet: a sangre detrás del texto (la foto vertical llena la pantalla sin ampliarse).
 * - Escritorio: ocupa la mitad derecha con el borde izquierdo rasgado, así la foto se muestra
 *   a su tamaño real o más pequeña y no se ve pixelada en pantallas grandes.
 */
const HeroPhoto = ({
  src,
  alt,
  position = "50% 50%",
  desktopPosition,
  seed = 17,
}: {
  src: string;
  alt: string;
  position?: string;
  desktopPosition?: string;
  seed?: number;
}) => (
  <>
    <div
      className="absolute inset-0 -z-10 lg:left-auto lg:w-[54%] lg:[clip-path:var(--torn)]"
      style={{ "--torn": tornPolygon(seed, { left: true }, 4, 1.6) } as CSSProperties}
    >
      <img
        src={src}
        alt={alt}
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover [object-position:var(--pos)] lg:[object-position:var(--pos-lg)]"
        style={{ "--pos": position, "--pos-lg": desktopPosition ?? position } as CSSProperties}
      />
      {/* Escritorio: solo un toque de sombra junto al rasgado */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-black/25 to-transparent to-30% lg:block" />
    </div>
    {/* Móvil: oscurecer para que el texto se lea sobre la foto */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-transparent lg:hidden" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-black/30 lg:hidden" />
  </>
);

export default HeroPhoto;
