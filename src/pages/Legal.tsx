import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Scribble } from "@/components/paper/Paper";
import { LEGAL_OWNER, LEGAL_UPDATED } from "@/config/legal";
import { useLang } from "@/i18n";
import { LEGAL, PENDING, UPDATED_LABEL, type LegalDoc } from "./legal-i18n";

/** Sustituye {name}, {taxId}… por los datos de src/config/legal.ts, o "[pendiente]" si faltan. */
const fill = (text: string, pending: string) =>
  text.replace(/\{(\w+)\}/g, (_, key: keyof typeof LEGAL_OWNER) => LEGAL_OWNER[key] || pending);

/** Página legal (aviso legal, privacidad o cookies) en el idioma actual. */
const LegalPage = ({ doc }: { doc: LegalDoc }) => {
  const lang = useLang();
  const d = LEGAL[doc][lang];
  const pending = PENDING[lang];
  return (
    <div className="flex min-h-screen flex-col">
      <SEO title={`${d.title} | Re-Start Coffee`} description={d.intro} noindex />
      <Navbar />
      <main className="flex-1 bg-paper px-5 pb-24 pt-32 md:pt-40">
        <article className="mx-auto max-w-2xl">
          <h1 className="hand text-[2.4rem] leading-tight md:text-[3rem]">{d.title}</h1>
          <Scribble className="mt-1 w-32 text-ink" />
          <p className="font-prose mt-8 text-[16px] leading-[1.8] text-ink/85">{d.intro}</p>
          {d.sections.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="label-type text-sm font-bold">{s.h}</h2>
              {s.p.map((p) => (
                <p key={p} className="font-prose mt-3 text-[15.5px] leading-[1.8] text-ink/85">
                  {fill(p, pending)}
                </p>
              ))}
            </section>
          ))}
          <p className="mt-12 text-xs text-muted-foreground">
            {UPDATED_LABEL[lang]}: {LEGAL_UPDATED}
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export const LegalNotice = () => <LegalPage doc="legal" />;
export const PrivacyPolicy = () => <LegalPage doc="privacy" />;
export const CookiePolicy = () => <LegalPage doc="cookies" />;
