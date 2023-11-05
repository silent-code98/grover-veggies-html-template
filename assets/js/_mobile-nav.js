export const initMobileNav = () => {
  const navToggle = document.querySelector("#nav__toggle");
  const navMenu = document.querySelector("#nav__menu");

  navToggle.addEventListener("click", () => {
    const visibility = navMenu.getAttribute("data-visible");

    if (visibility === "false") {
      navMenu.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      navMenu.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
};
