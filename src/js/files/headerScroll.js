export default function headerScroll() {
  const header = document.querySelector(".header");

  if (header) {
    const headerNav = document.querySelector(".header-nav");
    const scrollTarget = window.matchMedia("(max-width: 991px)").matches ? header : headerNav;
    let lastScrollTop = 0;


    window.addEventListener("scroll", () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > scrollTarget.clientHeight && scrollTop > lastScrollTop) {
        scrollTarget.classList.add("_scroll");
      } else {
        scrollTarget.classList.remove("_scroll");
      }

      lastScrollTop = scrollTop;
    });
  }
}