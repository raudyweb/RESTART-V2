import type { ReactNode } from "react";
import { Scribble, TornEdge } from "@/components/paper/Paper";

/** Cabecera de página interior: foto a sangre, título manuscrito y borde rasgado. */
const PageHero = ({
  img,
  alt,
  imgPosition = "50% 50%",
  eyebrow,
  title,
  subtitle,
  children,
}: {
  img: string;
  alt: string;
  imgPosition?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) => (
  <section className="relative isolate flex min-h-[78svh] items-end bg-ink text-white">
    <img
      src={img}
      alt={alt}
      className="absolute inset-0 -z-10 h-full w-full object-cover"
      style={{ objectPosition: imgPosition }}
      fetchPriority="high"
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/5" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/35" />

    <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-28 md:px-10 md:pb-24">
      <div className="max-w-xl">
        <p className="label-type text-xs md:text-sm">{eyebrow}</p>
        <h1 className="hand mt-5 -rotate-[4deg] text-[clamp(3rem,8vw,5.6rem)] tracking-wide">{title}</h1>
        <Scribble className="ml-[12%] mt-1 w-[min(260px,55%)] -rotate-[3deg] text-white/90" />
        {subtitle && <p className="label-type mt-7 text-sm leading-relaxed md:text-base">{subtitle}</p>}
        {children && <div className="mt-8 flex w-full max-w-[300px] flex-col gap-4">{children}</div>}
      </div>
    </div>
    <TornEdge side="bottom" seed={211} className="text-paper" />
  </section>
);

export default PageHero;
