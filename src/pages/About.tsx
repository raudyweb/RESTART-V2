import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImg from "@/assets/about.jpg";
import terraceImg from "@/assets/v2/sala-arcos.jpg";
import interiorImg from "@/assets/Acogedor2.jpg";
import facadeImg from "@/assets/v2/fachada.jpg";
import tableImg from "@/assets/Acogedor.jpg";
import SEO from "@/components/SEO";

const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
};

const FadeIn = ({ children, delay = 0, direction = "up" }: { children: React.ReactNode; delay?: number; direction?: "up" | "left" | "right" | "none" }) => {
  const { ref, inView } = useInView();
  const translate = direction === "up" ? "translate-y-8" : direction === "left" ? "-translate-x-8" : direction === "right" ? "translate-x-8" : "";
  return (
<div ref={ref}>
  {children}
</div>
  );
};

const diferencias = [
  { title: "El trato cercano", text: "Somos una empresa familiar y nos gusta conocer a nuestros clientes, escucharles y hacer que se sientan como en casa. La cercanía, la atención al detalle y el buen servicio forman parte de nuestra identidad." },
  { title: "Una auténtica cultura del café", text: "El café es una de nuestras grandes pasiones. Ofrecemos una amplia selección de especialidades: Affogato, Shakerato, Iced Latte, Cold Brew y muchas más. También disponemos de café en grano y molido para disfrutar de la experiencia RE-START en casa." },
  { title: "Mucho más que brunch", text: "Bowls de yogur y açaí, pokes, huevos Benedict, tostadas gourmet, bocadillos planchados, pancakes dulces y salados... Una propuesta pensada para cualquier momento del día, elaborada al momento con productos de calidad." },
  { title: "Siempre evolucionando", text: "Nuestra historia no deja de crecer. Además de nuestra cafetería principal, contamos con nuestro obrador propio MACU BAKERY Gluten Free y dos puntos de venta en el Camping Vilanova Park, manteniendo siempre la misma filosofía." },
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const images = [interiorImg, terraceImg, tableImg];

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
  title="Sobre Nosotros | Restart Coffee"
  description="Conoce la historia de Restart Coffee, nuestro café de especialidad, el proyecto Food Truck y el obrador artesanal MACU Bakery."
/>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={facadeImg} alt="Fachada Restart Coffee" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ${heroLoaded ? "scale-105" : "scale-100"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 container px-6 pb-14">
          <p className={`text-white/70 text-xs tracking-[0.35em] uppercase mb-3 font-medium transition-all duration-700 delay-300 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Conócenos más</p>
          <h1 className={`font-display text-4xl md:text-6xl font-semibold text-white leading-tight max-w-2xl transition-all duration-700 delay-500 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Sobre Nosotros</h1>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Quiénes somos</p>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/80 italic mb-6">"Creemos en el trato cercano, en los productos elaborados con cariño y en la mejora continua."</p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-muted-foreground leading-relaxed mb-4">Somos una familia apasionada por la hostelería, convencida de que los pequeños detalles marcan la diferencia. Desde nuestros inicios, trabajamos cada día con la ilusión de seguir creciendo, mejorando y ofreciendo la mejor experiencia posible a quienes nos visitan.</p>
            <p className="text-muted-foreground leading-relaxed">Nuestro objetivo es seguir evolucionando sin perder nuestra esencia: ser un lugar acogedor donde disfrutar de un buen café, una excelente propuesta gastronómica y un ambiente familiar que haga que nuestros clientes siempre quieran volver.</p>
          </FadeIn>
        </div>
      </section>

      {/* NUESTRA HISTORIA */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden w-full md:max-w-md mx-auto aspect-[4/3]">
                <img src={aboutImg} alt="Restart Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-medium">Nuestra historia</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">Desde 2022, creciendo<br />sin perder la esencia</h2>
                <p className="text-white/70 leading-relaxed mb-4">Nuestra historia comenzó en 2022 con una idea sencilla pero llena de ilusión: crear un espacio diferente en Vilanova i la Geltrú donde disfrutar de café de especialidad, bowls de yogur y açaí, tostadas y desayunos elaborados con productos de calidad.</p>
                <p className="text-white/70 leading-relaxed mb-4">Lo que empezó como una humilde cafetería familiar fue creciendo gracias al apoyo de nuestros clientes, a nuestra pasión por la hostelería y a las ganas constantes de mejorar y evolucionar.</p>
                <p className="text-white/70 leading-relaxed">Hoy, RE-START es mucho más que una cafetería. Con el tiempo hemos ampliado nuestra actividad con nuevos proyectos: dos puntos de venta en el Camping Vilanova Park y nuestro propio obrador artesanal, MACU BAKERY Gluten Free.</p>
              </div>
            </FadeIn>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
  <a href="/food-truck" className="px-6 py-3 rounded-full bg-white text-foreground font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm text-center">Food Truck Camping Vilanova Park</a>
  <a href="/macu-bakery" className="px-6 py-3 rounded-full border border-white/30 text-white font-medium hover:border-white hover:scale-105 transition-all duration-300 text-sm text-center">MACU BAKERY Gluten Free</a>
</div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="py-16 bg-background">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left" delay={150}>
              <div className="order-2 md:order-1">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Una ubicación privilegiada</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-snug">En el corazón de<br />Vilanova i la Geltrú</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">Nos encontramos junto a la Plaza del Ayuntamiento de Vilanova i la Geltrú, en un entorno perfecto para disfrutar de un desayuno, un brunch o una pausa durante el día.</p>
                <p className="text-muted-foreground leading-relaxed">Nuestra casa madre, RE-START Brunch & Coffee, sigue siendo el corazón del proyecto y el lugar donde nació nuestra filosofía de ofrecer una experiencia cercana, productos de calidad y un servicio cuidado al detalle.</p>
                <a href="/#mapa" className="inline-block mt-8 px-6 py-3 rounded-full bg-foreground text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm">Cómo llegar</a>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="order-1 md:order-2 rounded-2xl overflow-hidden w-full md:max-w-md mx-auto aspect-[4/3]">
                <img src={terraceImg} alt="Terraza Restart Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QUÉ NOS HACE DIFERENTES */}
      <section className="py-20 bg-foreground">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3 font-medium">Lo que nos define</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">¿Qué nos hace diferentes?</h2>
              <p className="text-white/60 text-sm max-w-xl mx-auto">En RE-START COFFEE creemos que una cafetería es mucho más que un lugar donde tomar café. Queremos que cada visita sea una experiencia agradable, cercana y memorable.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {diferencias.map((d, i) => (
              <FadeIn key={d.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{d.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{d.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EL ESPACIO — CARRUSEL */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3 font-medium">El espacio</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Un espacio saludable y acogedor</h2>
              <p className="text-white/60 mt-3 text-sm max-w-xl mx-auto">Un lugar luminoso, acogedor y pensado para que puedas disfrutar sin prisas de un gran café y de una oferta gastronómica cuidada al detalle.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="max-w-3xl mx-auto">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[16/9]"
                onTouchStart={(e) => {
                  (e.currentTarget as any)._touchStartX = e.touches[0].clientX;
                }}
                onTouchEnd={(e) => {
                  const startX = (e.currentTarget as any)._touchStartX ?? 0;
                  const diff = startX - e.changedTouches[0].clientX;
                  if (Math.abs(diff) > 40) {
                    if (diff > 0) setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1));
                    else setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1));
                  }
                }}
              >
                {images.map((src, i) => (
                  <img key={i} src={src} alt={`Espacio ${i + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSlide === i ? "opacity-100" : "opacity-0"}`} />
                ))}
                <button onClick={() => setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-lg hover:scale-110">&#8592;</button>
                <button onClick={() => setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1))} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-lg hover:scale-110">&#8594;</button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setActiveSlide(i)} className={`transition-all duration-300 rounded-full ${activeSlide === i ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2"}`} />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-background text-center">
        <div className="container px-6 max-w-xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">¿Te animás a venir?</h2>
            <p className="text-muted-foreground mb-8">Estamos abiertos cada día. Sin reserva, sin protocolo. Solo ven.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/Carta.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-full bg-foreground text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm">Ver la carta</a>
              <a href="/#mapa" className="px-8 py-3.5 rounded-full border border-foreground/30 text-foreground font-medium hover:border-foreground hover:scale-105 transition-all duration-300 text-sm">Cómo llegar</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
