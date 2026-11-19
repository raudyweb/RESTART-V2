import type { Lang } from "@/i18n";

/**
 * Horario de Re-Start Coffee: ÚNICO sitio donde se cambia.
 * Lo usan la sección Horarios (en los 4 idiomas), el aviso "Abierto ahora" y los datos para Google.
 *
 * Días: 1 = lunes … 6 = sábado, 7 = domingo. Horas en formato 24 h "HH:MM", hora de Madrid.
 * Los días que no aparecen están cerrados (ahora: domingo).
 */
export const HOURS: { days: number[]; open: string; close: string }[] = [
  { days: [1, 2, 3, 4], open: "08:30", close: "16:00" },
  { days: [5], open: "08:30", close: "19:30" },
  { days: [6], open: "09:00", close: "15:00" },
];

/** Temporada que se muestra como título del horario. */
export const HOURS_SEASON = "winter" as const;

/**
 * Festivos en los que el local cierra, en formato "AAAA-MM-DD".
 * TODO: rellenar con los festivos que confirme el cliente (nacionales, Cataluña y locales de Vilanova).
 * Mientras esté vacío, el aviso "Abierto ahora" no tiene en cuenta los festivos.
 */
export const HOLIDAYS: string[] = [];

export const TIME_ZONE = "Europe/Madrid";

/* ---------- Textos ---------- */

const DAY_NAMES: Record<Lang, string[]> = {
  es: ["", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
  ca: ["", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"],
  en: ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  fr: ["", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"],
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "08:30" → "8:30" (o "8h30" en francés). */
export const formatTime = (hhmm: string, lang: Lang) => {
  const [h, m] = hhmm.split(":");
  return lang === "fr" ? `${Number(h)}h${m}` : `${Number(h)}:${m}`;
};

/** Nombre de un grupo de días consecutivos: "Lunes a jueves", "Du lundi au jeudi", "Friday"… */
export const formatDays = (days: number[], lang: Lang) => {
  const first = DAY_NAMES[lang][days[0]];
  if (days.length === 1) return cap(first);
  const last = DAY_NAMES[lang][days[days.length - 1]];
  if (lang === "en") return `${first} to ${last}`;
  if (lang === "fr") return `Du ${first} au ${last}`;
  return `${cap(first)} a ${last}`;
};

export const dayName = (day: number, lang: Lang) => DAY_NAMES[lang][day];

const DAY_SHORT: Record<Lang, string[]> = {
  es: ["", "L", "M", "X", "J", "V", "S", "D"],
  ca: ["", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds", "Dg"],
  en: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  fr: ["", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
};

/** Versión corta para el pie: "L–J", "Mon–Thu", "V"… */
export const formatDaysShort = (days: number[], lang: Lang) =>
  days.length === 1
    ? DAY_SHORT[lang][days[0]]
    : `${DAY_SHORT[lang][days[0]]}–${DAY_SHORT[lang][days[days.length - 1]]}`;

/* ---------- Datos para Google (schema.org) ---------- */

const SCHEMA_DAYS = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export const openingHoursSchema = () =>
  HOURS.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.length === 1 ? SCHEMA_DAYS[h.days[0]] : h.days.map((d) => SCHEMA_DAYS[d]),
    opens: h.open,
    closes: h.close,
  }));

/* ---------- ¿Abierto ahora? ---------- */

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Día de la semana (1–7), minutos desde medianoche y fecha "AAAA-MM-DD" en Madrid. */
const madridNow = (date: Date) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: TIME_ZONE,
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    })
      .formatToParts(date)
      .map((p) => [p.type, p.value]),
  );
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(parts.weekday) + 1;
  return {
    day,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
    iso: `${parts.year}-${parts.month}-${parts.day}`,
  };
};

const addDaysIso = (iso: string, n: number) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
};

const slotFor = (day: number, iso: string) =>
  HOLIDAYS.includes(iso) ? undefined : HOURS.find((h) => h.days.includes(day));

export type OpenStatus = {
  open: boolean;
  /** Si está abierto: hora de cierre. */
  closes?: string;
  /** Si está cerrado: próxima apertura (null si no hay ninguna en 7 días). */
  opens?: string | null;
  when?: "today" | "tomorrow" | number;
};

/** Estado del local en un momento dado (por defecto, ahora). */
export const openStatus = (date = new Date()): OpenStatus => {
  const now = madridNow(date);
  const today = slotFor(now.day, now.iso);
  if (today) {
    if (now.minutes >= toMinutes(today.open) && now.minutes < toMinutes(today.close)) {
      return { open: true, closes: today.close };
    }
    if (now.minutes < toMinutes(today.open)) return { open: false, opens: today.open, when: "today" };
  }
  for (let i = 1; i <= 7; i++) {
    const day = ((now.day - 1 + i) % 7) + 1;
    const slot = slotFor(day, addDaysIso(now.iso, i));
    if (slot) return { open: false, opens: slot.open, when: i === 1 ? "tomorrow" : day };
  }
  return { open: false, opens: null };
};
