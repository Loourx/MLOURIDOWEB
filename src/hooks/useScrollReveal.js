import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("[data-reveal]")
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element, index) => {
      const delay =
        element.getAttribute("data-reveal-delay") ??
        `${Math.min(index * 40, 400)}ms`;
      element.style.setProperty("--reveal-delay", delay);
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
}

