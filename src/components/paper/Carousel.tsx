import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePick } from "@/i18n";

const T = {
  es: { prev: "Anterior", next: "Siguiente", goTo: "Ir a" },
  ca: { prev: "Anterior", next: "Següent", goTo: "Anar a" },
  en: { prev: "Previous", next: "Next", goTo: "Go to" },
  fr: { prev: "Précédent", next: "Suivant", goTo: "Aller à" },
};

/**
 * Carrusel con scroll-snap: la lista se desliza con el dedo y este hook dice qué elemento
 * está centrado y permite ir a uno concreto (para los puntos y las flechas).
 * La lista (ul) debe ser `relative` para que las posiciones se midan respecto a ella.
 *
 * autoHeight: mientras funciona como carrusel (móvil/tablet), la altura se ajusta a la tarjeta
 * que está a la vista, así una tarjeta corta no deja un hueco vacío debajo. El ajuste se hace
 * al terminar de deslizar (no durante el gesto), para que el deslizamiento sea fluido.
 */
export const useSnapCarousel = <T extends HTMLElement = HTMLUListElement>({
  autoHeight = false,
}: { autoHeight?: boolean } = {}) => {
  const ref = useRef<T>(null);
  const [index, setIndex] = useState(0);
  // Tarjeta en la que el carrusel se ha detenido (para la altura: nunca cambia a mitad del gesto)
  const [settled, setSettled] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let idle = 0;
    let current = 0;
    const measure = () => {
      frame = 0;
      const items = Array.from(el.children) as HTMLElement[];
      setCount(items.length);
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      current = best;
      setIndex(best);
    };
    // Fin del deslizamiento: "scrollend" donde existe y, si no, 150 ms sin scroll
    const settle = () => {
      window.clearTimeout(idle);
      setSettled(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
      window.clearTimeout(idle);
      idle = window.setTimeout(settle, 150);
    };
    measure();
    settle();
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", settle);
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(idle);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", settle);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Altura = la de la tarjeta visible (más el relleno del carrusel). En escritorio (sin scroll) no se toca.
  useEffect(() => {
    const el = ref.current;
    if (!autoHeight || !el) return;
    const fit = () => {
      const isCarousel = getComputedStyle(el).overflowX !== "visible";
      const it = el.children[settled] as HTMLElement | undefined;
      if (!isCarousel || !it) {
        el.style.height = "";
        return;
      }
      const cs = getComputedStyle(el);
      el.style.height = `${it.offsetHeight + parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom)}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    Array.from(el.children).forEach((c) => ro.observe(c));
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [autoHeight, settled]);

  const go = useCallback((i: number) => {
    const el = ref.current;
    const it = el?.children[i] as HTMLElement | undefined;
    if (!el || !it) return;
    el.scrollTo({ left: it.offsetLeft - (el.clientWidth - it.offsetWidth) / 2, behavior: "smooth" });
  }, []);

  return { ref, index, count, go };
};

/** Flechas y puntos de un carrusel. `label` nombra los elementos para lectores de pantalla ("foto", "reseña"…). */
export const CarouselNav = ({
  index,
  count,
  go,
  label,
  className = "",
}: {
  index: number;
  count: number;
  go: (i: number) => void;
  label: string;
  className?: string;
}) => {
  const t = usePick()(T);
  if (count < 2) return null;
  const arrow =
    "grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink transition hover:bg-ink/5 disabled:opacity-30";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <button type="button" className={arrow} onClick={() => go(index - 1)} disabled={index === 0} aria-label={t.prev}>
        <ChevronLeft size={18} />
      </button>
      <div className="flex items-center">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`${t.goTo} ${label} ${i + 1}`}
            aria-current={i === index}
            className="grid h-8 w-6 place-items-center"
          >
            <span
              className={`block h-2 rounded-full transition-all ${i === index ? "w-5 bg-ink" : "w-2 bg-ink/25"}`}
            />
          </button>
        ))}
      </div>
      <button
        type="button"
        className={arrow}
        onClick={() => go(index + 1)}
        disabled={index === count - 1}
        aria-label={t.next}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
