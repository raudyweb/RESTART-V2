import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { href, useLang, usePick } from "@/i18n";

const T = {
  es: {
    show: "Ver mapa",
    note: "El mapa lo carga Google Maps, que puede usar cookies propias.",
    more: "Más información",
  },
  ca: {
    show: "Veure el mapa",
    note: "El mapa el carrega Google Maps, que pot utilitzar galetes pròpies.",
    more: "Més informació",
  },
  en: {
    show: "Show map",
    note: "The map is loaded by Google Maps, which may use its own cookies.",
    more: "More information",
  },
  fr: {
    show: "Afficher la carte",
    note: "La carte est chargée par Google Maps, qui peut utiliser ses propres cookies.",
    more: "En savoir plus",
  },
};

/**
 * Mapa de Google que no se carga hasta que la persona pulsa "Ver mapa",
 * así Google no pone cookies sin consentimiento.
 */
const MapEmbed = ({ src, title }: { src: string; title: string }) => {
  const t = usePick()(T);
  const lang = useLang();
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "sepia(.25) saturate(.85)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-paper-light px-6 text-center">
      <MapPin size={34} strokeWidth={1.25} aria-hidden="true" />
      <button type="button" onClick={() => setShow(true)} className="btn-paper bg-ink text-paper-light">
        {t.show}
      </button>
      <p className="max-w-sm text-xs text-ink/70">
        {t.note}{" "}
        <Link to={href("cookies", lang)} className="underline underline-offset-2">
          {t.more}
        </Link>
      </p>
    </div>
  );
};

export default MapEmbed;
