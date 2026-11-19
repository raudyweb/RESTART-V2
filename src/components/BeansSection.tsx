import type React from "react";
import cafeImg from "@/assets/v2/cafe-latte.webp";
import { nueva } from "@/assets/v2/nuevas";
import { Brush, Sparks, TornEdge, tornClip } from "@/components/paper/Paper";
import {
  BeansDoodle,
  BeansGroundDoodle,
  ChemexDoodle,
  GlobeDoodle,
  PortafilterDoodle,
} from "@/components/paper/Sketches";
import { usePick } from "@/i18n";

const granoImg = nueva("cafe-grano", cafeImg);

const T = {
  es: {
    alt: "Sacos de café verde de Etiopía, Colombia y Guatemala con una pala llena de café tostado",
    title: ["Venta de café", "en grano"],
    items: ["Para espresso", "Para filtro", "En grano o molido"],
    world: "De los 4 rincones del mundo",
    origins: "Etiopía, Colombia, Uganda, Guatemala, Perú, Costa Rica, Ruanda, México, China y mucho más…",
    ask: "Pregunta en barra por los cafés disponibles.",
  },
  ca: {
    alt: "Sacs de cafè verd d'Etiòpia, Colòmbia i Guatemala amb una pala plena de cafè torrat",
    title: ["Venda de cafè", "en gra"],
    items: ["Per a espresso", "Per a filtre", "En gra o mòlt"],
    world: "Dels 4 racons del món",
    origins: "Etiòpia, Colòmbia, Uganda, Guatemala, Perú, Costa Rica, Ruanda, Mèxic, Xina i molt més…",
    ask: "Pregunta a la barra pels cafès disponibles.",
  },
  en: {
    alt: "Green coffee sacks from Ethiopia, Colombia and Guatemala with a scoop of roasted beans",
    title: ["Coffee beans", "to take home"],
    items: ["For espresso", "For filter", "Whole bean or ground"],
    world: "From all four corners of the world",
    origins: "Ethiopia, Colombia, Uganda, Guatemala, Peru, Costa Rica, Rwanda, Mexico, China and many more…",
    ask: "Ask at the counter for the coffees we have in stock.",
  },
  fr: {
    alt: "Sacs de café vert d'Éthiopie, de Colombie et du Guatemala avec une pelle de café torréfié",
    title: ["Café en grains", "à emporter"],
    items: ["Pour espresso", "Pour filtre", "En grains ou moulu"],
    world: "Des quatre coins du monde",
    origins: "Éthiopie, Colombie, Ouganda, Guatemala, Pérou, Costa Rica, Rwanda, Mexique, Chine et bien plus…",
    ask: "Demandez au comptoir les cafés disponibles.",
  },
};

const ICONS = [
  { Icon: PortafilterDoodle, cls: "h-10 w-16" },
  { Icon: ChemexDoodle, cls: "h-14 w-12" },
  { Icon: BeansGroundDoodle, cls: "h-12 w-14" },
];

const BeansSection = () => {
  const t = usePick()(T);
  return (
    <section id="cafe-en-grano" aria-labelledby="grano-titulo" className="relative scroll-mt-20 bg-paper-light py-20 md:py-28">
      <TornEdge side="top" seed={821} className="text-paper-light" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div data-reveal="" className="rotate-1 drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)] md:order-2">
          <div className="aspect-[9/5] overflow-hidden md:aspect-[4/3.4]" style={tornClip(823, undefined, 1.8, 2)}>
            <img src={granoImg} alt={t.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>

        <div
          data-reveal=""
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="flex flex-col items-center text-center md:order-1"
        >
          <Sparks className="h-10 text-macu">
            <BeansDoodle className="h-9 w-14" />
          </Sparks>
          <h2 id="grano-titulo" className="hand mt-3 text-[2.4rem] leading-[1.05] md:text-[2.2rem] lg:text-[2.8rem]">
            {t.title[0]}{" "}
            <span className="block">
              <Brush>{t.title[1]}</Brush>
            </span>
          </h2>
          <span aria-hidden="true" className="mt-3 block h-[2px] w-36 rounded bg-macu" />

          <ul className="mt-10 grid w-full max-w-md grid-cols-3">
            {t.items.map((item, i) => {
              const { Icon, cls } = ICONS[i];
              return (
                <li
                  key={item}
                  className={`flex flex-col items-center justify-end gap-3 px-2 ${i ? "border-l border-ink/20" : ""}`}
                >
                  <Icon className={cls} />
                  <span className="text-[13.5px] leading-snug text-ink/85">{item}</span>
                </li>
              );
            })}
          </ul>

          <p className="hand mt-10 flex items-center gap-3 text-[1.35rem] normal-case md:text-[1.5rem]">
            <GlobeDoodle className="h-10 w-10 shrink-0 text-macu" />
            <Brush>{t.world}</Brush>
          </p>
          <p className="font-prose mt-5 max-w-md text-[14.5px] leading-[1.8] text-ink/80">{t.origins}</p>
          <p className="mt-4 text-xs text-muted-foreground">{t.ask}</p>
        </div>
      </div>
    </section>
  );
};

export default BeansSection;
