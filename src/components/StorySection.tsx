import type React from "react";
import { ArrowRight } from "lucide-react";
import benedictImg from "@/assets/v2/benedict-mesa.webp";
import { nueva } from "@/assets/v2/nuevas";

const brunchImg = nueva("benedict-carta", benedictImg);
import { HandHeart, tornClip } from "@/components/paper/Paper";
import { PalmSketch, SeafrontSketch } from "@/components/paper/Sketches";
import { usePick } from "@/i18n";

const T = {
  es: {
    alt: "Huevos benedict con bacon, aguacate y ensalada en la mesa, junto a la carta",
    title: "Café, brunch y momentos que saben mejor en buena compañía",
    text: "Producto local, ingredientes de calidad y un espacio acogedor para desconectar en Vilanova. Ven a desayunar, hacer brunch con calma o simplemente a tomarte un momento.",
    cta: "Conoce nuestro espacio",
  },
  ca: {
    alt: "Ous Benedict amb bacó, alvocat i amanida a la taula, al costat de la carta",
    title: "Cafè, brunch i moments que tenen més gust en bona companyia",
    text: "Producte local, ingredients de qualitat i un espai acollidor per desconnectar a Vilanova. Vine a esmorzar, a fer un brunch amb calma o simplement a regalar-te un moment.",
    cta: "Coneix el nostre espai",
  },
  en: {
    alt: "Eggs Benedict with bacon, avocado and salad on the table, next to the menu",
    title: "Coffee, brunch and moments that taste better in good company",
    text: "Local produce, quality ingredients and a cosy space to unwind in Vilanova. Come for breakfast, a slow brunch or simply to take a moment for yourself.",
    cta: "Discover our space",
  },
};

const StorySection = () => {
  const t = usePick()(T);
  return (
  <section className="relative overflow-hidden bg-paper pb-8 pt-16 md:pt-20">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-0 md:px-10">
      {/* Foto rasgada */}
      <div data-reveal="" className="relative z-10 -rotate-[1.5deg] drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)] md:-mr-10">
        <div className="aspect-[5/4] overflow-hidden" style={tornClip(59, undefined, 1.8, 2)}>
          <img
            src={brunchImg}
            alt={t.alt}
            loading="lazy"
            className="h-full w-full object-cover object-[50%_58%]"
          />
        </div>
      </div>

      {/* Panel verde */}
      <div data-reveal="" style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="relative">
        <div
          className="relative bg-sage-light px-7 pb-14 pt-12 md:pl-20 md:pr-28"
          style={tornClip(61, undefined, 1.6, 2)}
        >
          <h2 className="label-type max-w-sm text-base font-bold leading-relaxed md:text-lg">
            {t.title}
          </h2>
          <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />
          <p className="mt-6 max-w-sm text-[15px] leading-[1.9] text-ink/85">
            {t.text}
          </p>
          <a href="#espacio" className="btn-paper mt-8">
            {t.cta} <ArrowRight size={16} />
          </a>
        </div>
        <PalmSketch className="pointer-events-none absolute -right-4 -top-10 hidden h-64 text-ink/70 md:block lg:-right-10 lg:h-80" />
      </div>
    </div>

    {/* Vilanova */}
    <div className="relative mx-auto mt-8 max-w-7xl px-5 md:px-10">
      <p className="hand relative z-10 ml-[8%] -rotate-[8deg] text-[1.9rem] leading-[0.95] md:ml-[48%] md:text-[2.2rem]">
        Vilanova
        <br />
        good vibes <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
      </p>
      <SeafrontSketch className="-mt-14 h-28 w-full text-ink/60 md:-mt-16 md:h-32" />
    </div>
  </section>
  );
};

export default StorySection;
