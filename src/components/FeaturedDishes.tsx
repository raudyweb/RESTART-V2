import type React from "react";
import { Scribble, tornClip } from "@/components/paper/Paper";
import { FEATURED_DISHES } from "@/config/featured-dishes";
import { useLang, usePick } from "@/i18n";

const T = {
  es: { title: "Platos estrella" },
  ca: { title: "Plats estrella" },
  en: { title: "Our favourites" },
  fr: { title: "Nos incontournables" },
};

/** Tarjetas de platos (foto, nombre y precio) a partir de src/config/featured-dishes.ts. Sin platos, no se muestra. */
const FeaturedDishes = () => {
  const t = usePick()(T);
  const lang = useLang();
  if (FEATURED_DISHES.length === 0) return null;

  return (
    <section aria-labelledby="platos-titulo" className="bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 id="platos-titulo" className="hand text-[2.2rem] md:text-[2.6rem]">
            {t.title}
          </h2>
          <Scribble className="mt-1 w-28 text-ink" />
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {FEATURED_DISHES.map((d, i) => (
            <li key={d.id} data-reveal="" style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
              <div className={`${i % 2 ? "rotate-1" : "-rotate-1"} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}>
                <div className="aspect-square overflow-hidden" style={tornClip(900 + i * 7)}>
                  <img src={d.image} alt={d.name[lang]} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-bold leading-snug">{d.name[lang]}</h3>
                <p className="label-type shrink-0 text-[13px]">{d.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedDishes;
