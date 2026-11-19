import { useEffect, type ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import FoodTruck from "./pages/FoodTruck.tsx";
import MacuBakery from "./pages/MacuBakery.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CookiePolicy, LegalNotice, PrivacyPolicy } from "./pages/Legal.tsx";
import ScrollToHash from "./components/ScrollToHash";
import PageTransition from "./components/paper/PageTransition";
import { LangProvider, ROUTES, type Lang, type PageKey } from "./i18n";

// /carta lleva directamente al PDF de la carta (en Vercel ya se redirige antes de llegar aquí)
const CartaRedirect = () => {
  useEffect(() => {
    window.location.replace("/Carta.pdf");
  }, []);
  return null;
};

const PAGES: Record<Exclude<PageKey, "notFound">, ComponentType> = {
  home: Index,
  about: About,
  macu: MacuBakery,
  truck: FoodTruck,
  legal: LegalNotice,
  privacy: PrivacyPolicy,
  cookies: CookiePolicy,
};

const notFoundFor = (lang: Lang) => (
  <LangProvider lang={lang} page="notFound">
    <NotFound />
  </LangProvider>
);

/** Rutas de la web en los tres idiomas. El router (navegador o servidor) lo pone quien la usa. */
const App = () => (
  <>
    <ScrollToHash />
    <PageTransition>
      <Routes>
        {ROUTES.map(({ page, lang, path }) => {
          const Page = PAGES[page];
          return (
            <Route
              key={path}
              path={path}
              element={
                <LangProvider lang={lang} page={page}>
                  <Page />
                </LangProvider>
              }
            />
          );
        })}
        <Route path="/carta" element={<CartaRedirect />} />
        <Route path="/ca/*" element={notFoundFor("ca")} />
        <Route path="/en/*" element={notFoundFor("en")} />
        <Route path="/fr/*" element={notFoundFor("fr")} />
        <Route path="*" element={notFoundFor("es")} />
      </Routes>
    </PageTransition>
  </>
);

export default App;
