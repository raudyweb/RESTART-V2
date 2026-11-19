import salaImg from "@/assets/v2/sala-arcos.webp";
import tropicalImg from "@/assets/v2/rincon-tropical.webp";
import arcoImg from "@/assets/v2/arco-barra.webp";
import barraImg from "@/assets/v2/barra-iluminada.webp";
import { nueva } from "@/assets/v2/nuevas";
import { Scribble, tornClip } from "@/components/paper/Paper";
import { usePick } from "@/i18n";

const PHOTOS = [
  { src: salaImg, tilt: "-rotate-2", seed: 71 },
  { src: nueva("vitrina", null), tilt: "rotate-1", seed: 89 },
  { src: nueva("marzocco", barraImg), tilt: "-rotate-1", seed: 91 },
  { src: tropicalImg, tilt: "rotate-2", seed: 73 },
  { src: nueva("marzocco-detalle", null), tilt: "-rotate-[1.5deg]", seed: 93 },
  { src: arcoImg, tilt: "rotate-1", seed: 79 },
];

const T = {
  es: {
    title: "Nuestro rincón",
    text: "Arcos, farolillos, madera y mucha luz. Un sitio para quedarse un rato más.",
    alts: [
      "Sala con arcos, farolillos y mesas de madera",
      "Vitrina con cookies, brownie y bocadillos en la barra de madera",
      "Cafetera La Marzocco con tazas apiladas",
      "Rincón con papel tropical, pared amarilla y espejo con contraventanas",
      "Detalle del logo de La Marzocco en la cafetera",
      "Vista de la barra a través del arco de entrada",
    ],
  },
  ca: {
    title: "El nostre racó",
    text: "Arcs, fanalets, fusta i molta llum. Un lloc per quedar-s'hi una estona més.",
    alts: [
      "Sala amb arcs, fanalets i taules de fusta",
      "Vitrina amb cookies, brownie i entrepans a la barra de fusta",
      "Cafetera La Marzocco amb tasses apilades",
      "Racó amb paper tropical, paret groga i mirall amb finestrons",
      "Detall del logotip de La Marzocco a la cafetera",
      "Vista de la barra a través de l'arc d'entrada",
    ],
  },
  en: {
    title: "Our space",
    text: "Arches, lanterns, wood and lots of light. A place to stay a little longer.",
    alts: [
      "Dining room with arches, lanterns and wooden tables",
      "Display case with cookies, brownie and sandwiches on the wooden counter",
      "La Marzocco espresso machine with stacked cups",
      "Corner with tropical wallpaper, yellow wall and a shuttered mirror",
      "Close-up of the La Marzocco logo on the espresso machine",
      "View of the counter through the entrance arch",
    ],
  },
};

const GallerySection = () => {
  const t = usePick()(T);
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

      <ul
        data-reveal=""
        className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 md:mx-auto md:grid md:max-w-6xl md:grid-cols-3 md:gap-8 md:overflow-visible md:px-10"
      >
        {PHOTOS.map((p, i) =>
          !p.src ? null : (
            <li
              key={p.seed}
              className={`w-[68vw] shrink-0 snap-center md:w-auto ${p.tilt} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}
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
    </section>
  );
};

export default GallerySection;
