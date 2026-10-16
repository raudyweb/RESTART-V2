import { ArrowDown, Coffee, MapPin, Sandwich, Store, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PageHero from "@/components/paper/PageHero";
import MoreProjects from "@/components/paper/MoreProjects";
import { HandHeart, Scribble, TornEdge, tornClip } from "@/components/paper/Paper";
import { PalmSketch } from "@/components/paper/Sketches";
import heroImg from "@/assets/v2/foodtruck/truck-noche.jpg";
import truckImg from "@/assets/v2/foodtruck/truck-dia.jpg";
import logoImg from "@/assets/v2/foodtruck/truck-logo.jpg";
import stationImg from "@/assets/v2/foodtruck/food-station.jpg";
import parkImg from "@/assets/v2/foodtruck/vilanova-park.jpg";
import cafeImg from "@/assets/v2/foodtruck/cafe-latte.jpg";
import zumoImg from "@/assets/v2/foodtruck/zumo.jpg";
import pokeImg from "@/assets/v2/foodtruck/poke.jpg";

const MAPS = "https://www.google.com/maps/search/?api=1&query=Camping+Vilanova+Park";

const puntos = [
  {
    title: "El food truck",
    text: "Nuestra furgoneta turquesa, con su “Eat · Love · Repeat”. De día para el café y el desayuno; de noche, con luces y buen ambiente.",
    img: truckImg,
    alt: "El food truck turquesa de Re-Start en el camping",
    seed: 601,
    tilt: "-rotate-2",
  },
  {
    title: "Food Station",
    text: "Nuestro segundo punto de venta dentro del recinto, para que tengas Re-Start cerca tanto si estás en parcela como en bungalow o mobilhome.",
    img: stationImg,
    alt: "Quiosco Food Station con terraza en el camping",
    seed: 607,
    tilt: "rotate-2",
  },
];

const detalles = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    text: "La misma calidad que en la cafetería: granos de especialidad, extracción cuidada y atención al detalle, ahora al aire libre.",
  },
  {
    icon: Sandwich,
    title: "Brunch y snacks",
    text: "Desayunos, tostadas, bowls y opciones ligeras para empezar bien el día sin salir del camping.",
  },
  {
    icon: Store,
    title: "Dos puntos de venta",
    text: "El food truck y la Food Station, repartidos por el Camping Vilanova Park para tenerte siempre cerca.",
  },
  {
    icon: Sun,
    title: "El espíritu Re-Start",
    text: "Fuera del local pero con la misma esencia: trato cercano, buen producto y la filosofía que nos acompaña desde 2022.",
  },
];

const productos = [
  { img: cafeImg, alt: "Café con latte art y vaso de agua", seed: 641, tilt: "-rotate-2", pos: "50% 50%" },
  { img: zumoImg, alt: "Zumo natural de mango servido en tarro", seed: 643, tilt: "rotate-1", pos: "50% 40%" },
  { img: pokeImg, alt: "Poke bowl con salmón, edamame y rabanito", seed: 647, tilt: "-rotate-1", pos: "50% 50%" },
];

const FoodTruck = () => (
  <div className="min-h-screen overflow-x-clip">
    <SEO
      title="Food Truck Re-Start | Café de especialidad en el Camping Vilanova Park"
      description="Re-Start también está en el Camping Vilanova Park: food truck y Food Station con café de especialidad, desayunos, bowls y snacks al aire libre en Vilanova i la Geltrú."
    />
    <Navbar />

    <main>
      <PageHero
        img={heroImg}
        alt="El food truck de Re-Start iluminado de noche en el Camping Vilanova Park"
        imgPosition="50% 60%"
        eyebrow="Re-Start fuera del local"
        title={
          <>
            Food
            <span className="block pl-[0.5em]">Truck</span>
          </>
        }
        subtitle={
          <>
            Camping Vilanova Park
            <br />
            Eat · Love · Repeat
          </>
        }
      >
        <a href="#puntos" className="btn-paper">
          Dónde encontrarnos <ArrowDown size={16} />
        </a>
        <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
          Cómo llegar <MapPin size={16} />
        </a>
      </PageHero>

      {/* Intro */}
      <section className="relative bg-paper pb-20 pt-16 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16 md:px-10">
          <div>
            <p className="hand -rotate-2 text-[1.7rem] leading-tight md:text-[2rem]">
              “La experiencia Re-Start, ahora también en el camping más grande de Vilanova”
            </p>
            <p className="mt-7 text-[15px] leading-[1.9] text-ink/85">
              Después de consolidar nuestra cafetería, dimos el paso de llevar Re-Start al Camping Vilanova Park. Un
              entorno diferente, al aire libre, rodeado de naturaleza y con gente que busca calidad también en sus días
              de descanso.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-ink/85">
              Tenemos dos puntos de venta dentro del recinto para que siempre tengas a mano un buen café, un desayuno
              elaborado o un snack, sin renunciar a nada.
            </p>
          </div>
          <div className="mx-auto w-60 rotate-3 drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)] md:w-full md:max-w-xs">
            <div className="aspect-[4/5] overflow-hidden" style={tornClip(613)}>
              <img
                src={logoImg}
                alt="Lateral del food truck con el logo de Re-Start y el lema Eat Love Repeat"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dos puntos de venta */}
      <section id="puntos" aria-labelledby="puntos-titulo" className="relative scroll-mt-20 bg-truck pb-20 pt-16 text-paper-light md:pb-24">
        <TornEdge side="top" seed={621} className="text-truck" />
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="flex flex-col items-center text-center">
            <h2 id="puntos-titulo" className="hand text-[2.3rem] md:text-[2.8rem]">
              Dos sitios donde encontrarnos
            </h2>
            <Scribble className="mt-1 w-32 text-paper-light" />
          </div>
          <ul className="mt-14 grid gap-14 md:grid-cols-2 md:gap-12">
            {puntos.map((p) => (
              <li key={p.title}>
                <div className={`${p.tilt} drop-shadow-[0_10px_16px_rgba(0,0,0,0.28)]`}>
                  <div className="aspect-[4/3.4] overflow-hidden" style={tornClip(p.seed)}>
                    <img src={p.img} alt={p.alt} loading="lazy" className="h-full w-full object-cover object-[50%_60%]" />
                  </div>
                </div>
                <h3 className="hand mt-7 text-[1.9rem]">{p.title}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-[1.85] text-paper-light/90">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <TornEdge side="bottom" seed={623} className="text-truck" />
      </section>

      {/* Qué ofrecemos */}
      <section aria-labelledby="ofrecemos" className="bg-paper py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="text-center">
            <h2 id="ofrecemos" className="label-type text-xl font-bold md:text-2xl">
              Re-Start fuera del local
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
              La misma calidad de siempre, adaptada al camping y pensada para disfrutarla al aire libre.
            </p>
          </div>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {detalles.map(({ icon: Icon, title, text }) => (
              <li key={title} className="text-center">
                <Icon size={36} strokeWidth={1.25} className="mx-auto text-truck" aria-hidden="true" />
                <h3 className="hand mt-4 text-[1.4rem]">{title}</h3>
                <p className="mt-3 text-[14px] leading-[1.8] text-ink/80">{text}</p>
              </li>
            ))}
          </ul>

          <ul className="mt-16 grid grid-cols-3 gap-3 md:gap-8">
            {productos.map((p) => (
              <li key={p.seed} className={`${p.tilt} drop-shadow-[0_8px_12px_rgba(40,30,20,0.18)]`}>
                <div className="aspect-square overflow-hidden" style={tornClip(p.seed, undefined, 2.4, 3)}>
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    style={{ objectPosition: p.pos }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* El camping */}
      <section className="relative overflow-hidden bg-truck-light py-20 md:py-24">
        <TornEdge side="top" seed={631} className="text-truck-light" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <div className="-rotate-1 drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
            <div className="aspect-[3/2] overflow-hidden" style={tornClip(637, undefined, 1.8, 2)}>
              <img src={parkImg} alt="Piscina y palmeras del Camping Vilanova Park" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="relative">
            <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
              En el corazón del
              <br />
              Camping Vilanova Park
            </h2>
            <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />
            <p className="mt-7 text-[15px] leading-[1.9] text-ink/85">
              El Camping Vilanova Park es uno de los campings más grandes y completos de Cataluña, a pocos minutos de la
              playa y del centro de Vilanova i la Geltrú.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-ink/85">
              Nuestros dos puntos de venta están repartidos por el recinto para dar servicio tanto a los campistas de
              parcela como a los de bungalow y mobilhome.
            </p>
            <p className="hand mt-9 -rotate-3 text-[1.7rem] md:text-[2rem]">
              Camping good vibes <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
            </p>
            <PalmSketch className="pointer-events-none absolute -right-2 -top-20 hidden h-56 text-ink/50 lg:block" />
          </div>
        </div>
        <TornEdge side="bottom" seed={639} className="text-truck-light" />
      </section>

      {/* Mapa */}
      <section aria-labelledby="mapa-camping" className="bg-paper pb-24 pt-24">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="flex flex-col items-center text-center">
            <h2 id="mapa-camping" className="hand text-[2.3rem] md:text-[2.6rem]">
              Encuéntranos en el camping
            </h2>
            <Scribble className="mt-1 w-32 text-ink" />
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80">
              Estamos dentro del Camping Vilanova Park, a las afueras de Vilanova i la Geltrú y a pocos minutos de la playa.
            </p>
          </div>
          <div className="mt-12 h-72 overflow-hidden md:h-96" style={tornClip(651, undefined, 1.2, 1.5)}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5293779537687!2d1.6928816!3d41.2320253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4986a70234dd9%3A0xe7932b446d313350!2sVilanova%20Park!5e0!3m2!1ses!2ses!4v1782665372822!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "sepia(.25) saturate(.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa del Camping Vilanova Park"
            />
          </div>
          <div className="mt-10 flex justify-center">
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn-paper bg-truck text-paper-light">
              Cómo llegar <MapPin size={16} />
            </a>
          </div>
        </div>
      </section>

      <MoreProjects current="truck" />
    </main>
    <Footer />
  </div>
);

export default FoodTruck;
