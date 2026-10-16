import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "@/assets/v2/logo-dark.webp";
import { Instagram, Phone, X } from "lucide-react";

const mainLinks = [
  { label: "Carta", href: "/Carta.pdf", external: true },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Opiniones", href: "/#opiniones" },
  { label: "Horarios", href: "/#horarios" },
  { label: "Cómo llegar", href: "/#mapa" },
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
    // La barra se queda transparente mientras estás sobre la foto de cabecera,
    // para no tapar el título; se vuelve sólida al pasar a la siguiente sección.
    // Altura de la cabecera medida solo al cargar/redimensionar; en cada scroll solo se compara un número
    let limit = 40;
    let frame = 0;
    const measure = () => {
      const hero = document.querySelector("main section, section");
      limit = Math.max(40, hero ? (hero as HTMLElement).offsetHeight - 80 : 40);
    };
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > limit);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
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
  const { pathname } = useLocation();

  // Si ya estás en la portada, el logo sube arriba del todo en vez de recargar
  const goHome = (e: React.MouseEvent) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      if (window.location.hash) window.history.replaceState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-paper/95 text-ink shadow-[0_1px_0_hsl(var(--border))] backdrop-blur" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <Link
            to="/"
            onClick={goHome}
            aria-label="Re-Start Coffee, ir al inicio"
            tabIndex={solid ? 0 : -1}
            aria-hidden={!solid}
            className={`-my-1 block shrink-0 rounded-full transition-opacity duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${
              solid ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {/* El logo aparece junto con la barra crema; sobre la foto no se muestra */}
            <img src={logoDark} alt="" className="h-14 w-[45px] object-contain md:h-16 md:w-[52px]" />
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
