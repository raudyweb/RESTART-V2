import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "@/assets/v2/logo-dark.webp";
import logoLight from "@/assets/logo-invert.webp";
import { Instagram, Phone, X } from "lucide-react";
import { LANGS, LANG_LABEL, LANG_SHORT, href, useCommon, useLang, usePage } from "@/i18n";

/** Selector de idioma: lleva a la misma página en el otro idioma. */
const LangSwitcher = ({ className = "", onPick }: { className?: string; onPick?: () => void }) => {
  const lang = useLang();
  const page = usePage();
  const target = page === "notFound" ? "home" : page;
  const c = useCommon();
  return (
    <ul aria-label={c.language} className={`flex items-center gap-1 ${className}`}>
      {LANGS.map((l, i) => (
        <li key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="opacity-40">·</span>}
          <Link
            to={href(target, l)}
            onClick={onPick}
            hrefLang={l}
            lang={l}
            aria-label={LANG_LABEL[l]}
            aria-current={l === lang ? "true" : undefined}
            className={`label-type relative rounded px-1 py-1 text-[12px] underline-offset-[5px] before:absolute before:left-1/2 before:top-1/2 before:h-11 before:w-11 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] ${
              l === lang ? "font-bold underline" : "opacity-70 hover:opacity-100"
            }`}
          >
            {LANG_SHORT[l]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

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
  const lang = useLang();
  const c = useCommon();
  const home = href("home", lang);

  const mainLinks = [
    { label: c.menu, href: "/Carta.pdf", external: true },
    { label: c.about, href: href("about", lang) },
    { label: c.reviews, href: href("home", lang, "opiniones") },
    { label: c.hours, href: href("home", lang, "horarios") },
    { label: c.directions, href: href("home", lang, "mapa") },
  ];
  const extraLinks = [
    { label: c.workshop, href: href("home", lang, "taller") },
    { label: c.beans, href: href("home", lang, "cafe-en-grano") },
    { label: "Food Truck", href: href("truck", lang) },
    { label: "Macu Bakery", href: href("macu", lang) },
  ];
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
    if (pathname === home) {
      e.preventDefault();
      if (window.location.hash) window.history.replaceState(null, "", home);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "bg-paper text-ink shadow-[0_1px_0_hsl(var(--border))]" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
          <Link
            to={home}
            onClick={goHome}
            aria-label={c.goHome}
            className="-my-1 block shrink-0 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
          >
            {/* Logo claro sobre la foto; oscuro cuando la barra se vuelve crema */}
            <img
              src={solid ? logoDark : logoLight}
              alt="Re-Start Coffee"
              className="h-14 w-[45px] object-contain md:h-16 md:w-[52px]"
            />
          </Link>

          <div className="flex items-center gap-4 lg:gap-8">
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
            <LangSwitcher />
            <button
              onClick={() => setOpen(true)}
              aria-label={c.openMenu}
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
          aria-label={c.menuDialog}
          className={`absolute right-0 top-0 flex h-full w-[min(380px,88vw)] flex-col bg-paper px-8 pb-10 pt-6 text-ink shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button onClick={() => setOpen(false)} aria-label={c.closeMenu} className="-mr-2 self-end p-2">
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
            <LangSwitcher className="justify-center text-ink" onPick={() => setOpen(false)} />
            <a href="tel:+34621306720" className="btn-paper border border-ink/20">
              <Phone size={16} /> {c.callUs}
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
