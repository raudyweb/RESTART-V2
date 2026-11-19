import type React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import cafeImg from "@/assets/v2/barra-iluminada.webp";
import macuImg from "@/assets/v2/macu/rincon-gluten-free.webp";
import truckImg from "@/assets/v2/foodtruck/truck-logo.webp";
import { Scribble, tornClip } from "@/components/paper/Paper";
import { href, useLang, usePick } from "@/i18n";

const T = {
  es: {
    family: "La familia",
    cafe: "Nuestra cafetería en Escolapis, 8",
    macu: "Obrador 100% sin gluten",
    truck: "En el Camping Vilanova Park",
  },
  ca: {
    family: "La família",
    cafe: "La nostra cafeteria a Escolapis, 8",
    macu: "Obrador 100% sense gluten",
    truck: "Al Càmping Vilanova Park",
  },
  en: {
    family: "The",
    cafe: "Our coffee shop at Escolapis, 8",
    macu: "100% gluten-free bakery",
    truck: "At Camping Vilanova Park",
  },
};
const FAMILY_SUFFIX = { es: "", ca: "", en: " family" };

const projects = [
  {
    key: "cafe",
    page: "home",
    title: "Re-Start Coffee",
    img: cafeImg,
    pos: "50% 60%",
  },
  {
    key: "macu",
    page: "macu",
    title: "Macu Bakery",
    img: macuImg,
    pos: "50% 40%",
  },
  {
    key: "truck",
    page: "truck",
    title: "Food Truck",
    img: truckImg,
    pos: "50% 50%",
  },
] as const;

/** Enlaces a los otros proyectos de la familia Re-Start. */
const MoreProjects = ({ current }: { current: "macu" | "truck" }) => {
  const t = usePick()(T);
  const lang = useLang();
  return (
    <section aria-labelledby="mas-restart" className="bg-paper-light py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 id="mas-restart" className="hand text-[2.1rem] md:text-[2.4rem]">
            {t.family} <span className="whitespace-nowrap">Re-Start</span>
            {FAMILY_SUFFIX[lang]}
          </h2>
          <Scribble className="mt-1 w-28 text-ink" />
        </div>
        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {projects
            .filter((p) => p.key !== current)
            .map((p, i) => (
              <li
                key={p.key}
                data-reveal=""
                style={
                  { "--reveal-delay": `${i * 120}ms` } as React.CSSProperties
                }
              >
                <Link to={href(p.page, lang)} className="group block">
                  <div
                    className={`${i % 2 ? "rotate-1" : "-rotate-1"} drop-shadow-[0_8px_14px_rgba(40,30,20,0.18)]`}
                  >
                    <div
                      className="aspect-[4/3] overflow-hidden"
                      style={tornClip(300 + i * 7)}
                    >
                      <img
                        src={p.img}
                        alt=""
                        loading="lazy"
                        style={{ objectPosition: p.pos }}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="hand mt-6 text-center text-[1.8rem]">
                    {p.title}
                  </p>
                  <p className="mt-1 flex items-center justify-center gap-2 text-sm text-ink/75">
                    {t[p.key]}{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default MoreProjects;
