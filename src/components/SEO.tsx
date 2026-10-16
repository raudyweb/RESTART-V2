import { Helmet } from "react-helmet-async";
import { SITE_NAME, abs } from "@/lib/site";

type SEOProps = {
  title: string;
  description: string;
  /** Ruta de la página, p. ej. "/macu-bakery". Sirve para la URL canónica. */
  path: string;
  /** Imagen para WhatsApp, Facebook, etc. (1200x630). */
  image?: string;
  imageAlt?: string;
  /** Imagen de cabecera a precargar para que aparezca antes. */
  preloadImage?: string;
  /** Datos estructurados schema.org. */
  jsonLd?: object | object[];
  noindex?: boolean;
};

const SEO = ({
  title,
  description,
  path,
  image = "/og/inicio.jpg",
  imageAlt = "Re-Start Coffee en Vilanova i la Geltrú",
  preloadImage,
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const url = abs(path);
  const img = abs(image);
  const ld = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : <link rel="canonical" href={url} />}
      {!noindex && <meta name="robots" content="index, follow, max-image-preview:large" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
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
