import { createContext, useContext, type ReactNode } from "react";

/**
 * Idiomas de la web.
 * - Español sin prefijo:  /            /sobre-nosotros    /macu-bakery    /food-truck
 * - Catalán con /ca:      /ca          /ca/sobre-nosaltres /ca/macu-bakery /ca/food-truck
 * - Inglés con /en:       /en          /en/about-us       /en/macu-bakery /en/food-truck
 * - Francés con /fr:      /fr          /fr/a-propos       /fr/macu-bakery /fr/food-truck
 *
 * Cada componente guarda sus textos en un objeto { es, ca, en, fr } y usa `pick(textos)`.
 */
export const LANGS = ["es", "ca", "en", "fr"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

export const LANG_LABEL: Record<Lang, string> = { es: "Español", ca: "Català", en: "English", fr: "Français" };
export const LANG_SHORT: Record<Lang, string> = { es: "ES", ca: "CA", en: "EN", fr: "FR" };
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", ca: "ca_ES", en: "en_GB", fr: "fr_FR" };

export type PageKey = "home" | "about" | "macu" | "truck" | "legal" | "privacy" | "cookies" | "notFound";

/** Páginas legales: no van al sitemap ni se indexan. */
export const LEGAL_PAGES = ["legal", "privacy", "cookies"] as const;

const SLUGS: Record<Exclude<PageKey, "notFound">, Record<Lang, string>> = {
  home: { es: "", ca: "", en: "", fr: "" },
  about: { es: "sobre-nosotros", ca: "sobre-nosaltres", en: "about-us", fr: "a-propos" },
  macu: { es: "macu-bakery", ca: "macu-bakery", en: "macu-bakery", fr: "macu-bakery" },
  truck: { es: "food-truck", ca: "food-truck", en: "food-truck", fr: "food-truck" },
  legal: { es: "aviso-legal", ca: "avis-legal", en: "legal-notice", fr: "mentions-legales" },
  privacy: { es: "politica-privacidad", ca: "politica-privacitat", en: "privacy-policy", fr: "politique-confidentialite" },
  cookies: { es: "politica-cookies", ca: "politica-galetes", en: "cookie-policy", fr: "politique-cookies" },
};

/** Ruta de una página en un idioma, con ancla opcional: href("about", "ca") → "/ca/sobre-nosaltres" */
export const href = (page: Exclude<PageKey, "notFound">, lang: Lang, hash?: string) => {
  const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
  const slug = SLUGS[page][lang];
  const path = slug ? `${prefix}/${slug}` : prefix || "/";
  return hash ? `${path}#${hash}` : path;
};

/** Todas las rutas públicas (para el router, el prerender y el sitemap). */
export const ROUTES = (Object.keys(SLUGS) as Exclude<PageKey, "notFound">[]).flatMap((page) =>
  LANGS.map((lang) => ({ page, lang, path: href(page, lang) })),
);

type Ctx = { lang: Lang; page: PageKey };
const LangContext = createContext<Ctx>({ lang: DEFAULT_LANG, page: "home" });

export const LangProvider = ({ lang, page, children }: Ctx & { children: ReactNode }) => (
  <LangContext.Provider value={{ lang, page }}>{children}</LangContext.Provider>
);

export const useLang = () => useContext(LangContext).lang;
export const usePage = () => useContext(LangContext).page;

/** Elige el texto del idioma actual. */
export const usePick = () => {
  const lang = useLang();
  return <T,>(t: Record<Lang, T>): T => t[lang];
};

/** Textos compartidos por varias secciones. */
export const COMMON = {
  es: {
    workshop: "Taller barista",
    beans: "Café en grano",
    call: "Llamar",
    menu: "Carta",
    about: "Nosotros",
    reviews: "Opiniones",
    hours: "Horarios",
    directions: "Cómo llegar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuDialog: "Menú",
    goHome: "Re-Start Coffee, ir al inicio",
    callUs: "Llámanos",
    language: "Idioma",
    seeMenu: "Ver la carta",
    allergens: "En caso de alergias, consulta con el personal.",
  },
  ca: {
    workshop: "Taller barista",
    beans: "Cafè en gra",
    call: "Trucar",
    menu: "Carta",
    about: "Nosaltres",
    reviews: "Opinions",
    hours: "Horaris",
    directions: "Com arribar",
    openMenu: "Obrir el menú",
    closeMenu: "Tancar el menú",
    menuDialog: "Menú",
    goHome: "Re-Start Coffee, anar a l'inici",
    callUs: "Truca'ns",
    language: "Idioma",
    seeMenu: "Veure la carta",
    allergens: "En cas d'al·lèrgies, consulta-ho amb el personal.",
  },
  en: {
    workshop: "Barista workshop",
    beans: "Coffee beans",
    call: "Call",
    menu: "Menu",
    about: "About us",
    reviews: "Reviews",
    hours: "Hours",
    directions: "Directions",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuDialog: "Menu",
    goHome: "Re-Start Coffee, go to the home page",
    callUs: "Call us",
    language: "Language",
    seeMenu: "See the menu",
    allergens: "If you have any allergies, please ask our staff.",
  },
  fr: {
    workshop: "Atelier barista",
    beans: "Café en grains",
    call: "Appeler",
    menu: "Carte",
    about: "À propos",
    reviews: "Avis",
    hours: "Horaires",
    directions: "Itinéraire",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuDialog: "Menu",
    goHome: "Re-Start Coffee, aller à l'accueil",
    callUs: "Appelez-nous",
    language: "Langue",
    seeMenu: "Voir la carte",
    allergens: "En cas d'allergies, demandez à notre équipe.",
  },
} satisfies Record<Lang, Record<string, string>>;

export const useCommon = () => COMMON[useLang()];
