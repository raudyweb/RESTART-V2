import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { HandHeart, Scribble } from "@/components/paper/Paper";
import { href, useLang, usePick } from "@/i18n";

const T = {
  es: {
    seo: "Página no encontrada | Re-Start Coffee",
    desc: "Esta página no existe.",
    title: "Esta página no existe",
    text: "Puede que el enlace esté mal o que la página se haya movido. Pero el café sigue caliente",
    back: "Volver al inicio",
  },
  ca: {
    seo: "Pàgina no trobada | Re-Start Coffee",
    desc: "Aquesta pàgina no existeix.",
    title: "Aquesta pàgina no existeix",
    text: "Potser l'enllaç és incorrecte o la pàgina s'ha mogut. Però el cafè continua calent",
    back: "Tornar a l'inici",
  },
  en: {
    seo: "Page not found | Re-Start Coffee",
    desc: "This page doesn't exist.",
    title: "This page doesn't exist",
    text: "The link may be wrong or the page may have moved. But the coffee's still hot",
    back: "Back to home",
  },
  fr: {
    seo: "Page introuvable | Re-Start Coffee",
    desc: "Cette page n'existe pas.",
    title: "Cette page n'existe pas",
    text: "Le lien est peut-être erroné ou la page a été déplacée. Mais le café est toujours chaud",
    back: "Retour à l'accueil",
  },
};

const NotFound = () => {
  const t = usePick()(T);
  const lang = useLang();
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={t.seo} description={t.desc} noindex />
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center bg-paper px-5 pb-24 pt-36 text-center">
        <p className="hand text-[5rem] leading-none">404</p>
        <Scribble className="mt-1 w-28 text-ink" />
        <h1 className="label-type mt-8 text-lg font-bold">{t.title}</h1>
        <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/80">
          {t.text} <HandHeart className="h-[1em] w-[1.05em] -translate-y-0.5" />
        </p>
        <Link
          to={href("home", lang)}
          className="btn-paper mt-9 bg-ink text-paper-light"
        >
          {t.back} <ArrowRight size={16} />
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
