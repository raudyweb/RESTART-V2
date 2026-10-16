import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { HandHeart, Scribble } from "@/components/paper/Paper";

const NotFound = () => (
  <div className="flex min-h-screen flex-col">
    <SEO path="/404" title="Página no encontrada | Re-Start Coffee" description="Esta página no existe." noindex />
    <Navbar />
    <main className="flex flex-1 flex-col items-center justify-center bg-paper px-5 pb-24 pt-36 text-center">
      <p className="hand text-[5rem] leading-none">404</p>
      <Scribble className="mt-1 w-28 text-ink" />
      <h1 className="label-type mt-8 text-lg font-bold">Esta página no existe</h1>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/80">
        Puede que el enlace esté mal o que la página se haya movido. Pero el café sigue caliente{" "}
        <HandHeart className="h-[1em] w-[1.05em] -translate-y-0.5" />
      </p>
      <Link to="/" className="btn-paper mt-9 bg-ink text-paper-light">
        Volver al inicio <ArrowRight size={16} />
      </Link>
    </main>
    <Footer />
  </div>
);

export default NotFound;
