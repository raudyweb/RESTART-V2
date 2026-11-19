import type { Lang } from "@/i18n";

/**
 * Platos estrella de la portada.
 *
 * TODO: rellenar con los platos que elija el cliente. Mientras la lista esté vacía,
 * la sección "Platos estrella" NO se muestra en la web.
 *
 * Ejemplo de un plato (la foto se añade en src/assets y se importa arriba):
 *
 *   import benedictImg from "@/assets/v2/benedict.webp";
 *   ...
 *   {
 *     id: "benedict",
 *     image: benedictImg,
 *     name: { es: "Huevos benedict", ca: "Ous Benedict", en: "Eggs Benedict", fr: "Œufs Bénédicte" },
 *     price: "11,50 €",
 *   },
 */
export type FeaturedDish = {
  id: string;
  image: string;
  name: Record<Lang, string>;
  /** Precio tal como se mostrará, p. ej. "11,50 €". */
  price: string;
};

export const FEATURED_DISHES: FeaturedDish[] = [];
