import type React from "react";
import MapEmbed from "@/components/paper/MapEmbed";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import fachadaImg from "@/assets/v2/fachada.webp";
import terrazaImg from "@/assets/v2/terraza-mesa.webp";
import { HandHeart, KeepLast, Scribble, tornClip } from "@/components/paper/Paper";
import OpenNow from "@/components/OpenNow";
import { useCommon, useLang, usePick } from "@/i18n";
import { HOURS, formatDays, formatTime } from "@/lib/hours";

/** Textos de la sección. Las horas están en src/lib/hours.ts (un solo sitio para cambiarlas). */
const T = {
  es: {
    alt: "Fachada amarilla de Re-Start Coffee con los rótulos de Brunch y Bakery",
    terraceAlt: "Mesa de la terraza de Re-Start con un plato de brunch, en la calle peatonal con Macu Bakery al fondo",
    title: "Te esperamos",
    hours: "Horario de invierno",
    closedDays: "Domingo y festivos",
    closed: "Cerrado",
    note: "Los horarios pueden variar en festivos especiales.",
    map: "Mapa de Re-Start Coffee en Vilanova i la Geltrú",
  },
  ca: {
    alt: "Façana groga de Re-Start Coffee amb els rètols de Brunch i Bakery",
    terraceAlt: "Taula de la terrassa de Re-Start amb un plat de brunch, al carrer de vianants amb Macu Bakery al fons",
    title: "T'esperem",
    hours: "Horari d'hivern",
    closedDays: "Diumenge i festius",
    closed: "Tancat",
    note: "Els horaris poden variar en festius especials.",
    map: "Mapa de Re-Start Coffee a Vilanova i la Geltrú",
  },
  en: {
    alt: "Yellow façade of Re-Start Coffee with the Brunch and Bakery signs",
    terraceAlt: "Table on the Re-Start terrace with a brunch plate, on the pedestrian street with Macu Bakery behind",
    title: "See you soon",
    hours: "Winter opening hours",
    closedDays: "Sundays and holidays",
    closed: "Closed",
    note: "Opening hours may change on special holidays.",
    map: "Map of Re-Start Coffee in Vilanova i la Geltrú",
  },
  fr: {
    alt: "Façade jaune de Re-Start Coffee avec les enseignes Brunch et Bakery",
    terraceAlt: "Table de la terrasse de Re-Start avec une assiette de brunch, dans la rue piétonne avec Macu Bakery au fond",
    title: "À très vite",
    hours: "Horaires d'hiver",
    closedDays: "Dimanches et jours fériés",
    closed: "Fermé",
    note: "Les horaires peuvent changer lors de certains jours fériés.",
    map: "Plan de Re-Start Coffee à Vilanova i la Geltrú",
  },
};

const contacts = [
  {
    icon: MapPin,
    label: "Carrer dels Escolapis, 8 · 08800 Vilanova i la Geltrú",
    href: "https://maps.app.goo.gl/BL8ZWwjTquyxNPD16",
    external: true,
  },
  { icon: Phone, label: "+34 621 30 67 20", href: "tel:+34621306720" },
  { icon: Mail, label: "rscafevng@gmail.com", href: "mailto:rscafevng@gmail.com" },
  { icon: Instagram, label: "@rscafevng", href: "https://instagram.com/rscafevng", external: true },
];

const VisitSection = () => {
  const t = usePick()(T);
  const c = useCommon();
  const lang = useLang();
  return (
  <section id="visita" className="scroll-mt-20 bg-paper pb-24 pt-24 md:pt-28">
    <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-10">
      {/* Terraza como foto principal y la fachada encima, pequeña, para reconocer el local */}
      <div data-reveal="" className="relative pb-10 pl-6 md:pb-14 md:pl-10">
        <div className="rotate-[1.5deg] drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
          <div className="aspect-[4/5] overflow-hidden" style={tornClip(113, undefined, 1.8, 2.5)}>
            <img src={terrazaImg} alt={t.terraceAlt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-[42%] -rotate-3 drop-shadow-[0_10px_16px_rgba(40,30,20,0.3)]">
          <div className="aspect-[4/5] overflow-hidden" style={tornClip(131, undefined, 2, 3)}>
            <img src={fachadaImg} alt={t.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div data-reveal="" style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="flex flex-col justify-center">
        <h2 className="hand text-[2.4rem] leading-none md:text-[2.8rem]">
          <KeepLast text={t.title}>
            {" "}
            <HandHeart className="h-[0.65em] w-[0.7em] -translate-y-2" />
          </KeepLast>
        </h2>
        <Scribble className="mt-1 w-36 text-ink" />

        <div id="horarios" className="mt-10 scroll-mt-28">
          <h3 className="label-type text-sm font-bold">{t.hours}</h3>
          <OpenNow className="mt-4" />
          <dl className="mt-4">
            {HOURS.map((h) => (
              <div
                key={h.days.join()}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 py-3 text-[15px]"
              >
                <dt>{formatDays(h.days, lang)}</dt>
                <dd className="font-bold">
                  {formatTime(h.open, lang)} – {formatTime(h.close, lang)}
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 py-3 text-[15px] text-ink/50">
              <dt>{t.closedDays}</dt>
              <dd className="font-bold">{t.closed}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-muted-foreground">{t.note}</p>
        </div>

        <ul className="mt-8 space-y-1">
          {contacts.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-start gap-3 py-2 text-[15px]"
              >
                <Icon size={18} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span className="underline-offset-4 group-hover:underline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://maps.app.goo.gl/BL8ZWwjTquyxNPD16"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-paper mt-10 w-fit bg-ink text-paper-light"
        >
          {c.directions} <MapPin size={16} />
        </a>
      </div>
    </div>

    <div id="mapa" className="mx-auto mt-16 max-w-7xl scroll-mt-24 px-5 md:px-10">
      <div className="h-72 overflow-hidden md:h-96" style={tornClip(127, undefined, 1.2, 1.5)}>
        <MapEmbed src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.908346105353!2d1.72313757586994!3d41.22376777132122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387915fb5626f%3A0xd7125a13c5d4ba64!2sRestart%20Coffee!5e0!3m2!1ses!2ses!4v1781360977596!5m2!1ses!2ses" title={t.map} />
      </div>
    </div>
  </section>
  );
};

export default VisitSection;
