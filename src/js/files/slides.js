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
  const offerSlider = document.querySelector(".s-offer__slider");

  if (offerSlider) {
    const swiper = new Swiper(offerSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3300,
      },
      scrollbar: {
        el: ".s-offer .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const reportSlider = document.querySelector(".s-report__slider");

  if (reportSlider) {
    const swiper = new Swiper(reportSlider, {
      speed: 800,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".s-report .slider-btn._next",
        prevEl: ".s-report .slider-btn._prev",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 55,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
  }

  const reviewsSliders = document.querySelectorAll(".s-reviews__slider");

  if (reviewsSliders.length) {
    reviewsSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 800,
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
          delay: 3500,
        },
        navigation: {
          nextEl: slider
            .closest(".s-reviews__slider-wrapper")
            .querySelector(".s-reviews .slider-btn._next"),
          prevEl: slider
            .closest(".s-reviews__slider-wrapper")
            .querySelector(".s-reviews .slider-btn._prev"),
        },
        scrollbar: {
          el: slider.closest("[data-tab]").querySelector(".slider-scrollbar"),
          draggable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      });
    });
  }
}
