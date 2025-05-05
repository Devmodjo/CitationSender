const toggleTheme = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const prefersTheme = window.matchMedia("(prefers-color-sheme:dark)");

    if (!prefersTheme.matches) {

    }
  });
};
