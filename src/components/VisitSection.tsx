import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import fachadaImg from "@/assets/v2/fachada.jpg";
import { HandHeart, Scribble, tornClip } from "@/components/paper/Paper";

const schedule = [
  { days: "Lunes", hours: "8:30 – 13:00" },
  { days: "Martes a jueves", hours: "8:30 – 16:00" },
  { days: "Viernes", hours: "8:30 – 19:30" },
  { days: "Sábado", hours: "9:00 – 15:00" },
  { days: "Domingo y festivos", hours: "Cerrado", closed: true },
];

const contacts = [
  {
    icon: MapPin,
    label: "Carrer dels Escolapis, 8 · 08800 Vilanova i la Geltrú",
    href: "https://maps.app.goo.gl/BL8ZWwjTquyxNPD16",
    external: true,
  },
  { icon: Phone, label: "+34 621 30 67 20", href: "tel:+34621306720" },
  { icon: Mail, label: "rscafevng@gmail.com", href: "mailto:rscafevng@gmail.com" },
  { icon: Instagram, label: "@rscafevng", href: "https://instagram.com/rscafevng", external: true },
];

const VisitSection = () => (
  <section id="visita" className="scroll-mt-20 bg-paper pb-24 pt-24 md:pt-28">
    <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2 md:gap-16 md:px-10">
      <div className="rotate-[1.5deg] drop-shadow-[0_10px_18px_rgba(40,30,20,0.2)]">
        <div className="aspect-[4/5] overflow-hidden" style={tornClip(113, undefined, 1.8, 2.5)}>
          <img
            src={fachadaImg}
            alt="Fachada amarilla de Re-Start Coffee con los rótulos de Brunch y Bakery"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="hand text-[2.4rem] leading-none md:text-[2.8rem]">
          Te esperamos <HandHeart className="h-[0.65em] w-[0.7em] -translate-y-2" />
        </h2>
        <Scribble className="mt-1 w-36 text-ink" />

        <div id="horarios" className="mt-10 scroll-mt-28">
          <h3 className="label-type text-sm font-bold">Horarios</h3>
          <dl className="mt-4">
            {schedule.map((s) => (
              <div
                key={s.days}
                className={`flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 py-3 text-[15px] ${
                  s.closed ? "text-ink/50" : ""
                }`}
              >
                <dt>{s.days}</dt>
                <dd className="font-bold">{s.hours}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted-foreground">Los horarios pueden variar en festivos especiales.</p>
        </div>

        <ul className="mt-10 space-y-4">
          {contacts.map(({ icon: Icon, label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group inline-flex items-start gap-3 text-[15px]"
              >
                <Icon size={18} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span className="underline-offset-4 group-hover:underline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://maps.app.goo.gl/BL8ZWwjTquyxNPD16"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-paper mt-10 w-fit bg-ink text-paper-light"
        >
          Cómo llegar <MapPin size={16} />
        </a>
      </div>
    </div>

    <div className="mx-auto mt-16 max-w-7xl px-5 md:px-10">
      <div className="h-72 overflow-hidden md:h-96" style={tornClip(127, undefined, 1.2, 1.5)}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.908346105353!2d1.72313757586994!3d41.22376777132122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a387915fb5626f%3A0xd7125a13c5d4ba64!2sRestart%20Coffee!5e0!3m2!1ses!2ses!4v1781360977596!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "sepia(.25) saturate(.85)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Re-Start Coffee en Vilanova i la Geltrú"
        />
      </div>
    </div>
  </section>
);

export default VisitSection;
