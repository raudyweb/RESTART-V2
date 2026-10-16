import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Phone, X } from "lucide-react";

const mainLinks = [
  { label: "Carta", href: "/Carta.pdf", external: true },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Opiniones", href: "/#opiniones" },
  { label: "Horarios", href: "/#horarios" },
  { label: "Cómo llegar", href: "/#visita" },
];

const extraLinks = [
  { label: "Food Truck", href: "/food-truck" },
  { label: "Macu Bakery", href: "/macu-bakery" },
];

const NavItem = ({
  l,
  className,
  onClick,
}: {
  l: { label: string; href: string; external?: boolean };
  className: string;
  onClick?: () => void;
}) =>
  l.external ? (
    <a href={l.href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
      {l.label}
    </a>
  ) : l.href.startsWith("/#") ? (
    <a href={l.href} className={className} onClick={onClick}>
      {l.label}
    </a>
  ) : (
    <Link to={l.href} className={className} onClick={onClick}>
      {l.label}
    </Link>
  );

const Burger = () => (
  <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
    <span className="h-[2px] w-full rounded bg-current" />
    <span className="h-[2px] w-full rounded bg-current" />
    <span className="h-[2px] w-full rounded bg-current" />
  </span>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-paper/95 text-ink shadow-[0_1px_0_hsl(var(--border))] backdrop-blur" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <Link
            to="/"
            className={`hand text-xl tracking-wide transition-opacity md:text-2xl ${
              solid ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-label="Re-Start Coffee, inicio"
            tabIndex={solid ? 0 : -1}
          >
            Re-Start Coffee
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 lg:flex">
              {mainLinks.map((l) => (
                <li key={l.label}>
                  <NavItem
                    l={l}
                    className="label-type text-[13px] underline-offset-[6px] hover:underline"
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="p-2"
            >
              <Burger />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú completo */}
      <div
        className={`fixed inset-0 z-[60] transition ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          role="dialog"
          aria-label="Menú"
          className={`absolute right-0 top-0 flex h-full w-[min(380px,88vw)] flex-col bg-paper px-8 pb-10 pt-6 text-ink shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="-mr-2 self-end p-2">
            <X size={26} strokeWidth={1.75} />
          </button>
          <p className="hand mt-2 text-3xl">Re-Start Coffee</p>
          <p className="label-type mt-2 text-xs text-muted-foreground">Vilanova i la Geltrú</p>

          <ul className="mt-10 flex flex-col gap-5">
            {[...mainLinks, ...extraLinks].map((l) => (
              <li key={l.label}>
                <NavItem l={l} onClick={() => setOpen(false)} className="label-type text-base hover:underline" />
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-4">
            <a href="tel:+34621306720" className="btn-paper border border-ink/20">
              <Phone size={16} /> Llámanos
            </a>
            <a
              href="https://instagram.com/rscafevng"
              target="_blank"
              rel="noopener noreferrer"
              className="label-type inline-flex items-center justify-center gap-2 text-sm"
            >
              <Instagram size={16} /> @rscafevng
            </a>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
