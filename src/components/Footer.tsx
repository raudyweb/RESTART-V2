import { Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-invert.webp";
import { TornEdge } from "@/components/paper/Paper";
import { href, useCommon, useLang, usePick } from "@/i18n";

const T = {
  es: { nav: "Pie de página", phone: "Teléfono" },
  ca: { nav: "Peu de pàgina", phone: "Telèfon" },
  en: { nav: "Footer", phone: "Phone" },
  fr: { nav: "Pied de page", phone: "Téléphone" },
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
          <img src={logoImg} alt="" className="h-14 w-14 object-contain" loading="lazy" />
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

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-paper-light/15 pt-8 text-xs text-paper-light/50 md:flex-row">
        <p>Carrer dels Escolapis, 8 · 08800 Vilanova i la Geltrú</p>
        <p>
          Web by <span className="text-paper-light/80">Raudy</span>
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
