"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fallback if IntersectionObserver is not available
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".reveal-left, .reveal-right, .reveal-up, .reveal-fade")
        .forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Schedule the addition of is-revealed so the initial transform is guaranteed to be painted first
            requestAnimationFrame(() => {
              setTimeout(() => {
                el.classList.add("is-revealed");
              }, 60);
            });
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.04,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const observeNewElements = () => {
      const targets = document.querySelectorAll(
        ".reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed), .reveal-up:not(.is-revealed), .reveal-fade:not(.is-revealed)"
      );
      targets.forEach((target) => observer.observe(target));
    };

    // Run after a short frame to let DOM paint initial styles
    const initTimer = setTimeout(observeNewElements, 40);

    // Watch for dynamic DOM modifications
    const mutationObserver = new MutationObserver(() => {
      observeNewElements();
    });

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(initTimer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
