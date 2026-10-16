import type React from "react";
import { Bean, Leaf, Sprout, Sun } from "lucide-react";
import { TornEdge } from "@/components/paper/Paper";

const features = [
  { icon: Bean, label: ["Café de", "especialidad"] },
  { icon: Leaf, label: ["Opciones", "sin gluten"] },
  { icon: Sun, label: ["Terraza", "dog-friendly"] },
  { icon: Sprout, label: ["Ambiente", "good vibes"] },
];

const FeaturesBand = () => (
  <section aria-label="Lo que nos define" className="relative bg-sage py-12 md:py-14">
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

export default FeaturesBand;
