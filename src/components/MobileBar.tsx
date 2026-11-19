import { BookOpen, MapPin, Phone } from "lucide-react";
import { useCommon } from "@/i18n";
import { BUSINESS } from "@/lib/site";

/**
 * Barra fija abajo solo en móvil: Llamar · Cómo llegar · Carta.
 * Va dentro del pie (que está en todas las páginas) y deja un hueco de su misma altura
 * para no tapar el final de la página.
 */
const MobileBar = () => {
  const c = useCommon();
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[11px] label-type text-paper-light active:bg-white/10";
  return (
    <>
      <div aria-hidden="true" className="h-[calc(60px+env(safe-area-inset-bottom))] bg-ink md:hidden" />
      <nav
        aria-label={c.callUs}
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      >
        <a href="tel:+34621306720" className={item}>
          <Phone size={18} aria-hidden="true" />
          {c.call}
        </a>
        <a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer" className={`${item} border-x border-white/10`}>
          <MapPin size={18} aria-hidden="true" />
          {c.directions}
        </a>
        <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className={item}>
          <BookOpen size={18} aria-hidden="true" />
          {c.menu}
        </a>
      </nav>
    </>
  );
};

export default MobileBar;
