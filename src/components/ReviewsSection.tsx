import type React from "react";
import { ExternalLink, PenLine, Star } from "lucide-react";
import { TornEdge, tornClip } from "@/components/paper/Paper";
import { CarouselNav, useSnapCarousel } from "@/components/paper/Carousel";
import { usePick } from "@/i18n";
import { GOOGLE_REVIEWS_URL, GOOGLE_WRITE_REVIEW_URL } from "@/lib/site";

const META = [
  { author: "Marta G.", tilt: "-rotate-1", seed: 101 },
  { author: "Jordi P.", tilt: "rotate-1", seed: 103 },
  { author: "Laura S.", tilt: "-rotate-[0.5deg]", seed: 107 },
];

const T = {
  es: {
    title: "Lo que dicen de nosotros",
    score: "4.8",
    all: "Ver todas las reseñas",
    write: "Deja tu reseña",
    item: "reseña",
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
    score: "4.8",
    all: "Veure totes les ressenyes",
    write: "Deixa la teva ressenya",
    item: "ressenya",
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
    score: "4.8",
    all: "See all reviews",
    write: "Leave a review",
    item: "review",
    count: "More than 300 reviews",
    stars: "5 out of 5 stars",
    quotes: [
      "The best coffee in Vilanova i la Geltrú. A really cosy place, beautiful presentation and unbeatable service. Highly recommended!",
      "Delicious brunch and excellent coffee. Relaxed atmosphere, a lovely terrace and quick service, always with a smile.",
      "One of the best spots in the area. The food is wonderful and the service couldn't be better. You have to come!",
    ],
  },
  fr: {
    title: "Ce qu'ils en disent",
    score: "4,8",
    all: "Voir tous les avis",
    write: "Laisser un avis",
    item: "avis",
    count: "Plus de 300 avis",
    stars: "5 étoiles sur 5",
    quotes: [
      "Le meilleur café de Vilanova i la Geltrú. Un endroit très chaleureux, une présentation soignée et un service imbattable. Je recommande vivement !",
      "Brunch délicieux et excellent café. Ambiance détendue, jolie terrasse et service rapide, toujours avec le sourire.",
      "L'une des meilleures adresses du coin. La nourriture est délicieuse et le service ne pourrait pas être meilleur. À ne pas manquer !",
    ],
  },
};

const ReviewsSection = () => {
  const t = usePick()(T);
  const { ref, index, count, go } = useSnapCarousel();
  return (
    <section id="opiniones" className="relative scroll-mt-20 bg-sage py-20 md:py-24">
      <TornEdge side="top" seed={97} className="text-sage" />
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="label-type text-xl font-bold md:text-2xl">{t.title}</h2>
          <p className="mt-4 flex items-center justify-center gap-3">
            <span className="hand text-[2rem]">{t.score} ★</span>
            <span className="rounded-full border border-ink/25 bg-paper-light px-3 py-1 text-[13px] font-bold tracking-wide">
              Google
            </span>
          </p>
          <p className="mt-1 text-sm text-ink/75">{t.count}</p>
        </div>

        {/* Móvil y tablet: carrusel deslizable; escritorio: las 3 en fila */}
        <ul
          ref={ref}
          className="no-scrollbar relative -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[9vw] py-4 md:-mx-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0"
        >
          {META.map((r, idx) => (
            <li
              key={r.author}
              className={`w-[82vw] max-w-sm shrink-0 snap-center lg:w-auto lg:max-w-none ${r.tilt} drop-shadow-[0_6px_10px_rgba(40,30,20,0.15)]`}
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
        <CarouselNav index={index} count={count} go={go} label={t.item} className="mt-4 lg:hidden" />

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn-paper bg-ink text-paper-light">
            {t.all} <ExternalLink size={15} />
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL || GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-paper border border-ink/25 bg-transparent"
          >
            {t.write} <PenLine size={15} />
          </a>
        </div>
      </div>
      <TornEdge side="bottom" seed={99} className="text-sage" />
    </section>
  );
};

export default ReviewsSection;
