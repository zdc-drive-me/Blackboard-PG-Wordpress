document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const nav = document.querySelector("#logoNav");
  if (!nav) return; // no header on this template

  // Try to find a sensible "content starts here" target on any template
  const content =
    document.querySelector("#main-content") ||                  // your index.html
    document.querySelector(".wp-block-post-content") ||         // single/page
    document.querySelector(".wp-block-query") ||                // archive/query
    document.querySelector("main");

  ScrollTrigger.matchMedia({
    "(min-width: 768px)": () => {
      const navOffset     = nav.getBoundingClientRect().left;
      const desiredMargin = parseFloat(getComputedStyle(nav).marginLeft) || 24;
      const navHeight     = nav.offsetHeight;

      // If we didn't find "content", just give the animation a fixed distance
      const contentTopAbs = content
        ? content.getBoundingClientRect().top + window.scrollY
        : window.scrollY + 300;

      const totalDistance = 170;
      const endScroll     = contentTopAbs + totalDistance - navHeight;

      const origNavWidth   = nav.offsetWidth;
      const baseScale      = 0.24;
      const extraPx        = 8;
      const finalScale     = (origNavWidth * baseScale - extraPx) / origNavWidth;
      const originalBorder = parseFloat(getComputedStyle(nav).borderBottomWidth) || 1;
      const finalBorder    = originalBorder / finalScale;

      const logo = nav.querySelector("img");

      gsap.timeline({
        scrollTrigger: { start: 1, end: endScroll, scrub: true }
      })
      .to(nav, {
        scale: finalScale,
        x:     desiredMargin - navOffset,
        borderBottomWidth: finalBorder,
        transformOrigin: "left top",
        ease: "none",
        force3D: true
      }, 0)
      .to(logo, { x: -5, ease: "none", force3D: true }, 0);

      // Helps when the Editor/layout reflows
      ScrollTrigger.refresh();
    },

    "(max-width: 767px)": () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  });
});