import barraImg from "@/assets/v2/barra-iluminada.jpg";
import { HandHeart } from "@/components/paper/Paper";

const AboutSection = () => (
  <section id="nosotros" className="relative bg-paper-light">
    <div className="mx-auto grid max-w-7xl md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:pl-10 lg:pr-16">
        <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
          Mucho más
          <br />
          que una cafetería
        </h2>
        <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />

        <p className="mt-7 max-w-md text-[15px] leading-[1.9] text-ink/85">
          Café de especialidad, brunch y repostería artesanal en el corazón de Vilanova i la Geltrú. Un lugar para
          disfrutar, compartir y resetear el día.
        </p>
        <p className="mt-4 max-w-md text-[15px] leading-[1.9] text-ink/85">
          Trabajamos con granos de especialidad Nomad, uno de los mejores tostadores del país. Cada taza se prepara
          con atención al detalle, sin atajos. Somos el sitio de siempre para los de aquí y el descubrimiento
          favorito para los de fuera.
        </p>

        <p className="hand mt-10 -rotate-[5deg] text-[2rem] md:text-[2.3rem]">
          Good vibes only <HandHeart className="h-[0.75em] w-[0.8em] -translate-y-3 rotate-12" />
        </p>

        <a
          href="https://maps.app.goo.gl/BL8ZWwjTquyxNPD16"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-baseline gap-2 border-b border-ink/30 pb-1 text-sm hover:border-ink"
        >
          <span className="text-lg font-bold">4.8 ★</span>
          <span>+300 reseñas en Google</span>
        </a>
      </div>

      <div className="relative min-h-[420px] md:min-h-[560px]">
        <img
          src={barraImg}
          alt="Barra de madera iluminada con la cafetera La Marzocco"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
        />
      </div>
    </div>
  </section>
);

export default AboutSection;
