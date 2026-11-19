import type { Lang } from "@/i18n";

/**
 * Horario y temporada del Food Truck y la Food Station (Camping Vilanova Park).
 *
 * TODO: rellenar con lo que diga el cliente.
 *  - season: texto de la temporada en los 4 idiomas, p. ej. { es: "De abril a octubre", ca: "D'abril a octubre", en: "April to October", fr: "D'avril à octobre" }
 *  - hours: igual que en src/lib/hours.ts → días 1 = lunes … 7 = domingo y horas "HH:MM".
 *    Ejemplo: [{ days: [1, 2, 3, 4, 5, 6, 7], open: "08:00", close: "13:00" }]
 *
 * Mientras esté vacío, la página muestra un aviso para consultar el horario en Instagram.
 */
export const FOOD_TRUCK_SEASON: Record<Lang, string> | null = null;

export const FOOD_TRUCK_HOURS: { days: number[]; open: string; close: string }[] = [];
