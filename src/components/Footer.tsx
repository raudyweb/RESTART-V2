import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-invert.webp";
import { TornEdge } from "@/components/paper/Paper";
import MobileBar from "@/components/MobileBar";
import { HOURS, formatDaysShort, formatTime } from "@/lib/hours";
import { href, useCommon, useLang, usePick } from "@/i18n";

const T = {
  es: { nav: "Pie de página", phone: "Teléfono", hours: "Horario", closed: "D y festivos: cerrado", rights: "Todos los derechos reservados" },
  ca: { nav: "Peu de pàgina", phone: "Telèfon", hours: "Horari", closed: "Dg i festius: tancat", rights: "Tots els drets reservats" },
  en: { nav: "Footer", phone: "Phone", hours: "Opening hours", closed: "Sun & holidays: closed", rights: "All rights reserved" },
  fr: { nav: "Pied de page", phone: "Téléphone", hours: "Horaires", closed: "Dim. et jours fériés : fermé", rights: "Tous droits réservés" },
};

const Footer = () => {
  const t = usePick()(T);
  const c = useCommon();
  const lang = useLang();
  return (
  <footer className="relative bg-ink text-paper-light">
    <TornEdge side="top" seed={131} className="text-ink" />
    <div className="mx-auto max-w-7xl px-5 py-14 md:px-10">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex items-center gap-4">
          <img src={logoImg} alt="Re-Start Coffee" className="h-14 w-14 object-contain" loading="lazy" />
          <div>
            <p className="hand text-2xl">Re-Start Coffee</p>
            <p lang="en" className="label-type mt-1 text-[11px] text-paper-light/60">
              Brunch · Coffee · Bakery
            </p>
          </div>
        </div>

        <nav aria-label={t.nav} className="flex flex-wrap justify-center gap-x-6 text-sm">
          <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="inline-block py-2 hover:underline">
            {c.menu}
          </a>
          <Link to={href("about", lang)} className="inline-block py-2 hover:underline">
            {c.about}
          </Link>
          <Link to={href("truck", lang)} className="inline-block py-2 hover:underline">
            Food Truck
          </Link>
          <Link to={href("macu", lang)} className="inline-block py-2 hover:underline">
            Macu Bakery
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="-m-2 p-2 text-paper-light/70 hover:text-paper-light">
            <Instagram size={20} />
          </a>
          <a href="mailto:rscafevng@gmail.com" aria-label="Email" className="-m-2 p-2 text-paper-light/70 hover:text-paper-light">
            <Mail size={20} />
          </a>
          <a href="tel:+34621306720" aria-label={t.phone} className="-m-2 p-2 text-paper-light/70 hover:text-paper-light">
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Contacto y horario resumido (sale de src/lib/hours.ts) */}
      <div className="mt-10 grid gap-6 border-t border-paper-light/15 pt-8 text-center text-sm text-paper-light/80 md:grid-cols-3 md:text-left">
        <div>
          <p className="label-type text-[11px] text-paper-light/50">{t.phone}</p>
          <a href="tel:+34621306720" className="mt-1 inline-block py-1 hover:underline">
            +34 621 30 67 20
          </a>
          <p className="label-type mt-3 text-[11px] text-paper-light/50">Instagram</p>
          <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block py-1 hover:underline">
            @rscafevng
          </a>
        </div>
        <div>
          <p className="label-type text-[11px] text-paper-light/50">{t.hours}</p>
          <ul className="mt-1 space-y-0.5">
            {HOURS.map((h) => (
              <li key={h.days.join()}>
                {formatDaysShort(h.days, lang)} {formatTime(h.open, lang)}–{formatTime(h.close, lang)}
              </li>
            ))}
            <li className="text-paper-light/50">{t.closed}</li>
          </ul>
        </div>
        <div>
          <p className="label-type text-[11px] text-paper-light/50">Re-Start Coffee</p>
          <p className="mt-1">Carrer dels Escolapis, 8</p>
          <p>08800 Vilanova i la Geltrú</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-paper-light/15 pt-6 text-xs text-paper-light/50 md:flex-row">
        <p>
          © {new Date().getFullYear()} Re-Start Coffee · {t.rights}
        </p>
        <p>
          Web by <span className="text-paper-light/80">Raudy</span>
        </p>
      </div>
    </div>
    <MobileBar />
  </footer>
  );
};

export default Footer;
