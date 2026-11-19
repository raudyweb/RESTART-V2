import { useEffect, useState } from "react";
import { dayName, formatTime, openStatus, type OpenStatus } from "@/lib/hours";
import { useLang, usePick } from "@/i18n";

const T = {
  es: {
    open: "Abierto",
    closed: "Cerrado",
    closes: (t: string) => `cierra a las ${t}`,
    today: (t: string) => `abre hoy a las ${t}`,
    tomorrow: (t: string) => `abre mañana a las ${t}`,
    day: (d: string, t: string) => `abre el ${d} a las ${t}`,
  },
  ca: {
    open: "Obert",
    closed: "Tancat",
    closes: (t: string) => `tanca a les ${t}`,
    today: (t: string) => `obre avui a les ${t}`,
    tomorrow: (t: string) => `obre demà a les ${t}`,
    day: (d: string, t: string) => `obre ${d} a les ${t}`,
  },
  en: {
    open: "Open",
    closed: "Closed",
    closes: (t: string) => `closes at ${t}`,
    today: (t: string) => `opens today at ${t}`,
    tomorrow: (t: string) => `opens tomorrow at ${t}`,
    day: (d: string, t: string) => `opens ${d} at ${t}`,
  },
  fr: {
    open: "Ouvert",
    closed: "Fermé",
    closes: (t: string) => `ferme à ${t}`,
    today: (t: string) => `ouvre aujourd'hui à ${t}`,
    tomorrow: (t: string) => `ouvre demain à ${t}`,
    day: (d: string, t: string) => `ouvre ${d} à ${t}`,
  },
};

/**
 * Aviso "Abierto · cierra a las 16:00" / "Cerrado · abre mañana a las 8:30",
 * calculado con la hora de Madrid a partir de src/lib/hours.ts.
 * Se calcula en el navegador (no en el HTML generado), porque depende de la hora real,
 * y se actualiza cada minuto.
 */
const OpenNow = ({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) => {
  const t = usePick()(T);
  const lang = useLang();
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const tick = () => setStatus(openStatus());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status) return null;

  let detail = "";
  if (status.open && status.closes) detail = t.closes(formatTime(status.closes, lang));
  else if (status.opens && status.when) {
    const time = formatTime(status.opens, lang);
    detail =
      status.when === "today"
        ? t.today(time)
        : status.when === "tomorrow"
          ? t.tomorrow(time)
          : t.day(dayName(status.when, lang), time);
  }

  const dot = status.open ? "bg-emerald-500" : "bg-red-400";
  const look =
    tone === "light" ? "border-white/40 bg-black/25 text-white" : "border-ink/20 bg-paper-light text-ink";

  return (
    <p
      role="status"
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] backdrop-blur-sm ${look} ${className}`}
    >
      <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
      <span>
        <strong className="font-bold">{status.open ? t.open : t.closed}</strong>
        {detail && <> · {detail}</>}
      </span>
    </p>
  );
};

export default OpenNow;
