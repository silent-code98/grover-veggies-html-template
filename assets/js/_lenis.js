import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
};
