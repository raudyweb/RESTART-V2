import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App.tsx";

/** Genera el HTML de una ruta para el prerender (se ejecuta al compilar, no en el navegador). */
export function render(url: string) {
  const ctx: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={ctx}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const h = ctx.helmet!;
  const head = [h.title, h.priority, h.meta, h.link, h.script].map((x) => x.toString()).join("\n    ");
  return { html, head, htmlAttrs: h.htmlAttributes.toString() };
}
