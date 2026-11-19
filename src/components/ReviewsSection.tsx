import type React from "react";
import { Star } from "lucide-react";
import { TornEdge, tornClip } from "@/components/paper/Paper";
import { usePick } from "@/i18n";

const META = [
  { author: "Marta G.", tilt: "-rotate-1", seed: 101 },
  { author: "Jordi P.", tilt: "rotate-1", seed: 103 },
  { author: "Laura S.", tilt: "-rotate-[0.5deg]", seed: 107 },
];

const T = {
  es: {
    title: "Lo que dicen de nosotros",
    rating: "4.8 ★ en Google",
    count: "Más de 300 reseñas",
    stars: "5 de 5 estrellas",
    quotes: [
      "El mejor café de Vilanova i la Geltrú. El lugar es muy acogedor, la presentación exquisita y el trato inmejorable. ¡Lo recomiendo!",
      "Brunch delicioso y café excelente. Ambiente tranquilo, terraza muy agradable y un servicio rápido, siempre con una sonrisa.",
      "De lo mejorcito que hay por la zona. Se come de maravilla y el servicio no puede ser mejor. No podéis dejar de venir.",
    ],
  },
  ca: {
    title: "El que diuen de nosaltres",
    rating: "4.8 ★ a Google",
    count: "Més de 300 ressenyes",
    stars: "5 de 5 estrelles",
    quotes: [
      "El millor cafè de Vilanova i la Geltrú. El lloc és molt acollidor, la presentació exquisida i el tracte immillorable. El recomano!",
      "Brunch boníssim i cafè excel·lent. Ambient tranquil, terrassa molt agradable i un servei ràpid, sempre amb un somriure.",
      "Del millor que hi ha per la zona. Es menja de meravella i el servei no pot ser millor. No podeu deixar de venir.",
    ],
  },
  en: {
    title: "What people say",
    rating: "4.8 ★ on Google",
    count: "More than 300 reviews",
    stars: "5 out of 5 stars",
    quotes: [
      "The best coffee in Vilanova i la Geltrú. A really cosy place, beautiful presentation and unbeatable service. Highly recommended!",
      "Delicious brunch and excellent coffee. Relaxed atmosphere, a lovely terrace and quick service, always with a smile.",
      "One of the best spots in the area. The food is wonderful and the service couldn't be better. You have to come!",
    ],
  },
};

const ReviewsSection = () => {
  const t = usePick()(T);
  return (
    <section id="opiniones" className="relative scroll-mt-20 bg-sage py-20 md:py-24">
      <TornEdge side="top" seed={97} className="text-sage" />
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="label-type text-xl font-bold md:text-2xl">{t.title}</h2>
          <p className="hand mt-4 text-[2rem]">{t.rating}</p>
          <p className="mt-1 text-sm text-ink/75">{t.count}</p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {META.map((r, idx) => (
            <li
              key={r.author}
              className={`${r.tilt} drop-shadow-[0_6px_10px_rgba(40,30,20,0.15)]`}
              data-reveal=""
              style={{ "--reveal-delay": `${idx * 110}ms` } as React.CSSProperties}
            >
              <figure className="h-full bg-paper-light px-7 pb-8 pt-9" style={tornClip(r.seed, undefined, 1.6, 4)}>
                <div className="flex gap-1" role="img" aria-label={t.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} className="fill-ink text-ink" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 text-[15px] leading-[1.85] text-ink/90">“{t.quotes[idx]}”</blockquote>
                <figcaption className="hand mt-6 text-xl">{r.author}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <TornEdge side="bottom" seed={99} className="text-sage" />
    </section>
  );
};

export default ReviewsSection;
