import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import macuLogo from "@/assets/MACULOGO.png";
import macuObrador1 from "@/assets/MACU-OBRADOR1.jpg";
import macuObrador2 from "@/assets/MACU-OBRADOR2.jpg";
import macuObrador3 from "@/assets/MACU-OBRADOR3.jpg";
import macuLocal from "@/assets/MACU-LOCAL.jpg";
import macuProd1 from "@/assets/MACU-PROD1.jpg";
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

const valores = [
  { title: "100% sin gluten", text: "Todo lo que sale de MACU BAKERY es libre de gluten, sin excepciones. No es una línea especial dentro de un obrador convencional — es un obrador dedicado exclusivamente a la repostería sin gluten." },
  { title: "Elaboración artesanal", text: "Cada pieza se elabora a mano, con ingredientes seleccionados y recetas desarrolladas para que el resultado sea indistinguible de la repostería convencional en sabor y textura." },
  { title: "El corazón de RE-START", text: "MACU BAKERY es nuestro obrador propio. Toda la repostería que se sirve en RE-START Brunch & Coffee sale de aquí, garantizando frescura y calidad en cada bocado." },
  { title: "Para celíacos y no celíacos", text: "Nuestra repostería está pensada para que todo el mundo pueda disfrutarla. No hay que renunciar al sabor para cuidar la salud. Eso es lo que defendemos desde el primer día." },
];

const MacuBakery = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const images = [macuObrador1, macuObrador2, macuObrador3];

  useEffect(() => {
    const t = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
  title="MACU Bakery | Obrador sin gluten"
  description="Conoce MACU Bakery, nuestro obrador de repostería artesanal sin gluten elaborado con ingredientes de calidad y mucho mimo."
/>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <img src={macuLocal} alt="MACU BAKERY" className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ${heroLoaded ? "scale-105" : "scale-100"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="relative z-10 container px-6 pb-14">
          <p className={`text-white/70 text-xs tracking-[0.35em] uppercase mb-3 font-medium transition-all duration-700 delay-300 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Nuestros proyectos</p>
          <h1 className={`font-display text-4xl md:text-6xl font-semibold text-white leading-tight max-w-2xl transition-all duration-700 delay-500 ${heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>MACU BAKERY<br />Gluten Free</h1>
        </div>
      </section>

      {/* INTRO CON LOGO */}
      <section className="py-20 bg-background">
        <div className="container px-6 max-w-3xl mx-auto text-center">
          <FadeIn>
            <img src={macuLogo} alt="MACU BAKERY Logo" className="w-24 h-24 object-contain mx-auto mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-medium">Nuestro obrador</p>
            <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/80 italic mb-6">"Repostería artesanal sin gluten, elaborada con el mismo compromiso por la calidad que define a RE-START desde el primer día."</p>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-8" />
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-muted-foreground leading-relaxed mb-4">MACU BAKERY es el obrador propio de RE-START y el corazón de nuestra propuesta de repostería. Un espacio dedicado exclusivamente a la elaboración artesanal de productos sin gluten, donde cada receta está pensada para demostrar que prescindir del gluten no significa renunciar al sabor.</p>
            <p className="text-muted-foreground leading-relaxed">Toda la repostería que se sirve en RE-START Brunch & Coffee sale de MACU BAKERY, garantizando frescura, trazabilidad y un control total de la calidad desde el obrador hasta la mesa.</p>
          </FadeIn>
        </div>
      </section>

      {/* EL OBRADOR */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="rounded-2xl overflow-hidden w-full md:max-w-md mx-auto aspect-[4/3]">
                <img src={macuProd1} alt="Productos MACU BAKERY" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={150}>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4 font-medium">El obrador</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6 leading-snug">Donde nace toda<br />nuestra repostería</h2>
                <p className="text-white/70 leading-relaxed mb-4">MACU BAKERY no es una línea especial dentro de un obrador convencional. Es un espacio dedicado en exclusiva a la repostería sin gluten, donde la contaminación cruzada no existe y donde cada proceso está diseñado para garantizar la seguridad de las personas celíacas.</p>
                <p className="text-white/70 leading-relaxed mb-4">Cookies, panets, tartes, pancakes, muffins... Todo elaborado a mano, con ingredientes seleccionados y con el cuidado que merece quien tiene que vigilar lo que come.</p>
                <p className="text-white/70 leading-relaxed">Creemos que la repostería sin gluten puede ser tan buena — o mejor — que la convencional. MACU BAKERY existe para demostrarlo.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-medium">Lo que nos define</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Por qué MACU es diferente</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {valores.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="bg-foreground rounded-2xl p-8 hover:opacity-90 transition-all duration-300 h-full">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{v.title}</h3>
                  <p className="text-white/65 leading-relaxed text-sm">{v.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CARRUSEL OBRADOR */}
      <section className="py-16 bg-foreground">
        <div className="container px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-3 font-medium">El espacio</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white">Nuestro obrador por dentro</h2>
              <p className="text-white/60 mt-3 text-sm max-w-xl mx-auto">Un espacio pensado para elaborar con cuidado, limpieza y pasión por el producto sin gluten.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]" onTouchStart={(e) => { (e.currentTarget as any)._touchStartX = e.touches[0].clientX; }} onTouchEnd={(e) => { const diff = ((e.currentTarget as any)._touchStartX ?? 0) - e.changedTouches[0].clientX; if (Math.abs(diff) > 40) { if (diff > 0) setActiveSlide(i => (i === images.length - 1 ? 0 : i + 1)); else setActiveSlide(i => (i === 0 ? images.length - 1 : i - 1)); } }}>
                {images.map((src, i) => (<img key={i} src={src} alt={`Obrador ${i + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSlide === i ? "opacity-100" : "opacity-0"}`} />))}
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
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Encuéntranos</h2>
              <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">Visítanos en nuestro obrador y descubre de primera mano nuestra repostería sin gluten.</p>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-96 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.9201476357885!2d1.7255711999999996!3d41.2235106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387fb6cf6d883%3A0xf1f199113b8424a2!2sMACU%20Gluten%20Free%20Bakery!5e0!3m2!1ses!2ses!4v1782665049933!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ubicación MACU BAKERY"
              />
            </div>
            <div className="text-center mt-6">
              <a href="https://maps.app.goo.gl/DHLKVEp9WPZuMdg8A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 text-sm">Cómo llegar</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MacuBakery;
