import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_URL, abs, breadcrumb } from "@/lib/site";
import PageHero from "@/components/paper/PageHero";
import Reveal from "@/components/paper/Reveal";
import {
  HandHeart,
  Scribble,
  TornEdge,
  tornClip,
} from "@/components/paper/Paper";
import { href, useLang, usePick } from "@/i18n";
import { T } from "./about-i18n";
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

/* ---------- Fotos (los textos están en about-i18n.tsx) ---------- */

const PROJECTS = [
  { img: fachadaImg, page: "home", hash: "mapa" },
  { img: macuImg, page: "macu" },
  { img: truckImg, page: "truck" },
] as const;

const DIFFS = [
  { img: baristaImg, pos: "50% 30%" },
  { img: latteImg, pos: "50% 45%" },
  { img: benedictImg, pos: "50% 55%" },
  { img: tropicalImg, pos: "50% 60%" },
];

/* ---------- Página ---------- */

const About = () => {
  const t = usePick()(T);
  const lang = useLang();
  const url = href("about", lang);
  return (
    <div className="min-h-screen overflow-x-clip">
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        image="/og/sobre-nosotros-v2.jpg"
        imageAlt={t.ogAlt}
        preloadImage={heroImg}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: t.name,
            inLanguage: lang,
            url: abs(url),
            about: { "@id": `${SITE_URL}/#cafe` },
          },
          breadcrumb([
            { name: t.home, path: href("home", lang) },
            { name: t.name, path: url },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <PageHero
          img={heroImg}
          alt={t.heroAlt}
          imgPosition="50% 60%"
          eyebrow={t.eyebrow}
          title={
            <>
              {t.title[0]}{" "}
              <span className="block pl-[0.5em]">{t.title[1]}</span>
            </>
          }
          subtitle={
            <>
              {t.subtitle[0]}
              <br />
              {t.subtitle[1]}
            </>
          }
        />

        {/* Quiénes somos */}
        <section
          id="quienes"
          className="scroll-mt-20 bg-paper pb-20 pt-16 md:pb-24 md:pt-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
            <Reveal className="relative mb-6 md:mb-0">
              <div className="-rotate-2 drop-shadow-[0_12px_20px_rgba(40,30,20,0.25)]">
                <div
                  className="aspect-[4/3] overflow-hidden"
                  style={tornClip(701, undefined, 1.8, 2)}
                >
                  <img
                    src={parejaImg}
                    alt={t.coupleAlt}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_35%]"
                  />
                </div>
              </div>
              <p className="hand absolute -bottom-8 right-2 rotate-[-6deg] text-[1.6rem] md:-right-4 md:text-[1.9rem]">
                {t.family}{" "}
                <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
                {t.whoTitle}
              </h2>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-ink"
              />
              <p className="hand mt-7 -rotate-1 text-[1.5rem] leading-tight md:text-[1.75rem]">
                {t.whoQuote}
              </p>
              {t.who.map((p, i) => (
                <p
                  key={i}
                  className={`${i ? "mt-4" : "mt-7"} text-[16px] leading-[1.9] text-ink/85`}
                >
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Datos rápidos */}
        <section
          aria-label={t.statsLabel}
          className="relative bg-sage py-12 md:py-14"
        >
          <TornEdge side="top" seed={709} className="text-sage" />
          <ul className="mx-auto grid max-w-4xl grid-cols-3 gap-x-4 px-5 md:px-10">
            {t.stats.map((d, i) => (
              <Reveal
                as="li"
                key={d.small}
                delay={i * 90}
                className="text-center"
              >
                <p className="hand text-[2rem] leading-none sm:text-[2.4rem] md:text-[2.8rem]">
                  {d.big}
                </p>
                <p className="label-type mx-auto mt-3 max-w-[14rem] text-[11px] leading-snug sm:text-[12px] md:text-[13px]">
                  {d.small}
                </p>
              </Reveal>
            ))}
          </ul>
          <TornEdge side="bottom" seed={711} className="text-sage" />
        </section>

        {/* Nuestra historia: lo que somos hoy */}
        <section
          aria-labelledby="historia"
          className="bg-paper-light py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <h2 id="historia" className="hand text-[2.3rem] md:text-[2.8rem]">
                {t.storyTitle}
              </h2>
              <Scribble className="mt-1 w-32 text-ink" />
              {t.story.map((p, i) => (
                <p
                  key={i}
                  className={`${i ? "mt-4" : "mt-6"} text-[16px] leading-[1.9] text-ink/85`}
                >
                  {p}
                </p>
              ))}
            </Reveal>

            <ul className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8">
              {t.projects.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 120}
                  className="flex flex-col"
                >
                  <div
                    className={`${i % 2 ? "rotate-2" : "-rotate-2"} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}
                  >
                    <div
                      className="aspect-[4/3] overflow-hidden"
                      style={tornClip(720 + i * 7)}
                    >
                      <img
                        src={PROJECTS[i].img}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="label-type mt-7 text-xs font-bold text-sage-deep">
                    {p.tag}
                  </p>
                  <h3 className="hand mt-2 text-[1.8rem] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-ink/85">
                    {p.text}
                  </p>
                  <Link
                    to={href(
                      PROJECTS[i].page,
                      lang,
                      "hash" in PROJECTS[i] ? PROJECTS[i].hash : undefined,
                    )}
                    className="mt-4 inline-flex w-fit items-center gap-2 border-b border-ink/30 pb-0.5 text-sm font-bold hover:border-ink"
                  >
                    {p.link} <ArrowRight size={14} />
                  </Link>
                </Reveal>
              ))}
            </ul>

            <Reveal className="mx-auto mt-16 max-w-2xl text-center">
              <p className="hand -rotate-1 text-[1.5rem] leading-tight md:text-[1.8rem]">
                {t.evolving}{" "}
                <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
              </p>
              <p className="mt-5 text-[16px] leading-[1.9] text-ink/85">
                {t.thanks}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Qué nos hace diferentes */}
        <section
          aria-labelledby="diferentes"
          className="bg-paper py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="text-center">
              <h2
                id="diferentes"
                className="label-type text-xl font-bold md:text-2xl"
              >
                {t.diffTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
                {t.diffText}
              </p>
            </div>

            <div className="mt-16 space-y-20 md:space-y-24">
              {t.diffs.map((d, i) => {
                const flip = i % 2 === 1;
                return (
                  <div
                    key={d.title}
                    className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
                  >
                    <Reveal className={flip ? "md:order-2" : ""}>
                      <div
                        className={`${flip ? "rotate-2" : "-rotate-2"} drop-shadow-[0_10px_16px_rgba(40,30,20,0.2)]`}
                      >
                        <div
                          className="aspect-[4/3] overflow-hidden"
                          style={tornClip(760 + i * 11, undefined, 1.8, 2)}
                        >
                          <img
                            src={DIFFS[i].img}
                            alt={d.alt}
                            loading="lazy"
                            style={{ objectPosition: DIFFS[i].pos }}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </Reveal>
                    <Reveal delay={120} className={flip ? "md:order-1" : ""}>
                      <h3 className="hand text-[2rem] leading-tight md:text-[2.3rem]">
                        {d.title}
                      </h3>
                      <Scribble className="mt-1 w-24 text-ink" />
                      <p className="mt-6 text-[16px] font-bold leading-relaxed">
                        {d.lead}
                      </p>
                      <p className="mt-2 text-[16px] leading-[1.9] text-ink/85">
                        {d.text}
                      </p>
                      {"chips" in d && d.chips && (
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
        <section
          aria-labelledby="ubicacion"
          className="relative bg-sage-light py-20 md:py-24"
        >
          <TornEdge side="top" seed={791} className="text-sage-light" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
            <Reveal className="md:order-2">
              <div className="rotate-2 drop-shadow-[0_12px_20px_rgba(40,30,20,0.22)]">
                <div
                  className="aspect-[4/5] overflow-hidden"
                  style={tornClip(797, undefined, 1.8, 2)}
                >
                  <img
                    src={terrazaImg}
                    alt={t.terraceAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:order-1">
              <h2
                id="ubicacion"
                className="label-type text-xl font-bold leading-snug md:text-2xl"
              >
                {t.placeTitle[0]}
                <br />
                {t.placeTitle[1]}
              </h2>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-ink"
              />
              <p className="mt-7 text-[16px] leading-[1.9] text-ink/85">
                {t.place}
              </p>
              <p className="mt-4 text-[16px] leading-[1.9] text-ink/85">
                {t.terrace}
              </p>
              <Link
                to={href("home", lang, "mapa")}
                className="btn-paper mt-9 w-fit bg-ink text-paper-light"
              >
                {t.projects[0].link} <MapPin size={16} />
              </Link>
            </Reveal>
          </div>
          <TornEdge side="bottom" seed={799} className="text-sage-light" />
        </section>

        {/* Cierre */}
        <section className="bg-paper pb-24 pt-24 text-center">
          <Reveal className="mx-auto max-w-xl px-5">
            <h2 className="hand text-[2.4rem] leading-tight md:text-[2.9rem]">
              {t.comeTitle[0]}{" "}
              <span className="whitespace-nowrap">
                {t.comeTitle[1]}{" "}
                <HandHeart className="h-[0.65em] w-[0.7em] -translate-y-1" />
              </span>
            </h2>
            <Scribble className="mx-auto mt-1 w-36 text-ink" />
            <p className="mt-6 text-[16px] leading-relaxed text-ink/85">
              {t.comeText}
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/Carta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-paper bg-ink text-paper-light"
              >
                {t.seeMenu} <ArrowRight size={16} />
              </a>
              <Link
                to={href("home", lang, "horarios")}
                className="btn-paper border border-ink/25 bg-transparent"
              >
                {t.seeHours}
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
