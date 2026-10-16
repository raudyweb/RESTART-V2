import { ArrowRight, MapPin } from "lucide-react";
import heroImg from "@/assets/v2/hero-good-vibes.webp";
import { HandHeart, Scribble } from "@/components/paper/Paper";
import HeroPhoto from "@/components/paper/HeroPhoto";

const HeroSection = () => (
  <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
    <HeroPhoto
      src={heroImg}
      alt="Pared de Re-Start Coffee con el neón Good Vibes Only"
      position="50% 38%"
      desktopPosition="50% 35%"
      seed={17}
    />

    <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-24">
      <div className="max-w-xl lg:max-w-[min(36rem,42vw)]">
        <h1>
          <span className="hand block -rotate-[6deg] text-[clamp(3.2rem,9vw,6.2rem)] tracking-wide">
            Re-Start
            <span className="block pl-[0.4em]">Coffee</span>
          </span>
          <Scribble className="-mt-1 ml-[18%] w-[min(300px,62%)] -rotate-[4deg] text-white/90" />
          <span className="label-type mt-6 block text-xs md:text-sm">Vilanova i la Geltrú</span>
        </h1>

        <p className="hand mt-10 text-[clamp(2.4rem,6.4vw,4.4rem)]">
          Good coffee
          <br />
          Good food
          <br />
          Good vibes <HandHeart className="ml-1 h-[0.7em] w-[0.75em] -rotate-12 align-baseline" />
        </p>

        <p className="label-type mt-8 text-sm leading-relaxed md:text-base">
          Specialty coffee · Brunch
          <br />
          Gluten free bakery
        </p>

        <div className="mt-9 flex w-full max-w-[300px] flex-col gap-4">
          <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="btn-paper">
            Descubre nuestra carta <ArrowRight size={16} />
          </a>
          <a href="#mapa" className="btn-ghost-light">
            Cómo llegar <MapPin size={16} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
