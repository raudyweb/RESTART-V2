import type { CSSProperties, ReactNode } from "react";

/** Aparece con un pequeño desplazamiento al entrar en pantalla. La lógica está en PageTransition y el estilo en index.css. */
const Reveal = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) => (
  <Tag data-reveal="" className={className} style={delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined}>
    {children}
  </Tag>
);

export default Reveal;
