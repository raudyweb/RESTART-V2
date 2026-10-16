// Developed by RAUDY
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import "@fontsource/permanent-marker/400.css";
import "./index.css";

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

const root = document.getElementById("root")!;
// Si la página viene ya generada (prerender), React la "activa" sin volver a pintarla
if (root.hasChildNodes()) hydrateRoot(root, tree);
else createRoot(root).render(tree);
