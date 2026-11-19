import type React from "react";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { SITE_URL, abs, breadcrumb } from "@/lib/site";
import PageHero from "@/components/paper/PageHero";
import MoreProjects from "@/components/paper/MoreProjects";
import VisitBlock from "@/components/paper/VisitBlock";
import {
  HandHeart,
  Scribble,
  TornEdge,
  tornClip,
} from "@/components/paper/Paper";
import { href, useLang, usePick } from "@/i18n";
import { PRODUCTS, T, VALUE_ICONS } from "./macu-i18n";
import macuLogo from "@/assets/MACULOGO.webp";
import heroImg from "@/assets/v2/macu/horno-barras.webp";
import amasandoImg from "@/assets/v2/macu/amasando.webp";
import formandoImg from "@/assets/v2/macu/formando.webp";
import sacandoImg from "@/assets/v2/macu/sacando-horno.webp";
import bolsitasImg from "@/assets/v2/macu/galletas-bolsitas.webp";
import fachadaImg from "@/assets/v2/macu/fachada-macu.webp";

const SHOP = "https://macuglutenfree.com/tienda/";
const ORDERS = "https://macuglutenfree.com/encargos/";
const IG = "https://instagram.com/macubakery_glutenfree";

const contacts = [
  {
    icon: MapPin,
    label: "Carrer del Col·legi, 35 · 08800 Vilanova i la Geltrú",
    href: "https://maps.app.goo.gl/DHLKVEp9WPZuMdg8A",
    external: true,
  },
  { icon: Phone, label: "+34 611 77 63 20", href: "tel:+34611776320" },
  {
    icon: Mail,
    label: "macuglutenfree@gmail.com",
    href: "mailto:macuglutenfree@gmail.com",
  },
  {
    icon: Instagram,
    label: "@macubakery_glutenfree",
    href: IG,
    external: true,
  },
];

const MacuBakery = () => {
  const t = usePick()(T);
  const lang = useLang();
  const url = href("macu", lang);
  return (
    <div className="min-h-screen overflow-x-clip">
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        image="/og/macu-bakery-v2.jpg"
        imageAlt={t.ogAlt}
        preloadImage={heroImg}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Bakery",
            "@id": `${SITE_URL}/macu-bakery#bakery`,
            inLanguage: lang,
            name: "Macu Gluten Free Bakery",
            url: abs(url),
            image: [abs("/og/macu-bakery-v2.jpg")],
            description: t.ldDesc,
            telephone: "+34 611 77 63 20",
            email: "macuglutenfree@gmail.com",
            servesCuisine: t.cuisine,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Carrer del Col·legi, 35",
              postalCode: "08800",
              addressLocality: "Vilanova i la Geltrú",
              addressRegion: "Barcelona",
              addressCountry: "ES",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 41.2235,
              longitude: 1.7256,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Wednesday", "Thursday", "Friday"],
                opens: "09:30",
                closes: "13:30",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "13:00",
              },
            ],
            sameAs: [
              "https://macuglutenfree.com/",
              "https://instagram.com/macubakery_glutenfree",
            ],
            parentOrganization: { "@id": `${SITE_URL}/#cafe` },
          },
          breadcrumb([
            { name: t.home, path: href("home", lang) },
            { name: "Macu Bakery", path: url },
          ]),
        ]}
      />
      <Navbar />

      <main>
        <PageHero
          img={heroImg}
          alt={t.heroAlt}
          imgPosition="50% 55%"
          eyebrow={t.eyebrow}
          title={
            <>
              Macu <span className="block pl-[0.5em]">Bakery</span>
            </>
          }
          subtitle={
            <>
              {t.subtitle[0]}
              <br />
              {t.subtitle[1]}
            </>
          }
        >
          <a
            href={SHOP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-paper"
          >
            {t.shop} <ShoppingBag size={16} />
          </a>
          <a href="#visita-macu" className="btn-ghost-light">
            {t.visit} <MapPin size={16} />
          </a>
        </PageHero>

        {/* Intro */}
        <section className="bg-paper pb-20 pt-16 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-16 md:px-10">
            <div className="mx-auto w-56 -rotate-3 drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)] md:w-full md:max-w-xs">
              <div
                className="aspect-[4/3] overflow-hidden"
                style={tornClip(531, undefined, 2.4, 3)}
              >
                <img
                  src={macuLogo}
                  alt={t.logoAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="hand -rotate-2 text-[1.7rem] leading-tight md:text-[2rem]">
                {t.quote}
              </p>
              <p className="mt-7 text-[15px] leading-[1.9] text-ink/85">
                {t.intro1}
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-ink/85">
                {t.intro2}
              </p>
            </div>
          </div>
        </section>

        {/* Productos */}
        <section
          aria-labelledby="horno"
          className="relative bg-macu pb-20 pt-16 text-paper-light md:pb-24"
        >
          <TornEdge side="top" seed={541} className="text-macu" />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-col items-center text-center">
              <h2 id="horno" className="hand text-[2.3rem] md:text-[2.8rem]">
                {t.ovenTitle}
              </h2>
              <Scribble className="mt-1 w-32 text-paper-light" />
            </div>

            <ul className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {t.products.map((p, i) => (
                <li
                  key={p.title}
                  className="flex flex-col"
                  data-reveal=""
                  style={
                    { "--reveal-delay": `${i * 100}ms` } as React.CSSProperties
                  }
                >
                  <div
                    className={`${i % 2 ? "rotate-1" : "-rotate-1"} drop-shadow-[0_10px_16px_rgba(0,0,0,0.3)]`}
                  >
                    <div
                      className="aspect-[4/3] overflow-hidden sm:aspect-[4/5]"
                      style={tornClip(PRODUCTS[i].seed)}
                    >
                      <img
                        src={PRODUCTS[i].img}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="label-type mt-6 text-sm font-bold">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.8] text-paper-light/85">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <TornEdge side="bottom" seed={547} className="text-macu" />
        </section>

        {/* El obrador */}
        <section className="bg-paper py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
            <div className="relative mx-auto h-[440px] w-full max-w-md md:h-[520px]">
              <div className="absolute left-0 top-0 w-[58%] -rotate-3 drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)]">
                <div
                  className="aspect-[3/4] overflow-hidden"
                  style={tornClip(561)}
                >
                  <img
                    src={amasandoImg}
                    alt={t.workAlts[0]}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute right-0 top-[14%] w-[52%] rotate-2 drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)]">
                <div
                  className="aspect-[3/4] overflow-hidden"
                  style={tornClip(563)}
                >
                  <img
                    src={formandoImg}
                    alt={t.workAlts[1]}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-[18%] w-[50%] rotate-[4deg] drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)]">
                <div
                  className="aspect-[4/3] overflow-hidden"
                  style={tornClip(569)}
                >
                  <img
                    src={sacandoImg}
                    alt={t.workAlts[2]}
                    loading="lazy"
                    className="h-full w-full object-cover object-[50%_60%]"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
                {t.workTitle[0]}
                <br />
                {t.workTitle[1]}
              </h2>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-ink"
              />
              <p className="mt-7 text-[15px] leading-[1.9] text-ink/85">
                {t.work1}
              </p>
              <p className="mt-4 text-[15px] leading-[1.9] text-ink/85">
                {t.work2}
              </p>
              <p className="hand mt-9 -rotate-3 text-[1.6rem] leading-tight md:text-[1.9rem]">
                {t.workHand[0]}
                <br />
                {t.workHand[1]}{" "}
                <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
              </p>
            </div>
          </div>
        </section>

        {/* Por qué Macu */}
        <section
          aria-labelledby="por-que"
          className="relative bg-macu-light py-16 md:py-20"
        >
          <TornEdge side="top" seed={577} className="text-macu-light" />
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <h2
              id="por-que"
              className="label-type text-center text-xl font-bold md:text-2xl"
            >
              {t.whyTitle}
            </h2>
            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.values.map(({ title, text }, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <li
                    key={title}
                    className="text-center"
                    data-reveal=""
                    style={
                      { "--reveal-delay": `${i * 90}ms` } as React.CSSProperties
                    }
                  >
                    <Icon
                      size={36}
                      strokeWidth={1.25}
                      className="mx-auto text-macu"
                      aria-hidden="true"
                    />
                    <h3 className="hand mt-4 text-[1.45rem]">{title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.8] text-ink/80">
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <TornEdge side="bottom" seed={579} className="text-macu-light" />
        </section>

        {/* Tienda online y encargos */}
        <section className="bg-paper-light py-20 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] md:px-10">
            <div className="order-2 md:order-1">
              <h2 className="hand text-[2.3rem] leading-none md:text-[2.7rem]">
                {t.homeTitle}
              </h2>
              <Scribble className="mt-1 w-36 text-ink" />
              <p className="mt-7 max-w-lg text-[15px] leading-[1.9] text-ink/85">
                {t.homeText}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={SHOP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-paper bg-macu text-paper-light"
                >
                  {t.shop} <ShoppingBag size={16} />
                </a>
                <a
                  href={ORDERS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-paper border border-ink/25 bg-transparent"
                >
                  {t.order} <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="order-1 mx-auto w-full max-w-sm rotate-2 drop-shadow-[0_10px_18px_rgba(40,30,20,0.22)] md:order-2">
              <div
                className="aspect-[4/5] overflow-hidden"
                style={tornClip(587)}
              >
                <img
                  src={bolsitasImg}
                  alt={t.bagsAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <VisitBlock
          id="visita-macu"
          title={t.visitTitle}
          intro={t.visitIntro}
          img={fachadaImg}
          imgAlt={t.facadeAlt}
          hours={t.hours}
          hoursNote={t.hoursNote}
          contacts={contacts}
          mapsUrl="https://maps.app.goo.gl/DHLKVEp9WPZuMdg8A"
          mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.9201476357885!2d1.7255711999999996!3d41.2235106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387fb6cf6d883%3A0xf1f199113b8424a2!2sMACU%20Gluten%20Free%20Bakery!5e0!3m2!1ses!2ses!4v1782665049933!5m2!1ses!2ses"
          mapTitle={t.mapTitle}
          buttonClass="bg-macu text-paper-light"
        />

        <MoreProjects current="macu" />
      </main>
      <Footer />
    </div>
  );
};

export default MacuBakery;
