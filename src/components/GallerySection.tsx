import salaImg from "@/assets/v2/sala-arcos.jpg";
import tropicalImg from "@/assets/v2/rincon-tropical.jpg";
import arcoImg from "@/assets/v2/arco-barra.jpg";
import barraImg from "@/assets/v2/barra-madera.jpg";
import { Scribble, tornClip } from "@/components/paper/Paper";

const photos = [
  { src: salaImg, alt: "Sala con arcos, farolillos y mesas de madera", tilt: "-rotate-2", seed: 71 },
  { src: tropicalImg, alt: "Rincón con papel tropical, pared amarilla y espejo con contraventanas", tilt: "rotate-1", seed: 73 },
  { src: arcoImg, alt: "Vista de la barra a través del arco de entrada", tilt: "-rotate-1", seed: 79 },
  { src: barraImg, alt: "Barra de madera con la cafetera y plantas", tilt: "rotate-2", seed: 83 },
];

const GallerySection = () => (
  <section aria-labelledby="galeria-titulo" className="bg-paper-light py-20 md:py-24">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-col items-center text-center">
        <h2 id="galeria-titulo" className="hand text-[2.2rem] md:text-[2.6rem]">
          Nuestro rincón
        </h2>
        <Scribble className="mt-1 w-28 text-ink" />
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80">
          Arcos, farolillos, madera y mucha luz. Un sitio para quedarse un rato más.
        </p>
      </div>
    </div>

    <ul className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 md:mx-auto md:grid md:max-w-7xl md:grid-cols-4 md:overflow-visible md:px-10">
      {photos.map((p) => (
        <li
          key={p.seed}
          className={`w-[68vw] shrink-0 snap-center md:w-auto ${p.tilt} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}
        >
          <div className="aspect-[3/4] overflow-hidden" style={tornClip(p.seed, undefined, 2, 3)}>
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default GallerySection;
