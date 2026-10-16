import { Star } from "lucide-react";
import { TornEdge, tornClip } from "@/components/paper/Paper";

const reviews = [
  {
    text: "El mejor café de Vilanova i la Geltrú. El lugar es muy acogedor, la presentación exquisita y el trato inmejorable. ¡Lo recomiendo!",
    author: "Marta G.",
    tilt: "-rotate-1",
    seed: 101,
  },
  {
    text: "Brunch delicioso y café excelente. Ambiente tranquilo, terraza muy agradable y un servicio rápido, siempre con una sonrisa.",
    author: "Jordi P.",
    tilt: "rotate-1",
    seed: 103,
  },
  {
    text: "De lo mejorcito que hay por la zona. Se come de maravilla y el servicio no puede ser mejor. No podéis dejar de venir.",
    author: "Laura S.",
    tilt: "-rotate-[0.5deg]",
    seed: 107,
  },
];

const ReviewsSection = () => (
  <section id="opiniones" className="relative scroll-mt-20 bg-sage py-20 md:py-24">
    <TornEdge side="top" seed={97} className="text-sage" />
    <div className="mx-auto max-w-6xl px-5 md:px-10">
      <div className="text-center">
        <h2 className="label-type text-xl font-bold md:text-2xl">Lo que dicen de nosotros</h2>
        <p className="hand mt-4 text-[2rem]">4.8 ★ en Google</p>
        <p className="mt-1 text-sm text-ink/75">Más de 300 reseñas</p>
      </div>

      <ul className="mt-14 grid gap-8 md:grid-cols-3">
        {reviews.map((r) => (
          <li key={r.author} className={`${r.tilt} drop-shadow-[0_6px_10px_rgba(40,30,20,0.15)]`}>
            <figure className="h-full bg-paper-light px-7 pb-8 pt-9" style={tornClip(r.seed, undefined, 1.6, 4)}>
              <div className="flex gap-1" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-ink text-ink" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-[15px] leading-[1.85] text-ink/90">“{r.text}”</blockquote>
              <figcaption className="hand mt-6 text-xl">{r.author}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
    <TornEdge side="bottom" seed={99} className="text-sage" />
  </section>
);

export default ReviewsSection;
