import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Baja hasta el ancla de la URL (/#mapa, /#horarios…) también al venir de otra página.
 * Reintenta mientras la sección no existe y vuelve a ajustar cuando ya han cargado las fotos.
 */
const ScrollToHash = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    let timer: number | undefined;
    const find = () => {
      try {
        return document.querySelector(decodeURIComponent(hash));
      } catch {
        return null;
      }
    };

    const tryScroll = () => {
      const el = find();
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Segundo ajuste por si algo de arriba ha cambiado de alto mientras bajaba
        timer = window.setTimeout(() => find()?.scrollIntoView({ behavior: "smooth", block: "start" }), 700);
      } else if (attempts++ < 30) {
        timer = window.setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToHash;
