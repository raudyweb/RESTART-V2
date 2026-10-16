import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

/**
 * - Fundido suave al cambiar de página (no en la primera carga, para no retrasar nada).
 * - Activa las apariciones al hacer scroll de los elementos con [data-reveal].
 */
const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const first = useRef(true);
  const navigated = !first.current;

  useEffect(() => {
    first.current = false;
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"));
    const show = (el: Element) => el.classList.add("is-visible");
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          // También si ya ha quedado por encima (scroll rápido o salto a un ancla)
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            show(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div key={pathname} className={navigated ? "animate-page-in" : undefined}>
      {children}
    </div>
  );
};

export default PageTransition;
