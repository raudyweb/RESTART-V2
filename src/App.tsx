import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import FoodTruck from "./pages/FoodTruck.tsx";
import MacuBakery from "./pages/MacuBakery.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToHash from "./components/ScrollToHash";
import PageTransition from "./components/paper/PageTransition";

// /carta lleva directamente al PDF de la carta (en Vercel ya se redirige antes de llegar aquí)
const CartaRedirect = () => {
  useEffect(() => {
    window.location.replace("/Carta.pdf");
  }, []);
  return null;
};

/** Rutas de la web. El router (navegador o servidor) lo pone quien la usa. */
const App = () => (
  <>
    <ScrollToHash />
    <PageTransition>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/carta" element={<CartaRedirect />} />
        <Route path="/food-truck" element={<FoodTruck />} />
        <Route path="/macu-bakery" element={<MacuBakery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  </>
);

export default App;
