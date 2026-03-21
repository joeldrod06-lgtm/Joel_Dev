export const smoothScrollTo = (element: HTMLElement, offset = 96) => {
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
};
