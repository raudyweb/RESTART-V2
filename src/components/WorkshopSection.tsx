import type React from "react";
import { Clock, Phone, Users } from "lucide-react";
import latteImg from "@/assets/v2/nosotros/latte-art.webp";
import { nueva } from "@/assets/v2/nuevas";
import { Brush, HandHeart, Sparks, tornClip } from "@/components/paper/Paper";
import {
  CupDoodle,
  CurvedArrow,
  EspressoMachineDoodle,
  LatteDoodle,
  MilkJugDoodle,
} from "@/components/paper/Sketches";
import { usePick } from "@/i18n";

const tallerImg = nueva("taller-barista", latteImg);

const T = {
  es: {
    alt: "Barista de Re-Start vertiendo leche y dibujando una hoja de latte art",
    title: "Taller barista",
    text: "Disfruta del mejor taller barista para que puedas iniciarte en este fabuloso mundo y sorprender a tus invitados con técnicas aprendidas durante el taller.",
    duration: ["Duración", "1 h 30 min"],
    minimum: ["Mínimo", "2 personas"],
    items: [
      "Pasa detrás de la barra y ponte en la piel de un barista.",
      "Realizarás cafés clásicos como un auténtico profesional.",
      "Aprende a calentar y texturizar la leche para crear la espuma perfecta.",
    ],
    share: "Una experiencia diferente para compartir",
    gift: "Un súper regalo para disfrutar con quien quieras",
    cta: "Reserva tu taller",
  },
  ca: {
    alt: "Barista de Re-Start abocant llet i dibuixant una fulla de latte art",
    title: "Taller barista",
    text: "Gaudeix del millor taller barista per iniciar-te en aquest món fascinant i sorprendre els teus convidats amb les tècniques que hauràs après.",
    duration: ["Durada", "1 h 30 min"],
    minimum: ["Mínim", "2 persones"],
    items: [
      "Passa darrere la barra i posa't a la pell d'un barista.",
      "Prepararàs cafès clàssics com un autèntic professional.",
      "Aprèn a escalfar i texturitzar la llet per crear l'escuma perfecta.",
    ],
    share: "Una experiència diferent per compartir",
    gift: "Un súper regal per gaudir amb qui vulguis",
    cta: "Reserva el teu taller",
  },
  en: {
    alt: "Re-Start barista pouring milk to draw a latte art leaf",
    title: "Barista workshop",
    text: "Enjoy the best barista workshop to get started in this fascinating world and impress your guests with the techniques you'll learn.",
    duration: ["Duration", "1 h 30 min"],
    minimum: ["Minimum", "2 people"],
    items: [
      "Step behind the counter and become a barista for the day.",
      "Make classic coffees like a true professional.",
      "Learn to steam and texture milk to create the perfect foam.",
    ],
    share: "A different experience to share",
    gift: "A great gift to enjoy with anyone you like",
    cta: "Book your workshop",
  },
};

const ICONS = [EspressoMachineDoodle, LatteDoodle, MilkJugDoodle];

const WorkshopSection = () => {
  const t = usePick()(T);
  return (
    <section id="taller" aria-labelledby="taller-titulo" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div data-reveal="" className="-rotate-1 drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
          <div className="aspect-[7/4] overflow-hidden md:aspect-[4/3.4]" style={tornClip(811, undefined, 1.8, 2)}>
            <img src={tallerImg} alt={t.alt} loading="lazy" className="h-full w-full object-cover object-[50%_45%]" />
          </div>
        </div>

        <div
          data-reveal=""
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="flex flex-col items-center text-center"
        >
          <Sparks className="h-10 text-macu">
            <CupDoodle className="h-10 w-10" />
          </Sparks>
          <h2 id="taller-titulo" className="hand mt-3 text-[2.6rem] leading-none md:text-[3rem]">
            {t.title}
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[2px] w-40 rounded bg-macu" />
          <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-ink/85">{t.text}</p>

          {/* Duración y mínimo */}
          <dl className="mt-8 flex w-full max-w-md items-stretch justify-center">
            {[
              { icon: Clock, v: t.duration },
              { icon: Users, v: t.minimum },
            ].map(({ icon: Icon, v }, i) => (
              <div
                key={v[0]}
                className={`flex flex-1 items-center justify-center gap-3 px-3 ${i ? "border-l border-ink/25" : ""}`}
              >
                <Icon size={30} strokeWidth={1.5} className="shrink-0 text-macu" aria-hidden="true" />
                <div className="text-left">
                  <dt className="label-type text-[12px] font-bold">{v[0]}:</dt>
                  <dd className="label-type text-[12px] font-bold">{v[1]}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Qué harás */}
      <ul className="mx-auto mt-14 grid max-w-5xl gap-10 px-5 sm:grid-cols-3 sm:gap-0 md:px-10">
        {t.items.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <li
              key={item}
              data-reveal=""
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              className={`flex flex-col items-center px-6 text-center ${i ? "sm:border-l sm:border-ink/20" : ""}`}
            >
              <Sparks className="h-14">
                <Icon className="h-14 w-14" />
              </Sparks>
              <p className="mt-4 max-w-[15rem] text-[14px] leading-[1.7] text-ink/85">{item}</p>
            </li>
          );
        })}
      </ul>

      {/* Notas manuscritas y reserva */}
      <div className="mx-auto mt-14 flex max-w-5xl flex-col items-center gap-8 px-5 md:flex-row md:justify-between md:px-10">
        <p className="hand -rotate-3 text-center text-[1.55rem] normal-case leading-tight md:text-left md:text-[1.8rem]">
          <Brush>
            {t.share} <HandHeart className="h-[0.8em] w-[0.85em] -translate-y-1" />
          </Brush>
        </p>
        <div className="flex items-end gap-2">
          <CurvedArrow className="hidden h-10 w-14 text-ink/70 md:block" />
          <p className="hand max-w-[15rem] rotate-[-6deg] text-center text-[1.25rem] normal-case leading-snug">
            {t.gift} <HandHeart className="h-[0.8em] w-[0.85em] -translate-y-0.5" />
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-center px-5">
        <a href="tel:+34621306720" className="btn-paper bg-macu text-paper-light">
          <Phone size={16} /> {t.cta}
        </a>
      </div>
    </section>
  );
};

export default WorkshopSection;
