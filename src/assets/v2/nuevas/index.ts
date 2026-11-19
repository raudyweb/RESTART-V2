/**
 * Fotos nuevas de noviembre 2026. Se cargan "si existen": mientras una foto no esté en esta carpeta,
 * la web usa la de reserva y la compilación no falla. En cuanto se sube la foto, aparece sola.
 */
const files = import.meta.glob<string>("./*.webp", {
  eager: true,
  import: "default",
});

export const nueva = <F extends string | null>(
  name: string,
  fallback: F,
): string | F => files[`./${name}.webp`] ?? fallback;
