import type React from "react";
import { Bean, Leaf, Sprout, Sun } from "lucide-react";
import { TornEdge } from "@/components/paper/Paper";
import { usePick } from "@/i18n";

const ICONS = [Bean, Leaf, Sun, Sprout];
const T = {
  es: {
    aria: "Lo que nos define",
    labels: [["Café de", "especialidad"], ["Opciones", "sin gluten"], ["Terraza", "dog-friendly"], ["Ambiente", "good vibes"]],
  },
  ca: {
    aria: "El que ens defineix",
    labels: [["Cafè", "d'especialitat"], ["Opcions", "sense gluten"], ["Terrassa", "dog-friendly"], ["Ambient", "good vibes"]],
  },
  en: {
    aria: "What we're about",
    labels: [["Specialty", "coffee"], ["Gluten-free", "options"], ["Dog-friendly", "terrace"], ["Good vibes", "only"]],
  },
};

const FeaturesBand = () => {
  const t = usePick()(T);
  const features = t.labels.map((label, i) => ({ icon: ICONS[i], label }));
  return (
  <section aria-label={t.aria} className="relative bg-sage py-12 md:py-14">
    <TornEdge side="top" seed={41} className="text-sage" />
    <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 md:grid-cols-4 md:px-10">
      {features.map(({ icon: Icon, label }, idx) => (
        <li key={label.join(" ")} className="flex flex-col items-center text-center" data-reveal="" style={{ "--reveal-delay": `${idx * 90}ms` } as React.CSSProperties}>
          <Icon size={36} strokeWidth={1.25} aria-hidden="true" />
          <span className="label-type mt-4 text-[13px] leading-snug md:text-sm">
            {label[0]}
            <br />
            {label[1]}
          </span>
        </li>
      ))}
    </ul>
    <TornEdge side="bottom" seed={43} className="text-sage" />
  </section>
  );
};

export default FeaturesBand;
