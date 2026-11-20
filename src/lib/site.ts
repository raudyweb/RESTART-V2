import { openingHoursSchema } from "@/lib/hours";
/**
 * Datos del sitio para SEO.
 * URL PÚBLICA DE LA WEB: único sitio donde se define.
 * La usan canonical, Open Graph, hreflang, JSON-LD, sitemap.xml y robots.txt.
 * TODO: cuando tengamos dominio propio, cambiar DEFAULT_SITE_URL (o definir VITE_SITE_URL
 * en Cloudflare/Vercel) y volver a publicar.
 */
export const DEFAULT_SITE_URL = "https://restart-v2.pages.dev";
export const SITE_URL = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

export const SITE_NAME = "Re-Start Coffee";

export const abs = (path: string) => (path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`);

/** Enlaces de reseñas de Google. */
// TODO: confirmar que este enlace abre la ficha de Re-Start Coffee con sus reseñas (es el mismo de "Cómo llegar").
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/BL8ZWwjTquyxNPD16";
// TODO: poner el enlace "Pedir reseñas" de Google Business Profile
// (formato https://g.page/r/XXXX/review o https://search.google.com/local/writereview?placeid=XXXX).
// Mientras esté vacío, "Deja tu reseña" abre la ficha de Google.
export const GOOGLE_WRITE_REVIEW_URL = "";

export const BUSINESS = {
  name: "Re-Start Coffee",
  phone: "+34 621 30 67 20",
  email: "rscafevng@gmail.com",
  street: "Carrer dels Escolapis, 8",
  postalCode: "08800",
  city: "Vilanova i la Geltrú",
  region: "Barcelona",
  country: "ES",
  lat: 41.22377,
  lng: 1.72314,
  instagram: "https://instagram.com/rscafevng",
  maps: "https://maps.app.goo.gl/BL8ZWwjTquyxNPD16",
};

const address = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  postalCode: BUSINESS.postalCode,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
};

/** Ficha de negocio de la cafetería (Google la usa para el panel de la derecha y el mapa). */
export const cafeSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${SITE_URL}/#cafe`,
  name: BUSINESS.name,
  url: `${SITE_URL}/`,
  image: [abs("/og/inicio-v2.jpg")],
  logo: abs("/logo.png"),
  description:
    "Café de especialidad, brunch y repostería artesanal sin gluten en el centro de Vilanova i la Geltrú, junto a la Plaza del Ayuntamiento. Terraza dog-friendly.",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: "€€",
  servesCuisine: ["Brunch", "Café de especialidad", "Desayunos", "Repostería sin gluten"],
  acceptsReservations: false,
  hasMenu: abs("/Carta.pdf"),
  address,
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: BUSINESS.maps,
  // Sale de src/lib/hours.ts, el mismo horario que se ve en la web
  openingHoursSpecification: openingHoursSchema(),
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Terraza", value: true },
    { "@type": "LocationFeatureSpecification", name: "Admite perros", value: true },
    { "@type": "LocationFeatureSpecification", name: "Opciones sin gluten", value: true },
  ],
  sameAs: [BUSINESS.instagram],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "300", bestRating: "5" },
};

export const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
