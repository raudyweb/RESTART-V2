import { Helmet } from "react-helmet-async";
import { SITE_NAME, abs } from "@/lib/site";
import { LANGS, OG_LOCALE, href, useLang, usePage } from "@/i18n";

type SEOProps = {
  title: string;
  description: string;
  /** Imagen para WhatsApp, Facebook, etc. (1200x630). */
  image?: string;
  imageAlt?: string;
  /** Imagen de cabecera a precargar para que aparezca antes. */
  preloadImage?: string;
  /** Datos estructurados schema.org. */
  jsonLd?: object | object[];
  noindex?: boolean;
};

/** Metadatos de la página. La URL canónica y las versiones en otros idiomas salen de la página e idioma actuales. */
const SEO = ({
  title,
  description,
  image = "/og/inicio-v2.jpg",
  imageAlt = "Re-Start Coffee, Vilanova i la Geltrú",
  preloadImage,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const lang = useLang();
  const page = usePage();
  const real = page === "notFound" ? null : page;
  const indexable = !noindex && real !== null;
  const url = real ? abs(href(real, lang)) : abs("/404");
  const img = abs(image);
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang={lang} translate="no" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {indexable ? <link rel="canonical" href={url} /> : <meta name="robots" content="noindex, follow" />}
      {indexable && <meta name="robots" content="index, follow, max-image-preview:large" />}

      {/* La misma página en los otros idiomas */}
      {indexable &&
        real &&
        LANGS.map((l) => <link key={l} rel="alternate" hrefLang={l} href={abs(href(real, l))} />)}
      {indexable && real && <link rel="alternate" hrefLang="x-default" href={abs(href(real, "es"))} />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      {LANGS.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:image:secure_url" content={img} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />}

      {ld.map((d, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(d)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
