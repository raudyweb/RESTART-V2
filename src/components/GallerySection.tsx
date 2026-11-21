import salaImg from "@/assets/v2/sala-arcos.webp";
import barraImg from "@/assets/v2/barra-iluminada.webp";
import terrazaCalleImg from "@/assets/v2/terraza-calle.webp";
import terrazaImg from "@/assets/v2/terraza-tostada.webp";
import { nueva } from "@/assets/v2/nuevas";
import { Scribble, tornClip } from "@/components/paper/Paper";
import { CarouselNav, useSnapCarousel } from "@/components/paper/Carousel";
import { usePick } from "@/i18n";

const PHOTOS = [
  { src: salaImg, tilt: "-rotate-2", seed: 71 },
  { src: nueva("vitrina", null), tilt: "rotate-1", seed: 89 },
  { src: nueva("marzocco", barraImg), tilt: "-rotate-1", seed: 91 },
  { src: terrazaCalleImg, tilt: "-rotate-1", seed: 101 },
  { src: terrazaImg, tilt: "rotate-2", seed: 97 },
];

const T = {
  es: {
    photo: "foto",
    title: "Nuestro rincón",
    text: "Arcos, farolillos, madera y mucha luz. Un sitio para quedarse un rato más.",
    alts: [
      "Sala con arcos, farolillos y mesas de madera",
      "Vitrina con cookies, brownie y bocadillos en la barra de madera",
      "Cafetera La Marzocco con tazas apiladas",
      "Terraza de Re-Start en la calle peatonal, con mesas de madera, sombrillas y plantas",
      "Tostada de salmón con ensalada en una mesa de la terraza",
    ],
  },
  ca: {
    photo: "foto",
    title: "El nostre racó",
    text: "Arcs, fanalets, fusta i molta llum. Un lloc per quedar-s'hi una estona més.",
    alts: [
      "Sala amb arcs, fanalets i taules de fusta",
      "Vitrina amb cookies, brownie i entrepans a la barra de fusta",
      "Cafetera La Marzocco amb tasses apilades",
      "Terrassa de Re-Start al carrer de vianants, amb taules de fusta, para-sols i plantes",
      "Torrada de salmó amb amanida en una taula de la terrassa",
    ],
  },
  en: {
    photo: "photo",
    title: "Our space",
    text: "Arches, lanterns, wood and lots of light. A place to stay a little longer.",
    alts: [
      "Dining room with arches, lanterns and wooden tables",
      "Display case with cookies, brownie and sandwiches on the wooden counter",
      "La Marzocco espresso machine with stacked cups",
      "Re-Start terrace on the pedestrian street, with wooden tables, parasols and plants",
      "Smoked salmon toast with salad at a table on the terrace",
    ],
  },
  fr: {
    photo: "photo",
    title: "Notre coin",
    text: "Des arches, des lanternes, du bois et beaucoup de lumière. Un endroit où l'on a envie de rester un peu plus.",
    alts: [
      "Salle avec arches, lanternes et tables en bois",
      "Vitrine avec cookies, brownie et sandwichs sur le comptoir en bois",
      "Machine à espresso La Marzocco avec des tasses empilées",
      "Terrasse de Re-Start dans la rue piétonne, avec tables en bois, parasols et plantes",
      "Tartine au saumon fumé et salade sur une table de la terrasse",
    ],
  },
};

const GallerySection = () => {
  const t = usePick()(T);
  const { ref, index, count, go } = useSnapCarousel();
  return (
    <section
      id="espacio"
      aria-labelledby="galeria-titulo"
      className="scroll-mt-20 bg-paper-light py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <h2
            id="galeria-titulo"
            className="hand text-[2.2rem] md:text-[2.6rem]"
          >
            {t.title}
          </h2>
          <Scribble className="mt-1 w-28 text-ink" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80">
            {t.text}
          </p>
        </div>
      </div>

      {/* Móvil: carrusel deslizable con puntos; desde tablet: 3 de dentro en una fila y 2 de la terraza debajo, centradas */}
      <ul
        ref={ref}
        data-reveal=""
        className="no-scrollbar relative mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x touch-pan-y px-[16vw] py-6 md:mx-auto md:max-w-6xl md:flex-wrap md:justify-center md:gap-8 md:overflow-visible md:px-10"
      >
        {PHOTOS.map((p, i) =>
          !p.src ? null : (
            <li
              key={p.seed}
              className={`w-[68vw] shrink-0 snap-center md:w-[calc((100%-4rem)/3)] ${p.tilt} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}
            >
              <div
                className="aspect-[3/4] overflow-hidden"
                style={tornClip(p.seed, undefined, 2, 3)}
              >
                <img
                  src={p.src}
                  alt={t.alts[i]}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ),
        )}
      </ul>
      <CarouselNav index={index} count={count} go={go} label={t.photo} className="mt-4 md:hidden" />
    </section>
  );
};

export default GallerySection;
