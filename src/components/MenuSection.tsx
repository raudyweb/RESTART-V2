import type React from "react";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cafeImg from "@/assets/v2/cafe-latte.webp";
import bowlImg from "@/assets/v2/bowl-acai.webp";
import bolleriaImg from "@/assets/v2/bolleria.webp";
import { nueva } from "@/assets/v2/nuevas";
import { Brush, HandHeart, Scribble, TornEdge, tornClip } from "@/components/paper/Paper";
import { href, useCommon, useLang, usePick } from "@/i18n";
import { CarouselNav, useSnapCarousel } from "@/components/paper/Carousel";

const cookiesImg = nueva("cookies-pistacho", bolleriaImg);

const T = {
  es: {
    card: "tarjeta",
    coffeeAlt: "Café con latte art y vaso de agua sobre tabla de madera",
    coffeeQ: "¿De clásicos o de los que les gusta probar cosas nuevas?",
    coffee1:
      "Del cappuccino cremoso al espresso con carácter, pasando por V60, caramel iced latte, shakerato, cold brew o matcha latte.",
    coffee2: "",
    coffeeHand: ["Buen café,", "diferentes formas de disfrutarlo."],
    brunchAlt: "Bowl de açaí con mango, plátano, arándanos y granola",
    brunch: [
      "Brunch artesanal",
      "Tostadas gourmet",
      "Huevos benedict",
      "Bowls y opciones sin gluten",
    ],
    bakeryAlt: "Cookies estilo New York de pistacho, chocolate y Oreo sin gluten",
    bakeryLead: "New York cookies, brownies, bizcochos y mucho más…",
    bakeryBy: "Elaboraciones creadas por",
  },
  ca: {
    card: "targeta",
    coffeeAlt: "Cafè amb latte art i got d'aigua sobre una safata de fusta",
    coffeeQ: "Ets de clàssics o dels que els agrada provar coses noves?",
    coffee1:
      "Del cappuccino cremós a l'espresso amb caràcter, passant per V60, caramel iced latte, shakerato, cold brew o matcha latte.",
    coffee2: "",
    coffeeHand: ["Bon cafè,", "diferents maneres de gaudir-lo."],
    brunchAlt: "Bowl d'açaí amb mango, plàtan, nabius i granola",
    brunch: [
      "Brunch artesà",
      "Torrades gourmet",
      "Ous Benedict",
      "Bowls i opcions sense gluten",
    ],
    bakeryAlt: "Cookies estil New York de festuc, xocolata i Oreo sense gluten",
    bakeryLead: "New York cookies, brownies, pa de pessic i molt més…",
    bakeryBy: "Elaboracions creades per",
  },
  en: {
    card: "card",
    coffeeAlt: "Coffee with latte art and a glass of water on a wooden board",
    coffeeQ: "Classic coffee lover or always up for something new?",
    coffee1:
      "From a creamy cappuccino to a bold espresso, plus V60, caramel iced latte, shakerato, cold brew and matcha latte.",
    coffee2: "",
    coffeeHand: ["Good coffee,", "many ways to enjoy it."],
    brunchAlt: "Açaí bowl with mango, banana, blueberries and granola",
    brunch: [
      "Homemade brunch",
      "Gourmet toasts",
      "Eggs Benedict",
      "Bowls and gluten-free options",
    ],
    bakeryAlt: "Gluten-free New York style cookies with pistachio, chocolate and Oreo",
    bakeryLead: "New York cookies, brownies, sponge cakes and much more…",
    bakeryBy: "Baked by",
  },
  fr: {
    card: "carte",
    coffeeAlt: "Café avec latte art et verre d'eau sur une planche en bois",
    coffeeQ: "Plutôt classique ou toujours prêt à essayer du nouveau ?",
    coffee1:
      "Du cappuccino crémeux à l'espresso de caractère, en passant par V60, caramel iced latte, shakerato, cold brew ou matcha latte.",
    coffee2: "",
    coffeeHand: ["Du bon café,", "mille façons de le savourer."],
    brunchAlt: "Bowl d'açaí avec mangue, banane, myrtilles et granola",
    brunch: [
      "Brunch maison",
      "Tartines gourmandes",
      "Œufs Bénédicte",
      "Bowls et options sans gluten",
    ],
    bakeryAlt: "Cookies façon New York sans gluten à la pistache, au chocolat et à l'Oreo",
    bakeryLead: "New York cookies, brownies, gâteaux et bien plus…",
    bakeryBy: "Préparés par",
  },
};

/** Tarjeta con foto rasgada, título manuscrito y contenido libre. */
const Card = ({
  idx,
  img,
  alt,
  pos,
  tilt,
  seed,
  title,
  children,
  cta,
}: {
  idx: number;
  img: string;
  alt: string;
  pos: string;
  tilt: string;
  seed: number;
  title: ReactNode;
  children: ReactNode;
  cta?: string;
}) => (
  <article
    className="flex w-[82vw] max-w-sm shrink-0 snap-center flex-col lg:w-auto lg:max-w-none"
    data-reveal=""
    style={{ "--reveal-delay": `${idx * 110}ms` } as React.CSSProperties}
  >
    <div className={`${tilt} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}>
      <div className="aspect-[4/3.3] overflow-hidden bg-muted" style={tornClip(seed)}>
        <img
          src={img}
          alt={alt}
          loading="lazy"
          style={{ objectPosition: pos }}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </div>
    <h2 className="hand mt-7 text-center text-[2rem] leading-[0.95] md:text-[2.1rem]">{title}</h2>
    <Scribble className="mx-auto mt-2 w-20 text-ink" />
    <div className="mb-8 mt-6 text-center">{children}</div>
    {cta && (
      <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="btn-paper mx-auto mt-auto w-fit border border-ink/25 bg-transparent">
        {cta} <ArrowRight size={16} />
      </a>
    )}
  </article>
);

const MenuSection = () => {
  const t = usePick()(T);
  const c = useCommon();
  const lang = useLang();
  const { ref, index, count, go } = useSnapCarousel<HTMLDivElement>();

  return (
    <section id="carta" className="relative bg-paper pb-20 pt-10 md:pb-28 md:pt-14">
      <TornEdge side="top" seed={3} className="text-paper" />
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div ref={ref} className="no-scrollbar relative -mx-5 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-[9vw] py-4 md:-mx-10 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0">
          {/* Specialty coffee */}
          <Card
            idx={0}
            img={cafeImg}
            alt={t.coffeeAlt}
            pos="55% 60%"
            tilt="-rotate-[1.5deg]"
            seed={11}
            cta={c.seeMenu}
            title={
              <>
                <span lang="en">
                  <span className="block">Specialty</span> <span className="block">coffee</span>
                </span>
              </>
            }
          >
            <p className="mx-auto max-w-sm text-[15px] font-bold leading-relaxed">{t.coffeeQ}</p>
            <p className="mx-auto mt-4 max-w-sm text-[14.5px] leading-[1.8] text-ink/80">{t.coffee1}</p>
            {t.coffee2 && <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-[1.8] text-ink/80">{t.coffee2}</p>}
            <p className="hand mx-auto mt-6 max-w-xs -rotate-2 text-[1.35rem] normal-case leading-tight">
              {t.coffeeHand[0]}
              <br />
              {t.coffeeHand[1]} <HandHeart className="h-[0.8em] w-[0.85em] -translate-y-1" />
            </p>
            <Scribble className="mx-auto mt-1 w-40 text-ink" />
          </Card>

          {/* Brunch */}
          <Card idx={1} img={bowlImg} alt={t.brunchAlt} pos="50% 50%" tilt="rotate-[1deg]" seed={23} title="Brunch" cta={c.seeMenu}>
            <ul className="space-y-1.5 text-[15px] text-ink/80">
              {t.brunch.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </Card>

          {/* Bakery */}
          <Card
            idx={2}
            img={cookiesImg}
            alt={t.bakeryAlt}
            pos="50% 40%"
            tilt="-rotate-[1deg]"
            seed={37}
            cta={c.seeMenu}
            title={
              <>
                <span lang="en" className="block">
                  Bakery <HandHeart className="h-[0.6em] w-[0.65em] -translate-y-3" />
                </span>{" "}
                <Brush underline className="mt-1 text-[0.72em]">
                  <span lang="en">Gluten free</span>
                </Brush>
              </>
            }
          >
            <p className="label-type mx-auto max-w-xs text-[13.5px] font-bold leading-relaxed">{t.bakeryLead}</p>
            <p className="mx-auto mt-3 max-w-xs text-[14.5px] leading-[1.8] text-ink/80">
              {t.bakeryBy}{" "}
              <Link to={href("macu", lang)} className="whitespace-nowrap underline underline-offset-4 hover:text-ink">
                Macu Bakery Gluten Free
              </Link>
              .
            </p>
          </Card>
        </div>

        <CarouselNav index={index} count={count} go={go} label={t.card} className="mt-2 lg:hidden" />
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground">{c.allergens}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
