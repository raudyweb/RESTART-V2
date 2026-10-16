import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_URL, abs, breadcrumb } from "@/lib/site";
import PageHero from "@/components/paper/PageHero";
import Reveal from "@/components/paper/Reveal";
import { HandHeart, Scribble, TornEdge, tornClip } from "@/components/paper/Paper";
import heroImg from "@/assets/v2/arco-barra.webp";
import parejaImg from "@/assets/v2/nosotros/pareja.webp";
import latteImg from "@/assets/v2/nosotros/latte-art.webp";
import baristaImg from "@/assets/v2/nosotros/barista.webp";
import terrazaImg from "@/assets/v2/nosotros/terraza.webp";
import benedictImg from "@/assets/v2/benedict-mesa.webp";
import fachadaImg from "@/assets/v2/fachada.webp";
import truckImg from "@/assets/v2/foodtruck/truck-logo.webp";
import macuImg from "@/assets/v2/macu/rincon-gluten-free.webp";
import tropicalImg from "@/assets/v2/rincon-tropical.webp";

/* ---------- Contenido ---------- */

const proyectos = [
  {
    tag: "La casa madre",
    title: "Re-Start Brunch & Coffee",
    text: "Junto a la Plaza del Ayuntamiento de Vilanova i la Geltrú. Sigue siendo el corazón del proyecto y el lugar donde nació nuestra filosofía: una experiencia cercana, productos de calidad y un servicio cuidado al detalle.",
    img: fachadaImg,
    alt: "Fachada amarilla de Re-Start Coffee",
    link: { to: "/#mapa", label: "Cómo llegar" },
  },
  {
    tag: "Obrador propio",
    title: "Macu Bakery Gluten Free",
    text: "Nuestro obrador artesanal, donde elaboramos repostería sin gluten con el mismo compromiso por la calidad que nos ha acompañado desde el primer día.",
    img: macuImg,
    alt: "Rincón Gluten Free de Macu Bakery con neón",
    link: { to: "/macu-bakery", label: "Ver Macu Bakery" },
  },
  {
    tag: "Al aire libre",
    title: "Camping Vilanova Park",
    text: "Dos puntos de venta dentro del camping, con la misma filosofía: calidad, cercanía y una experiencia única a cada cliente.",
    img: truckImg,
    alt: "Food truck turquesa de Re-Start",
    link: { to: "/food-truck", label: "Ver Food Truck" },
  },
];

const datos = [
  { big: "4.8 ★", small: "+300 reseñas en Google" },
  { big: "3", small: "proyectos: café, camping y obrador" },
  { big: "100%", small: "sin gluten en Macu" },
];

const diferencias = [
  {
    title: "El trato cercano",
    lead: "Somos una empresa familiar.",
    text: "Nos gusta conocer a nuestros clientes, escucharles y hacer que se sientan como en casa. La cercanía, la atención al detalle y el buen servicio forman parte de nuestra identidad.",
    img: baristaImg,
    alt: "Barista de Re-Start preparando un café",
    pos: "50% 30%",
  },
  {
    title: "Una auténtica cultura del café",
    lead: "El café es una de nuestras grandes pasiones.",
    text: "Además de una amplia selección de cafés de especialidad, tenemos café en grano y molido para que disfrutes de la experiencia Re-Start en casa. En la carta, desde los clásicos imprescindibles hasta propuestas más innovadoras:",
    chips: ["Affogato", "Shakerato", "Iced latte", "Cold brew", "…y muchas más"],
    img: latteImg,
    alt: "Vertiendo leche para hacer latte art",
    pos: "50% 45%",
  },
  {
    title: "Mucho más que brunch",
    lead: "Una propuesta pensada para cualquier momento del día.",
    text: "Opciones frescas y equilibradas, elaboradas al momento:",
    chips: [
      "Bowls de yogur y açaí",
      "Pokes",
      "Huevos benedict",
      "Tostadas gourmet",
      "Bocadillos planchados",
      "Pancakes dulces y salados",
    ],
    img: benedictImg,
    alt: "Huevos benedict servidos en la mesa",
    pos: "50% 55%",
  },
  {
    title: "Un espacio saludable y acogedor",
    lead: "Calidad, comodidad y bienestar de la mano.",
    text: "Un lugar luminoso y acogedor, pensado para que disfrutes sin prisas de un gran café y de una oferta gastronómica cuidada al detalle.",
    img: tropicalImg,
    alt: "Rincón luminoso con pared amarilla, papel tropical y mesas de madera",
    pos: "50% 60%",
  },
];

/* ---------- Página ---------- */

const About = () => (
  <div className="min-h-screen overflow-x-clip">
    <SEO
      path="/sobre-nosotros"
      title="Sobre nosotros | Re-Start Coffee, cafetería familiar en Vilanova"
      description="Somos una familia apasionada por la hostelería: café de especialidad y brunch en Vilanova i la Geltrú, nuestro obrador sin gluten Macu Bakery y dos puntos en el Camping Vilanova Park."
      image="/og/sobre-nosotros.jpg"
      imageAlt="Barra de Re-Start Coffee vista desde el arco de entrada"
      preloadImage={heroImg}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Sobre nosotros",
          url: abs("/sobre-nosotros"),
          about: { "@id": `${SITE_URL}/#cafe` },
        },
        breadcrumb([
          { name: "Inicio", path: "/" },
          { name: "Sobre nosotros", path: "/sobre-nosotros" },
        ]),
      ]}
    />
    <Navbar />

    <main>
      <PageHero
        img={heroImg}
        alt="Barra de Re-Start vista a través del arco de entrada"
        imgPosition="50% 60%"
        eyebrow="Conócenos"
        title={
          <>
            Sobre
            <span className="block pl-[0.5em]">nosotros</span>
          </>
        }
        subtitle={
          <>
            Una familia, una cafetería
            <br />
            y muchas ganas de crecer
          </>
        }
      >
        <a href="#quienes" className="btn-paper">
          Conócenos <ArrowRight size={16} />
        </a>
      </PageHero>

      {/* Quiénes somos */}
      <section id="quienes" className="scroll-mt-20 bg-paper pb-20 pt-16 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal className="relative mb-6 md:mb-0">
            <div className="-rotate-2 drop-shadow-[0_12px_20px_rgba(40,30,20,0.25)]">
              <div className="aspect-[4/3] overflow-hidden" style={tornClip(701, undefined, 1.8, 2)}>
                <img
                  src={parejaImg}
                  alt="Los responsables de Re-Start brindando con dos cafés en la barra"
                  loading="lazy"
                  className="h-full w-full object-cover object-[50%_35%]"
                />
              </div>
            </div>
            <p className="hand absolute -bottom-8 right-2 rotate-[-6deg] text-[1.6rem] md:-right-4 md:text-[1.9rem]">
              Somos familia <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">Quiénes somos</h2>
            <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />
            <p className="hand mt-7 -rotate-1 text-[1.5rem] leading-tight md:text-[1.75rem]">
              “Creemos en el trato cercano, en los productos elaborados con cariño y en la mejora continua”
            </p>
            <p className="mt-7 text-[16px] leading-[1.9] text-ink/85">
              Somos una <strong>familia apasionada por la hostelería</strong>, convencida de que los pequeños detalles
              marcan la diferencia. Desde nuestros inicios trabajamos cada día con la ilusión de seguir creciendo,
              mejorando y ofreciendo la mejor experiencia posible a quienes nos visitan.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink/85">
              Cada café que servimos, cada brunch que preparamos y cada receta que sale de nuestro obrador refleja
              nuestro <strong>compromiso con la calidad</strong> y nuestra pasión por este oficio.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink/85">
              Queremos seguir evolucionando sin perder nuestra esencia: ser un lugar acogedor donde disfrutar de un buen
              café, una excelente propuesta gastronómica y un <strong>ambiente familiar</strong> que haga que siempre
              quieras volver.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Datos rápidos */}
      <section aria-label="Re-Start en cifras" className="relative bg-sage py-12 md:py-14">
        <TornEdge side="top" seed={709} className="text-sage" />
        <ul className="mx-auto grid max-w-4xl grid-cols-3 gap-x-4 px-5 md:px-10">
          {datos.map((d, i) => (
            <Reveal as="li" key={d.small} delay={i * 90} className="text-center">
              <p className="hand text-[2rem] leading-none sm:text-[2.4rem] md:text-[2.8rem]">{d.big}</p>
              <p className="label-type mx-auto mt-3 max-w-[14rem] text-[11px] leading-snug sm:text-[12px] md:text-[13px]">{d.small}</p>
            </Reveal>
          ))}
        </ul>
        <TornEdge side="bottom" seed={711} className="text-sage" />
      </section>

      {/* Nuestra historia: lo que somos hoy */}
      <section aria-labelledby="historia" className="bg-paper-light py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 id="historia" className="hand text-[2.3rem] md:text-[2.8rem]">
              Nuestra historia
            </h2>
            <Scribble className="mt-1 w-32 text-ink" />
            <p className="mt-6 text-[16px] leading-[1.9] text-ink/85">
              Empezó con una idea sencilla pero llena de ilusión: crear un espacio diferente en Vilanova i la Geltrú
              donde disfrutar de <strong>café de especialidad, bowls de yogur y açaí, tostadas y desayunos</strong>{" "}
              elaborados con productos de calidad.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink/85">
              Lo que empezó como una humilde cafetería familiar fue creciendo gracias al apoyo de nuestros clientes, a
              nuestra pasión por la hostelería y a las ganas constantes de mejorar. Hoy, Re-Start es{" "}
              <strong>mucho más que una cafetería</strong>:
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
            {proyectos.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 120} className="flex flex-col">
                <div className={`${i % 2 ? "rotate-2" : "-rotate-2"} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}>
                  <div className="aspect-[4/3] overflow-hidden" style={tornClip(720 + i * 7)}>
                    <img src={p.img} alt={p.alt} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <p className="label-type mt-7 text-xs font-bold text-sage-deep">{p.tag}</p>
                <h3 className="hand mt-2 text-[1.8rem] leading-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-ink/85">{p.text}</p>
                <Link
                  to={p.link.to}
                  className="mt-4 inline-flex w-fit items-center gap-2 border-b border-ink/30 pb-0.5 text-sm font-bold hover:border-ink"
                >
                  {p.link.label} <ArrowRight size={14} />
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mx-auto mt-16 max-w-2xl text-center">
            <p className="hand -rotate-1 text-[1.5rem] leading-tight md:text-[1.8rem]">
              Siempre evolucionando, con la misma ilusión del primer día{" "}
              <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
            </p>
            <p className="mt-5 text-[16px] leading-[1.9] text-ink/85">
              Agradecidos por la confianza de quienes nos acompañan en este camino y con ganas de seguir creando
              experiencias únicas alrededor del café, el brunch y la repostería artesanal.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Qué nos hace diferentes */}
      <section aria-labelledby="diferentes" className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <div className="text-center">
            <h2 id="diferentes" className="label-type text-xl font-bold md:text-2xl">
              ¿Qué nos hace diferentes?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
              Creemos que una cafetería es mucho más que un lugar donde tomar café. Queremos que cada visita sea una
              experiencia agradable, cercana y memorable.
            </p>
          </div>

          <div className="mt-16 space-y-20 md:space-y-24">
            {diferencias.map((d, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={d.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <Reveal className={flip ? "md:order-2" : ""}>
                    <div className={`${flip ? "rotate-2" : "-rotate-2"} drop-shadow-[0_10px_16px_rgba(40,30,20,0.2)]`}>
                      <div className="aspect-[4/3] overflow-hidden" style={tornClip(760 + i * 11, undefined, 1.8, 2)}>
                        <img
                          src={d.img}
                          alt={d.alt}
                          loading="lazy"
                          style={{ objectPosition: d.pos }}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={120} className={flip ? "md:order-1" : ""}>
                    <h3 className="hand text-[2rem] leading-tight md:text-[2.3rem]">{d.title}</h3>
                    <Scribble className="mt-1 w-24 text-ink" />
                    <p className="mt-6 text-[16px] font-bold leading-relaxed">{d.lead}</p>
                    <p className="mt-2 text-[16px] leading-[1.9] text-ink/85">{d.text}</p>
                    {d.chips && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {d.chips.map((c) => (
                          <li
                            key={c}
                            className="rounded-full border border-ink/25 bg-paper-light px-3.5 py-1.5 text-[13px]"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section aria-labelledby="ubicacion" className="relative bg-sage-light py-20 md:py-24">
        <TornEdge side="top" seed={791} className="text-sage-light" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
          <Reveal className="md:order-2">
            <div className="rotate-2 drop-shadow-[0_12px_20px_rgba(40,30,20,0.22)]">
              <div className="aspect-[4/5] overflow-hidden" style={tornClip(797, undefined, 1.8, 2)}>
                <img
                  src={terrazaImg}
                  alt="Terraza de Re-Start en la calle, con flores y gente desayunando"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:order-1">
            <h2 id="ubicacion" className="label-type text-xl font-bold leading-snug md:text-2xl">
              Una ubicación
              <br />
              privilegiada
            </h2>
            <span aria-hidden="true" className="mt-5 block h-[2px] w-8 bg-ink" />
            <p className="mt-7 text-[16px] leading-[1.9] text-ink/85">
              Estamos en pleno corazón de Vilanova i la Geltrú, junto a la <strong>Plaza del Ayuntamiento</strong>: un
              entorno perfecto para disfrutar de un desayuno, un brunch o una pausa durante el día.
            </p>
            <p className="mt-4 text-[16px] leading-[1.9] text-ink/85">Con terraza y dog-friendly.</p>
            <Link to="/#mapa" className="btn-paper mt-9 w-fit bg-ink text-paper-light">
              Cómo llegar <MapPin size={16} />
            </Link>
          </Reveal>
        </div>
        <TornEdge side="bottom" seed={799} className="text-sage-light" />
      </section>

      {/* Cierre */}
      <section className="bg-paper pb-24 pt-24 text-center">
        <Reveal className="mx-auto max-w-xl px-5">
          <h2 className="hand text-[2.4rem] leading-tight md:text-[2.9rem]">
            ¿Te animas a{" "}
            <span className="whitespace-nowrap">
              venir? <HandHeart className="h-[0.65em] w-[0.7em] -translate-y-1" />
            </span>
          </h2>
          <Scribble className="mx-auto mt-1 w-36 text-ink" />
          <p className="mt-6 text-[16px] leading-relaxed text-ink/85">
            Sin reserva y sin protocolo: solo ven. Abrimos de lunes a sábado.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="btn-paper bg-ink text-paper-light">
              Ver la carta <ArrowRight size={16} />
            </a>
            <Link to="/#horarios" className="btn-paper border border-ink/25 bg-transparent">
              Ver horarios
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
