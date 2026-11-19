import barraImg from "@/assets/v2/barra-iluminada.webp";
import { HandHeart } from "@/components/paper/Paper";
import { usePick } from "@/i18n";

const T = {
  es: {
    title: ["Mucho más", "que una cafetería"],
    p2: "Trabajamos con distintos tostadores de especialidad, cuidadosamente seleccionados por la calidad, la trazabilidad y el respeto por el origen. Cada taza se prepara con atención al detalle, sin atajos. Somos el sitio de siempre para los de aquí y el descubrimiento favorito para los de fuera.",
    reviews: "+300 reseñas en Google",
    alt: "Barra de madera iluminada con la cafetera La Marzocco",
  },
  ca: {
    title: ["Molt més", "que una cafeteria"],
    p2: "Treballem amb diferents torradors d'especialitat, seleccionats amb cura per la qualitat, la traçabilitat i el respecte per l'origen. Cada tassa es prepara amb atenció al detall, sense dreceres. Som el lloc de sempre per als d'aquí i el descobriment preferit per als de fora.",
    reviews: "+300 ressenyes a Google",
    alt: "Barra de fusta il·luminada amb la cafetera La Marzocco",
  },
  en: {
    title: ["Much more", "than a coffee shop"],
    p2: "We work with a range of specialty roasters, carefully chosen for quality, traceability and respect for origin. Every cup is made with attention to detail, no shortcuts. We're the go-to spot for locals and a favourite discovery for visitors.",
    reviews: "300+ Google reviews",
    alt: "Lit-up wooden counter with the La Marzocco espresso machine",
  },
  fr: {
    title: ["Bien plus", "qu'un café"],
    p2: "Nous travaillons avec plusieurs torréfacteurs de spécialité, soigneusement choisis pour leur qualité, leur traçabilité et leur respect de l'origine. Chaque tasse est préparée avec soin, sans raccourcis. L'adresse de toujours pour les habitués, et la découverte préférée de ceux qui passent.",
    reviews: "+300 avis sur Google",
    alt: "Comptoir en bois éclairé avec la machine à espresso La Marzocco",
  },
};

const AboutSection = () => {
  const t = usePick()(T);
  return (
    <section id="nosotros" className="relative bg-paper-light">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div data-reveal="" className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:pl-10 lg:pr-16">
          <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
            {t.title[0]}
            <br />
            {t.title[1]}
          </h2>
          <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />

          <p className="mt-7 max-w-md text-[15px] leading-[1.9] text-ink/85">{t.p2}</p>

          <p className="hand mt-10 -rotate-[5deg] text-[2rem] md:text-[2.3rem]">
            <span lang="en">Good vibes only</span> <HandHeart className="h-[0.75em] w-[0.8em] -translate-y-3 rotate-12" />
          </p>

          <a
            href="https://maps.app.goo.gl/BL8ZWwjTquyxNPD16"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-baseline gap-2 border-b border-ink/30 pb-1 text-sm hover:border-ink"
          >
            <span className="text-lg font-bold">4.8 ★</span>
            <span>{t.reviews}</span>
          </a>
        </div>

        <div className="relative min-h-[420px] md:min-h-[520px] lg:min-h-[560px]">
          <img
            src={barraImg}
            alt={t.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
