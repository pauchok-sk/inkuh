export default function slides() {
  const kitchensSliders = document.querySelectorAll(".s-kitchens__item-slider");

  if (kitchensSliders.length) {
    kitchensSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 800,
        autoplay: {
          delay: 3200,
        },
        spaceBetween: 15,
        navigation: {
          nextEl: slider.querySelector(".slider-btn._next"),
          prevEl: slider.querySelector(".slider-btn._prev"),
        },
        scrollbar: {
          el: slider
            .closest(".s-kitchens__item")
            .querySelector(".slider-scrollbar"),
          draggable: true,
        },
      });
    });
  }

  const methodSlider = document.querySelector(".s-method__slider");

  if (methodSlider) {
    const swiper = new Swiper(methodSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      scrollbar: {
        el: ".s-method .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }
}
