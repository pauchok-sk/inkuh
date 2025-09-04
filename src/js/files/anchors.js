
export default function anchors() {
  document.querySelectorAll("[data-anchor]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      if (scrollTarget) {
        window.scrollBy({
          top: scrollTarget.getBoundingClientRect().top,
          behavior: "smooth",
        });

        handlerBurgerClose();
      }
    });
  });

  function handlerBurgerClose() {
    const burger = document.querySelector("#burger");
    const overlay = document.querySelector("#burger-overlay");

    document.body.classList.remove("body-hidden");
    burger.classList.remove("_open")
    overlay.classList.remove("_active")
  }
}