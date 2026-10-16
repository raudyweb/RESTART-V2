import { ArrowRight } from "lucide-react";
import cafeImg from "@/assets/v2/cafe-latte.jpg";
import bowlImg from "@/assets/v2/bowl-acai.jpg";
import bakeryImg from "@/assets/v2/bolleria.jpg";
import { Scribble, TornEdge, tornClip } from "@/components/paper/Paper";

const categories = [
  {
    title: ["Specialty", "coffee"],
    img: cafeImg,
    pos: "55% 60%",
    zoom: 1,
    alt: "Café con latte art y vaso de agua sobre tabla de madera",
    tilt: "-rotate-[1.5deg]",
    seed: 11,
    items: [
      "Café de especialidad",
      "Espresso y café filtrado",
      "Flat white y cappuccino",
      "Matcha latte",
      "Cold brew y bebidas frías",
      "Bebidas de temporada",
    ],
  },
  {
    title: ["Brunch"],
    img: bowlImg,
    pos: "50% 50%",
    zoom: 1,
    alt: "Bowl de açaí con mango, plátano, arándanos y granola",
    tilt: "rotate-[1deg]",
    seed: 23,
    items: [
      "Brunch artesanal",
      "Tostadas gourmet",
      "Huevos benedict",
      "Bowls saludables",
      "Opciones vegetarianas y sin gluten",
      "Ingredientes frescos y de temporada",
    ],
  },
  {
    title: ["Bakery"],
    img: bakeryImg,
    pos: "40% 50%",
    zoom: 1,
    alt: "Napolitanas de chocolate y cruasanes recién horneados",
    tilt: "-rotate-[1deg]",
    seed: 37,
    items: [
      "Repostería artesanal",
      "Cookies caseras",
      "Pancakes",
      "Tartas de temporada",
      "Elaboración propia de Macu Bakery",
    ],
  },
];

const MenuSection = () => (
  <section id="carta" className="relative bg-paper pb-20 pt-10 md:pb-28 md:pt-14">
    <TornEdge side="top" seed={3} className="text-paper" />
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {categories.map((c) => (
          <article key={c.title.join(" ")} className="flex flex-col">
            <div className={`${c.tilt} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}>
              <div className="aspect-[4/3.3] overflow-hidden bg-muted" style={tornClip(c.seed)}>
                <div className="h-full w-full" style={{ transform: `scale(${c.zoom})`, transformOrigin: "50% 0%" }}>
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    style={{ objectPosition: c.pos }}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <h2 className="hand mt-7 text-center text-[2rem] leading-[0.95] md:text-[2.1rem]">
              {c.title.map((t) => (
                <span key={t} className="block">
                  {t}
                </span>
              ))}
            </h2>
            <Scribble className="mx-auto mt-2 w-20 text-ink" />
            <ul className="mt-6 space-y-1.5 text-center text-[15px] text-ink/80">
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col items-center gap-4">
        <a
          href="/Carta.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-paper border border-ink/25 bg-transparent"
        >
          Ver carta completa <ArrowRight size={16} />
        </a>
        <p className="text-xs text-muted-foreground">En caso de alergias, consulta con el personal.</p>
      </div>
    </div>
  </section>
);

export default MenuSection;
