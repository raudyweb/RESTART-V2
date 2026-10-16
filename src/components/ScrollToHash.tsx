import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    const maxAttempts = 30; // ~3 segundos máximo

    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };

    tryScroll();
}, [pathname, hash]);

  return null;
};

export default ScrollToHash;
