import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import camping1 from "@/assets/Camping1.jpg";
import camping2 from "@/assets/Vilanovapark1.jpg";
import camping3 from "@/assets/Camping3.jpg";
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

const detalles = [
  { title: "Café de especialidad al aire libre", text: "Llevamos la misma calidad de nuestra cafetería principal directamente al camping. Cada café que servimos sigue el mismo estándar de siempre: granos de especialidad, extracción cuidada y atención al detalle." },
  { title: "Brunch y snacks para campistas", text: "Ofrecemos una selección de desayunos, tostadas, bowls y opciones ligeras pensadas para empezar bien el día en el camping. Comodidad y calidad sin tener que salir del recinto." },
  { title: "Dos puntos de venta", text: "Contamos con dos ubicaciones dentro del Camping Vilanova Park para que siempre tengas RE-START cerca, tanto si estás en bungalow como en parcela." },
  { title: "El mismo espíritu RE-START", text: "Fuera del local pero sin perder nuestra esencia. Trato cercano, producto de calidad y la misma filosofía que nos ha acompañado desde 2022." },
];

const FoodTruck = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const images = [camping1, camping2, camping3];

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
  title="Food Truck | Restart Coffee"
  description="Descubre nuestro Food Truck en el Camping Vilanova Park. Café de especialidad, brunch y la esencia de Restart Coffee también al aire libre."
/>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={camping1} alt="Food Truck Camping Vilanova Park" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ${heroLoaded ? "scale-105" : "scale-100"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 container px-6 pb-14">
          <p className={`text-white/70 text-xs tracking-[0.35em] uppercase mb-3 font-medium transition-all duration-700 delay-300 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Nuestros proyectos</p>
          <h1 className={`font-display text-4xl md:text-6xl font-semibold text-white leading-tight max-w-2xl transition-all duration-700 delay-500 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>Food Truck<br />Camping Vilanova Park</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Quiénes somos aquí</p>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/80 italic mb-6">"La experiencia RE-START, ahora también en el camping más grande de Vilanova i la Geltrú."</p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-muted-foreground leading-relaxed mb-4">Después de consolidar nuestra cafetería principal, dimos el paso de llevar RE-START al Camping Vilanova Park. Un entorno diferente, al aire libre, rodeado de naturaleza y con un público que busca calidad incluso en sus días de descanso.</p>
            <p className="text-muted-foreground leading-relaxed">Contamos con dos puntos de venta dentro del recinto para que siempre tengas a mano un buen café, un desayuno elaborado o un snack de calidad, sin renunciar a nada.</p>
          </FadeIn>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden w-full md:max-w-md mx-auto aspect-[4/3]">
                <img src={camping2} alt="Camping Vilanova Park" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-medium">Dónde estamos</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">En el corazón<br />del Camping Vilanova Park</h2>
                <p className="text-white/70 leading-relaxed mb-4">El Camping Vilanova Park es uno de los campings más grandes y completos de Cataluña, situado a pocos minutos de la playa y del centro de Vilanova i la Geltrú.</p>
                <p className="text-white/70 leading-relaxed">Nuestros dos puntos de venta están estratégicamente ubicados dentro del recinto para dar servicio tanto a los campistas de parcela como a los de bungalow y mobilhome.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* QUÉ OFRECEMOS */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">Lo que encontrarás</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">RE-START fuera del local</h2>
              <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">La misma calidad de siempre, adaptada al entorno del camping y pensada para disfrutarla al aire libre.</p>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {detalles.map((d, i) => (
              <FadeIn key={d.title} delay={i * 100}>
                <div className="bg-foreground rounded-2xl p-8 hover:opacity-90 transition-all duration-300 h-full">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{d.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{d.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3 font-medium">El ambiente</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Café con vistas al camping</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]" onTouchStart={(e) => { (e.currentTarget as any)._touchStartX = e.touches[0].clientX; }} onTouchEnd={(e) => { const diff = ((e.currentTarget as any)._touchStartX ?? 0) - e.changedTouches[0].clientX; if (Math.abs(diff) > 40) { if (diff > 0) setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1)); else setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1)); } }}>
                {images.map((src, i) => (<img key={i} src={src} alt={`Camping ${i + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSlide === i ? "opacity-100" : "opacity-0"}`} />))}
                <button onClick={() => setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-lg hover:scale-110">&#8592;</button>
                <button onClick={() => setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1))} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm text-lg hover:scale-110">&#8594;</button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">{images.map((_, i) => (<button key={i} onClick={() => setActiveSlide(i)} className={`transition-all duration-300 rounded-full ${activeSlide === i ? "bg-white w-6 h-2" : "bg-white/40 w-2 h-2"}`} />))}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* MAPA */}
      <section className="py-16 bg-background">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">Dónde estamos</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Encuéntranos en el camping</h2>
              <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">Estamos dentro del Camping Vilanova Park, uno de los campings más completos de Cataluña.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5293779537687!2d1.6928816!3d41.2320253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4986a70234dd9%3A0xe7932b446d313350!2sVilanova%20Park!5e0!3m2!1ses!2ses!4v1782665372822!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ubicación Camping Vilanova Park"
              />
            </div>
            <div className="text-center mt-6">
              <a href="https://maps.app.goo.gl/BL8ZWwjTquyxNPD16" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm">Cómo llegar</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoodTruck;
