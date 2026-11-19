import type React from "react";
import { ArrowDown, Coffee, MapPin, Sandwich, Store, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { breadcrumb } from "@/lib/site";
import PageHero from "@/components/paper/PageHero";
import MoreProjects from "@/components/paper/MoreProjects";
import {
  HandHeart,
  Scribble,
  TornEdge,
  tornClip,
} from "@/components/paper/Paper";
import { PalmSketch } from "@/components/paper/Sketches";
import { href, useCommon, useLang, usePick } from "@/i18n";
import { FOOD_TRUCK_HOURS, FOOD_TRUCK_SEASON } from "@/config/food-truck";
import { formatDays, formatTime } from "@/lib/hours";
import { Clock, Instagram } from "lucide-react";
import heroImg from "@/assets/v2/foodtruck/truck-noche.webp";
import truckImg from "@/assets/v2/foodtruck/truck-dia.webp";
import logoImg from "@/assets/v2/foodtruck/truck-logo.webp";
import stationImg from "@/assets/v2/foodtruck/food-station.webp";
import parkImg from "@/assets/v2/foodtruck/vilanova-park.webp";

const MAPS =
  "https://www.google.com/maps/search/?api=1&query=Camping+Vilanova+Park";

const T = {
  es: {
    hoursTitle: "Horario y temporada",
    seasonLabel: "Temporada",
    hoursAsk: "Consulta el horario de esta temporada en nuestro Instagram",
    seoTitle:
      "Food Truck Re-Start | Café y desayunos en el Camping Vilanova Park",
    seoDesc:
      "Re-Start también está en el Camping Vilanova Park: food truck y Food Station con café de especialidad, desayunos, bowls y snacks al aire libre en Vilanova i la Geltrú.",
    ogAlt:
      "Food truck de Re-Start iluminado de noche en el Camping Vilanova Park",
    home: "Inicio",
    heroAlt:
      "El food truck de Re-Start iluminado de noche en el Camping Vilanova Park",
    eyebrow: "Re-Start fuera del local",
    where: "Dónde encontrarnos",
    quote:
      "“La experiencia Re-Start, ahora también en el camping más grande de Vilanova”",
    intro1:
      "Después de consolidar nuestra cafetería, dimos el paso de llevar Re-Start al Camping Vilanova Park. Un entorno diferente, al aire libre, rodeado de naturaleza y con gente que busca calidad también en sus días de descanso.",
    intro2:
      "Tenemos dos puntos de venta dentro del recinto para que siempre tengas a mano un buen café, un desayuno elaborado o un snack, sin renunciar a nada.",
    logoAlt:
      "Lateral del food truck con el logo de Re-Start y el lema Eat Love Repeat",
    spotsTitle: "Dos sitios donde encontrarnos",
    spots: [
      {
        title: "El food truck",
        text: "Nuestra furgoneta turquesa, con su “Eat · Love · Repeat”. De día para el café y el desayuno; de noche, con luces y buen ambiente.",
        alt: "El food truck turquesa de Re-Start en el camping",
      },
      {
        title: "Food Station",
        text: "Nuestro segundo punto de venta dentro del recinto, para que tengas Re-Start cerca tanto si estás en parcela como en bungalow o mobilhome.",
        alt: "Quiosco Food Station con terraza en el camping",
      },
    ],
    offerTitle: "Re-Start fuera del local",
    offerText:
      "La misma calidad de siempre, adaptada al camping y pensada para disfrutarla al aire libre.",
    details: [
      {
        title: "Café de especialidad",
        text: "La misma calidad que en la cafetería: granos de especialidad, extracción cuidada y atención al detalle, ahora al aire libre.",
      },
      {
        title: "Brunch y snacks",
        text: "Desayunos, tostadas, bowls y opciones ligeras para empezar bien el día sin salir del camping.",
      },
      {
        title: "Dos puntos de venta",
        text: "El food truck y la Food Station, repartidos por el Camping Vilanova Park para tenerte siempre cerca.",
      },
      {
        title: "El espíritu Re-Start",
        text: "Fuera del local pero con la misma esencia: trato cercano, buen producto y la filosofía que nos acompaña desde 2022.",
      },
    ],
    parkTitle: ["En el corazón del", "Camping Vilanova Park"],
    park1:
      "El Camping Vilanova Park es uno de los campings más grandes y completos de Cataluña, a pocos minutos de la playa y del centro de Vilanova i la Geltrú.",
    park2:
      "Nuestros dos puntos de venta están repartidos por el recinto para dar servicio tanto a los campistas de parcela como a los de bungalow y mobilhome.",
    parkAlt: "Piscina y palmeras del Camping Vilanova Park",
    mapTitle: "Encuéntranos en el camping",
    mapText:
      "Estamos dentro del Camping Vilanova Park, a las afueras de Vilanova i la Geltrú y a pocos minutos de la playa.",
    mapFrame: "Mapa del Camping Vilanova Park",
  },
  ca: {
    hoursTitle: "Horari i temporada",
    seasonLabel: "Temporada",
    hoursAsk: "Consulta l'horari d'aquesta temporada al nostre Instagram",
    seoTitle: "Food Truck Re-Start | Cafè i esmorzars al Càmping Vilanova Park",
    seoDesc:
      "Re-Start també és al Càmping Vilanova Park: food truck i Food Station amb cafè d'especialitat, esmorzars, bowls i snacks a l'aire lliure a Vilanova i la Geltrú.",
    ogAlt: "Food truck de Re-Start il·luminat de nit al Càmping Vilanova Park",
    home: "Inici",
    heroAlt:
      "El food truck de Re-Start il·luminat de nit al Càmping Vilanova Park",
    eyebrow: "Re-Start fora del local",
    where: "On trobar-nos",
    quote:
      "“L'experiència Re-Start, ara també al càmping més gran de Vilanova”",
    intro1:
      "Després de consolidar la nostra cafeteria, vam fer el pas de portar Re-Start al Càmping Vilanova Park. Un entorn diferent, a l'aire lliure, envoltat de natura i amb gent que també busca qualitat en els seus dies de descans.",
    intro2:
      "Tenim dos punts de venda dins del recinte perquè sempre tinguis a mà un bon cafè, un esmorzar elaborat o un snack, sense renunciar a res.",
    logoAlt:
      "Lateral del food truck amb el logo de Re-Start i el lema Eat Love Repeat",
    spotsTitle: "Dos llocs on trobar-nos",
    spots: [
      {
        title: "El food truck",
        text: "La nostra furgoneta turquesa, amb el seu “Eat · Love · Repeat”. De dia per al cafè i l'esmorzar; de nit, amb llums i bon ambient.",
        alt: "El food truck turquesa de Re-Start al càmping",
      },
      {
        title: "Food Station",
        text: "El nostre segon punt de venda dins del recinte, perquè tinguis Re-Start a prop tant si ets en parcel·la com en bungalow o mobilhome.",
        alt: "Quiosc Food Station amb terrassa al càmping",
      },
    ],
    offerTitle: "Re-Start fora del local",
    offerText:
      "La qualitat de sempre, adaptada al càmping i pensada per gaudir-la a l'aire lliure.",
    details: [
      {
        title: "Cafè d'especialitat",
        text: "La mateixa qualitat que a la cafeteria: grans d'especialitat, extracció acurada i atenció al detall, ara a l'aire lliure.",
      },
      {
        title: "Brunch i snacks",
        text: "Esmorzars, torrades, bowls i opcions lleugeres per començar bé el dia sense sortir del càmping.",
      },
      {
        title: "Dos punts de venda",
        text: "El food truck i la Food Station, repartits pel Càmping Vilanova Park per tenir-te sempre a prop.",
      },
      {
        title: "L'esperit Re-Start",
        text: "Fora del local però amb la mateixa essència: tracte proper, bon producte i la filosofia que ens acompanya des del 2022.",
      },
    ],
    parkTitle: ["Al cor del", "Càmping Vilanova Park"],
    park1:
      "El Càmping Vilanova Park és un dels càmpings més grans i complets de Catalunya, a pocs minuts de la platja i del centre de Vilanova i la Geltrú.",
    park2:
      "Els nostres dos punts de venda estan repartits pel recinte per donar servei tant als campistes de parcel·la com als de bungalow i mobilhome.",
    parkAlt: "Piscina i palmeres del Càmping Vilanova Park",
    mapTitle: "Troba'ns al càmping",
    mapText:
      "Som dins del Càmping Vilanova Park, als afores de Vilanova i la Geltrú i a pocs minuts de la platja.",
    mapFrame: "Mapa del Càmping Vilanova Park",
  },
  en: {
    hoursTitle: "Opening hours & season",
    seasonLabel: "Season",
    hoursAsk: "Check this season's opening hours on our Instagram",
    seoTitle:
      "Re-Start Food Truck | Coffee & breakfast at Camping Vilanova Park",
    seoDesc:
      "Re-Start is also at Camping Vilanova Park: a food truck and the Food Station serving specialty coffee, breakfast, bowls and snacks outdoors in Vilanova i la Geltrú.",
    ogAlt: "Re-Start food truck lit up at night at Camping Vilanova Park",
    home: "Home",
    heroAlt: "The Re-Start food truck lit up at night at Camping Vilanova Park",
    eyebrow: "Re-Start on the road",
    where: "Where to find us",
    quote: "“The Re-Start experience, now also at Vilanova's biggest campsite”",
    intro1:
      "Once our coffee shop was up and running, we took Re-Start to Camping Vilanova Park. A different setting: outdoors, surrounded by nature, with people who want quality on their days off too.",
    intro2:
      "We have two spots inside the campsite, so a good coffee, a proper breakfast or a snack is always close at hand.",
    logoAlt:
      "Side of the food truck with the Re-Start logo and the motto Eat Love Repeat",
    spotsTitle: "Two places to find us",
    spots: [
      {
        title: "The food truck",
        text: "Our turquoise van with its “Eat · Love · Repeat”. Coffee and breakfast by day; lights and good vibes by night.",
        alt: "The turquoise Re-Start food truck at the campsite",
      },
      {
        title: "Food Station",
        text: "Our second spot inside the campsite, so Re-Start is always nearby whether you're on a pitch, in a bungalow or a mobile home.",
        alt: "Food Station kiosk with terrace at the campsite",
      },
    ],
    offerTitle: "Re-Start outdoors",
    offerText:
      "The same quality as always, adapted to the campsite and made to enjoy in the open air.",
    details: [
      {
        title: "Specialty coffee",
        text: "The same quality as in the coffee shop: specialty beans, careful extraction and attention to detail, now outdoors.",
      },
      {
        title: "Brunch & snacks",
        text: "Breakfasts, toasts, bowls and light bites to start the day right without leaving the campsite.",
      },
      {
        title: "Two spots",
        text: "The food truck and the Food Station, spread around Camping Vilanova Park so we're always close by.",
      },
      {
        title: "The Re-Start spirit",
        text: "Away from the shop but with the same essence: friendly service, great products and the philosophy we've had since 2022.",
      },
    ],
    parkTitle: ["In the heart of", "Camping Vilanova Park"],
    park1:
      "Camping Vilanova Park is one of the largest and best-equipped campsites in Catalonia, a few minutes from the beach and the centre of Vilanova i la Geltrú.",
    park2:
      "Our two spots are spread around the grounds to serve campers on pitches as well as in bungalows and mobile homes.",
    parkAlt: "Pool and palm trees at Camping Vilanova Park",
    mapTitle: "Find us at the campsite",
    mapText:
      "We're inside Camping Vilanova Park, on the outskirts of Vilanova i la Geltrú and a few minutes from the beach.",
    mapFrame: "Map of Camping Vilanova Park",
  },
  fr: {
    hoursTitle: "Horaires et saison",
    seasonLabel: "Saison",
    hoursAsk: "Consultez les horaires de cette saison sur notre Instagram",
    seoTitle: "Food Truck Re-Start | Café et petit-déjeuner au Camping Vilanova Park",
    seoDesc:
      "Re-Start est aussi au Camping Vilanova Park : food truck et Food Station avec café de spécialité, petits-déjeuners, bowls et snacks en plein air à Vilanova i la Geltrú.",
    ogAlt: "Food truck Re-Start illuminé la nuit au Camping Vilanova Park",
    home: "Accueil",
    heroAlt: "Le food truck Re-Start illuminé la nuit au Camping Vilanova Park",
    eyebrow: "Re-Start hors les murs",
    where: "Où nous trouver",
    quote: "« L'expérience Re-Start, désormais aussi dans le plus grand camping de Vilanova »",
    intro1:
      "Après avoir consolidé notre café, nous avons emmené Re-Start au Camping Vilanova Park. Un cadre différent, en plein air, entouré de nature, avec des gens qui recherchent la qualité aussi pendant leurs jours de repos.",
    intro2:
      "Nous avons deux points de vente sur le site pour que vous ayez toujours à portée de main un bon café, un vrai petit-déjeuner ou un snack, sans renoncer à rien.",
    logoAlt: "Côté du food truck avec le logo Re-Start et la devise Eat Love Repeat",
    spotsTitle: "Deux endroits pour nous trouver",
    spots: [
      {
        title: "Le food truck",
        text: "Notre camionnette turquoise et son « Eat · Love · Repeat ». Le jour pour le café et le petit-déjeuner ; le soir, avec des lumières et une bonne ambiance.",
        alt: "Le food truck turquoise de Re-Start au camping",
      },
      {
        title: "Food Station",
        text: "Notre deuxième point de vente sur le site, pour avoir Re-Start tout près, que vous soyez en emplacement, en bungalow ou en mobil-home.",
        alt: "Kiosque Food Station avec terrasse au camping",
      },
    ],
    offerTitle: "Re-Start hors les murs",
    offerText: "La même qualité que toujours, adaptée au camping et pensée pour être savourée en plein air.",
    details: [
      {
        title: "Café de spécialité",
        text: "La même qualité qu'au café : grains de spécialité, extraction soignée et souci du détail, cette fois en plein air.",
      },
      {
        title: "Brunch et snacks",
        text: "Petits-déjeuners, tartines, bowls et options légères pour bien commencer la journée sans quitter le camping.",
      },
      {
        title: "Deux points de vente",
        text: "Le food truck et la Food Station, répartis dans le Camping Vilanova Park pour être toujours près de vous.",
      },
      {
        title: "L'esprit Re-Start",
        text: "Hors de nos murs mais avec la même essence : un accueil chaleureux, de bons produits et la philosophie qui nous accompagne depuis 2022.",
      },
    ],
    parkTitle: ["Au cœur du", "Camping Vilanova Park"],
    park1:
      "Le Camping Vilanova Park est l'un des campings les plus grands et les plus complets de Catalogne, à quelques minutes de la plage et du centre de Vilanova i la Geltrú.",
    park2:
      "Nos deux points de vente sont répartis sur le site pour servir aussi bien les campeurs en emplacement que ceux en bungalow ou en mobil-home.",
    parkAlt: "Piscine et palmiers du Camping Vilanova Park",
    mapTitle: "Retrouvez-nous au camping",
    mapText:
      "Nous sommes à l'intérieur du Camping Vilanova Park, à la sortie de Vilanova i la Geltrú et à quelques minutes de la plage.",
    mapFrame: "Plan du Camping Vilanova Park",
  },
};

const SPOTS = [
  { img: truckImg, seed: 601, tilt: "-rotate-2" },
  { img: stationImg, seed: 607, tilt: "rotate-2" },
];
const DETAIL_ICONS = [Coffee, Sandwich, Store, Sun];

const FoodTruck = () => {
  const t = usePick()(T);
  const c = useCommon();
  const lang = useLang();
  return (
    <div className="min-h-screen overflow-x-clip">
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        image="/og/food-truck-v2.jpg"
        imageAlt={t.ogAlt}
        preloadImage={heroImg}
        jsonLd={breadcrumb([
          { name: t.home, path: href("home", lang) },
          { name: "Food Truck", path: href("truck", lang) },
        ])}
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
              Food <span className="block pl-[0.5em]">Truck</span>
            </>
          }
          subtitle={
            <>
              Camping Vilanova Park
              <br />
              <span lang="en">Eat · Love · Repeat</span>
            </>
          }
        >
          <a href="#puntos" className="btn-paper">
            {t.where} <ArrowDown size={16} />
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
          >
            {c.directions} <MapPin size={16} />
          </a>
        </PageHero>

        {/* Intro */}
        <section className="relative bg-paper pb-20 pt-16 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16 md:px-10">
            <div>
              <p className="hand -rotate-2 text-[1.7rem] leading-tight md:text-[2rem]">
                {t.quote}
              </p>
              <p className="font-prose mt-7 text-[15px] leading-[1.9] text-ink/85">
                {t.intro1}
              </p>
              <p className="font-prose mt-4 text-[15px] leading-[1.9] text-ink/85">
                {t.intro2}
              </p>
            </div>
            <div className="mx-auto w-60 rotate-3 drop-shadow-[0_10px_16px_rgba(40,30,20,0.22)] md:w-full md:max-w-xs">
              <div
                className="aspect-[4/5] overflow-hidden"
                style={tornClip(613)}
              >
                <img
                  src={logoImg}
                  alt={t.logoAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dos puntos de venta */}
        <section
          id="puntos"
          aria-labelledby="puntos-titulo"
          className="relative scroll-mt-20 bg-truck pb-20 pt-16 text-paper-light md:pb-24"
        >
          <TornEdge side="top" seed={621} className="text-truck" />
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-col items-center text-center">
              <h2
                id="puntos-titulo"
                className="hand text-[2.3rem] md:text-[2.8rem]"
              >
                {t.spotsTitle}
              </h2>
              <Scribble className="mt-1 w-32 text-paper-light" />
            </div>
            <ul className="mt-14 grid gap-14 md:grid-cols-2 md:gap-12">
              {t.spots.map((p, i) => (
                <li
                  key={p.title}
                  data-reveal=""
                  style={
                    { "--reveal-delay": `${i * 120}ms` } as React.CSSProperties
                  }
                >
                  <div
                    className={`${SPOTS[i].tilt} drop-shadow-[0_10px_16px_rgba(0,0,0,0.28)]`}
                  >
                    <div
                      className="aspect-[4/3.4] overflow-hidden"
                      style={tornClip(SPOTS[i].seed)}
                    >
                      <img
                        src={SPOTS[i].img}
                        alt={p.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-[50%_60%]"
                      />
                    </div>
                  </div>
                  <h3 className="hand mt-7 text-[1.9rem]">{p.title}</h3>
                  <p className="font-prose mt-3 max-w-md text-[15px] leading-[1.85] text-paper-light/90">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <TornEdge side="bottom" seed={623} className="text-truck" />
        </section>

        {/* Qué ofrecemos */}
        <section
          aria-labelledby="ofrecemos"
          className="bg-paper py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="text-center">
              <h2
                id="ofrecemos"
                className="label-type text-xl font-bold md:text-2xl"
              >
                {t.offerTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-ink/80">
                {t.offerText}
              </p>
            </div>

            <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {t.details.map(({ title, text }, i) => {
                const Icon = DETAIL_ICONS[i];
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
                      className="mx-auto text-truck"
                      aria-hidden="true"
                    />
                    <h3 className="hand mt-4 text-[1.4rem]">{title}</h3>
                    <p className="font-prose mt-3 text-[14px] leading-[1.8] text-ink/80">
                      {text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Horario y temporada (datos en src/config/food-truck.ts) */}
        <section aria-labelledby="horario-truck" className="bg-paper pb-20 md:pb-24">
          <div className="mx-auto max-w-xl px-5 text-center md:px-10">
            <Clock size={34} strokeWidth={1.25} className="mx-auto text-truck" aria-hidden="true" />
            <h2 id="horario-truck" className="hand mt-3 text-[2rem] md:text-[2.3rem]">
              {t.hoursTitle}
            </h2>
            <Scribble className="mx-auto mt-1 w-28 text-ink" />
            {FOOD_TRUCK_SEASON && (
              <p className="label-type mt-6 text-sm">
                {t.seasonLabel}: <strong>{FOOD_TRUCK_SEASON[lang]}</strong>
              </p>
            )}
            {FOOD_TRUCK_HOURS.length > 0 ? (
              <dl className="mx-auto mt-6 max-w-sm text-left">
                {FOOD_TRUCK_HOURS.map((h) => (
                  <div
                    key={h.days.join()}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 py-3 text-[15px]"
                  >
                    <dt>{formatDays(h.days, lang)}</dt>
                    <dd className="font-bold">
                      {formatTime(h.open, lang)} – {formatTime(h.close, lang)}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <a
                href="https://instagram.com/rscafevng"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[15px] underline underline-offset-4"
              >
                <Instagram size={18} aria-hidden="true" /> {t.hoursAsk}: @rscafevng
              </a>
            )}
          </div>
        </section>

        {/* El camping */}
        <section className="relative overflow-hidden bg-truck-light py-20 md:py-24">
          <TornEdge side="top" seed={631} className="text-truck-light" />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
            <div className="-rotate-1 drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
              <div
                className="aspect-[3/2] overflow-hidden"
                style={tornClip(637, undefined, 1.8, 2)}
              >
                <img
                  src={parkImg}
                  alt={t.parkAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <h2 className="label-type text-xl font-bold leading-snug md:text-2xl">
                {t.parkTitle[0]}
                <br />
                {t.parkTitle[1]}
              </h2>
              <span
                aria-hidden="true"
                className="mt-5 block h-[2px] w-8 bg-ink"
              />
              <p className="font-prose mt-7 text-[15px] leading-[1.9] text-ink/85">
                {t.park1}
              </p>
              <p className="font-prose mt-4 text-[15px] leading-[1.9] text-ink/85">
                {t.park2}
              </p>
              <p className="hand mt-9 -rotate-3 text-[1.7rem] md:text-[2rem]">
                Camping <span lang="en">good vibes</span>{" "}
                <HandHeart className="h-[0.7em] w-[0.75em] -translate-y-1" />
              </p>
              <PalmSketch className="pointer-events-none absolute -right-20 -top-32 hidden h-48 text-ink/45 xl:block" />
            </div>
          </div>
          <TornEdge side="bottom" seed={639} className="text-truck-light" />
        </section>

        {/* Mapa */}
        <section
          aria-labelledby="mapa-camping"
          className="bg-paper pb-24 pt-24"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="flex flex-col items-center text-center">
              <h2
                id="mapa-camping"
                className="hand text-[2.3rem] md:text-[2.6rem]"
              >
                {t.mapTitle}
              </h2>
              <Scribble className="mt-1 w-32 text-ink" />
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/80">
                {t.mapText}
              </p>
            </div>
            <div
              className="mt-12 h-72 overflow-hidden md:h-96"
              style={tornClip(651, undefined, 1.2, 1.5)}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.5293779537687!2d1.6928816!3d41.2320253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4986a70234dd9%3A0xe7932b446d313350!2sVilanova%20Park!5e0!3m2!1ses!2ses!4v1782665372822!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "sepia(.25) saturate(.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapFrame}
              />
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-paper bg-truck text-paper-light"
              >
                {c.directions} <MapPin size={16} />
              </a>
            </div>
          </div>
        </section>

        <MoreProjects current="truck" />
      </main>
      <Footer />
    </div>
  );
};

export default FoodTruck;
