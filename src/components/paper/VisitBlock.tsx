import type { LucideIcon } from "lucide-react";
import { MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { HandHeart, Scribble, tornClip } from "@/components/paper/Paper";

export type Contact = { icon: LucideIcon; label: string; href: string; external?: boolean };
export type Hours = { days: string; hours: string; closed?: boolean };

/** Bloque "Visítanos": foto rasgada, horario, contacto, botón y mapa. */
const VisitBlock = ({
  id,
  title,
  intro,
  img,
  imgAlt,
  hours,
  hoursNote,
  contacts,
  mapsUrl,
  mapEmbed,
  mapTitle,
  buttonClass = "bg-ink text-paper-light",
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  img: string;
  imgAlt: string;
  hours?: Hours[];
  hoursNote?: string;
  contacts: Contact[];
  mapsUrl: string;
  mapEmbed: string;
  mapTitle: string;
  buttonClass?: string;
}) => (
  <section id={id} className="scroll-mt-20 bg-paper pb-24 pt-20 md:pt-24">
    <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-10">
      <div className="rotate-[1.5deg] drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
        <div className="aspect-[4/5] overflow-hidden" style={tornClip(413, undefined, 1.8, 2.5)}>
          <img src={img} alt={imgAlt} loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="hand text-[2.4rem] leading-none md:text-[2.8rem]">
          {title} <HandHeart className="h-[0.65em] w-[0.7em] -translate-y-2" />
        </h2>
        <Scribble className="mt-1 w-36 text-ink" />
        {intro && <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-ink/85">{intro}</p>}

        {hours && (
          <div className="mt-10">
            <h3 className="label-type text-sm font-bold">Horario</h3>
            <dl className="mt-4">
              {hours.map((s) => (
                <div
                  key={s.days}
                  className={`flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 py-3 text-[15px] ${
                    s.closed ? "text-ink/50" : ""
                  }`}
                >
                  <dt>{s.days}</dt>
                  <dd className="text-right font-bold">{s.hours}</dd>
                </div>
              ))}
            </dl>
            {hoursNote && <p className="mt-3 text-xs text-muted-foreground">{hoursNote}</p>}
          </div>
        )}

        <ul className="mt-10 space-y-4">
          {contacts.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-start gap-3 text-[15px]"
              >
                <Icon size={18} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span className="underline-offset-4 group-hover:underline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={`btn-paper mt-10 w-fit ${buttonClass}`}>
          Cómo llegar <MapPin size={16} />
        </a>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-5 md:px-10">
      <div className="h-72 overflow-hidden md:h-96" style={tornClip(427, undefined, 1.2, 1.5)}>
        <iframe
          src={mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "sepia(.25) saturate(.85)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={mapTitle}
        />
      </div>
    </div>
  </section>
);

export default VisitBlock;
