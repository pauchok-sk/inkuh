(() => {
    "use strict";
    function anchors_anchors() {
        document.querySelectorAll("[data-anchor]").forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                let href = this.getAttribute("href").substring(1);
                const scrollTarget = document.getElementById(href);
                if (scrollTarget) {
                    window.scrollBy({
                        top: scrollTarget.getBoundingClientRect().top,
                        behavior: "smooth"
                    });
                    handlerBurgerClose();
                }
            });
        });
        function handlerBurgerClose() {
            const burger = document.querySelector("#burger");
            const overlay = document.querySelector("#burger-overlay");
            document.body.classList.remove("body-hidden");
            burger.classList.remove("_open");
            overlay.classList.remove("_active");
        }
    }
    function burger() {
        const burgerOpen = document.querySelector("#burger-open");
        const burgerClose = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        const burgerOverlay = document.querySelector("#burger-overlay");
        if (burger) {
            burger.addEventListener("click", e => e.stopPropagation());
            burgerOverlay.addEventListener("click", handlerBurgerClose);
            burgerOpen.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerOpen();
            });
            burgerClose.addEventListener("click", e => {
                e.stopPropagation();
                handlerBurgerClose();
            });
            function handlerBurgerClose() {
                burger.classList.remove("_open");
                burgerOverlay.classList.remove("_active");
                document.body.classList.remove("body-hidden");
            }
            function handlerBurgerOpen() {
                burger.classList.add("_open");
                burgerOverlay.classList.add("_active");
                document.body.classList.add("body-hidden");
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function connectFile() {
        const input = document.querySelector(".s-connect__form .input-file");
        if (input) {
            const gallery = document.querySelector(".s-connect__gallery");
            input.addEventListener("change", e => {
                const files = e.target.files;
                if (files.length) {
                    gallery.innerHTML = "";
                    Array.from(files).forEach(file => {
                        const reader = new FileReader;
                        reader.onload = function(e) {
                            const img = document.createElement("img");
                            img.src = e.target.result;
                            gallery.appendChild(img);
                        };
                        reader.readAsDataURL(file);
                    });
                }
            });
        }
    }
    function headerAddress() {
        const drop = document.querySelector(".header__address-dropdown");
        if (drop) {
            const btn = document.querySelector(".header__address-btn");
            document.body.addEventListener("click", handleClose);
            drop.addEventListener("click", e => e.stopPropagation());
            btn.addEventListener("click", e => {
                e.stopPropagation();
                if (btn.classList.contains("_active")) handleClose(); else handleOpen();
            });
            function handleOpen() {
                btn.classList.add("_active");
                drop.classList.add("_open");
            }
            function handleClose() {
                btn.classList.remove("_active");
                drop.classList.remove("_open");
            }
        }
    }
    function headerScroll() {
        const header = document.querySelector(".header");
        if (header) {
            const headerNav = document.querySelector(".header-nav");
            const scrollTarget = window.matchMedia("(max-width: 991px)").matches ? header : headerNav;
            let lastScrollTop = 0;
            window.addEventListener("scroll", () => {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                if (scrollTop > scrollTarget.clientHeight && scrollTop > lastScrollTop) scrollTarget.classList.add("_scroll"); else scrollTarget.classList.remove("_scroll");
                lastScrollTop = scrollTop;
            });
        }
    }
    function inputFile() {
        const inputs = document.querySelectorAll(".input-file");
        if (inputs.length) inputs.forEach(input => {
            input.addEventListener("change", e => {
                if (e.target.files.length) {
                    const title = input.nextElementSibling.querySelector("span");
                    title.textContent = "Файл прикреплён";
                }
            });
        });
    }
    function inputmask() {
        const inputs = document.querySelectorAll('input[type="tel"]');
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(inputs);
    }
    function map() {
        const map = document.querySelector("#map");
        if (map) {
            const center = JSON.parse(map.dataset.center);
            const zoom = Number(map.dataset.zoom);
            map.dataset.icon;
            function init() {
                const htmlMap = new ymaps.Map(map, {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, {});
                htmlMap.geoObjects.add(placemark);
                htmlMap.controls.remove("geolocationControl");
                htmlMap.controls.remove("searchControl");
                htmlMap.controls.remove("trafficControl");
                htmlMap.controls.remove("typeSelector");
                htmlMap.controls.remove("fullscreenControl");
                htmlMap.controls.remove("zoomControl");
                htmlMap.controls.remove("rulerControl");
                htmlMap.behaviors.disable([ "scrollZoom" ]);
            }
            ymaps.ready(init);
        }
    }
    function more() {
        const containers = document.querySelectorAll(".container-more");
        if (containers.length) containers.forEach(container => {
            const btn = container.querySelector("[data-more-btn]");
            const count = +container.dataset.countShow;
            const hideItems = Array.from(container.querySelectorAll("[data-more-item]")).filter(item => window.getComputedStyle(item).display === "none");
            if (hideItems.length === 0) btn.remove();
            btn.addEventListener("click", () => {
                const items = container.querySelectorAll("[data-more-item]");
                const hideItems = Array.from(items).filter(item => window.getComputedStyle(item).display === "none");
                hideItems.splice(0, count).forEach(item => {
                    item.style.display = "block";
                    setTimeout(() => {
                        item.style.opacity = 1;
                        item.style.transform = "translateY(0)";
                    });
                });
                if (hideItems.length <= 0) btn.remove();
            });
        });
    }
    function select_select() {
        const buttons = document.querySelectorAll(".select-btn");
        if (buttons.length) {
            const selects = document.querySelectorAll(".select");
            const selectBodies = document.querySelectorAll(".select-body");
            selectBodies.forEach(body => {
                body.addEventListener("click", e => e.stopPropagation());
            });
            selects.forEach(select => {
                const input = select.querySelector(".select-input");
                const items = select.querySelectorAll(".select-item");
                const title = select.querySelector(".select-title");
                items.forEach(item => {
                    item.addEventListener("click", () => {
                        const titleText = title.textContent;
                        title.textContent = item.textContent;
                        input.value = item.textContent;
                        item.textContent = titleText;
                        handleClose(select);
                    });
                });
            });
            document.body.addEventListener("click", () => {
                document.querySelectorAll(".select").forEach(select => {
                    select.classList.remove("_open");
                });
            });
            buttons.forEach(btn => {
                btn.addEventListener("click", e => {
                    e.stopPropagation();
                    const parent = btn.closest(".select");
                    if (parent.classList.contains("_open")) handleClose(parent); else handleOpen(parent);
                });
            });
            function handleOpen(select) {
                select.classList.add("_open");
            }
            function handleClose(select) {
                select.classList.remove("_open");
            }
        }
    }
    function slides() {
        const kitchensSliders = document.querySelectorAll(".s-kitchens__item-slider");
        if (kitchensSliders.length) kitchensSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 800,
                autoplay: {
                    delay: 3200
                },
                spaceBetween: 15,
                navigation: {
                    nextEl: slider.querySelector(".slider-btn._next"),
                    prevEl: slider.querySelector(".slider-btn._prev")
                },
                scrollbar: {
                    el: slider.closest(".s-kitchens__item").querySelector(".slider-scrollbar"),
                    draggable: true
                }
            });
        });
        const methodSlider = document.querySelector(".s-method__slider");
        if (methodSlider) {
            new Swiper(methodSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                scrollbar: {
                    el: ".s-method .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    }
                }
            });
        }
        const offerSlider = document.querySelector(".s-offer__slider");
        if (offerSlider) {
            new Swiper(offerSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3300
                },
                scrollbar: {
                    el: ".s-offer .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
        const reportSlider = document.querySelector(".s-report__slider");
        if (reportSlider) {
            new Swiper(reportSlider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    nextEl: ".s-report .slider-btn._next",
                    prevEl: ".s-report .slider-btn._prev"
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 55
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25
                    }
                }
            });
        }
        const reviewsSliders = document.querySelectorAll(".s-reviews__slider");
        if (reviewsSliders.length) reviewsSliders.forEach(slider => {
            new Swiper(slider, {
                speed: 800,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    nextEl: slider.closest(".s-reviews__slider-wrapper").querySelector(".s-reviews .slider-btn._next"),
                    prevEl: slider.closest(".s-reviews__slider-wrapper").querySelector(".s-reviews .slider-btn._prev")
                },
                scrollbar: {
                    el: slider.closest("[data-tab]").querySelector(".slider-scrollbar"),
                    draggable: true
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        });
    }
    function spoller() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            });
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach(mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                });
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach(spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                });
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
                    spollerTitles.forEach(spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    });
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            function hideSpollersBody(spollersBlock) {
                const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                    spollerActiveTitle.classList.remove("_spoller-active");
                    _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach(spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                });
            });
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter(function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            });
            if (media.length) {
                const breakpointsArray = [];
                media.forEach(item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                });
                let mdQueries = breakpointsArray.map(function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                });
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach(breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter(function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        });
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    });
                    return mdQueriesArray;
                }
            }
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout(() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout(() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }, duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        function uniqArray(array) {
            return array.filter(function(item, index, self) {
                return self.indexOf(item) === index;
            });
        }
    }
    function tabs() {
        const buttons = document.querySelectorAll("[data-tab-btn]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const container = btn.closest(".tabs");
                const tabId = btn.dataset.tabBtn;
                const allButtons = container.querySelectorAll("[data-tab-btn]");
                const allTabs = container.querySelectorAll("[data-tab]");
                const currentTab = container.querySelector(`[data-tab="${tabId}"]`);
                allTabs.forEach(t => {
                    t.classList.remove("_active");
                    t.style.opacity = 0;
                });
                currentTab.classList.add("_active");
                setTimeout(() => {
                    currentTab.style.opacity = 1;
                }, 10);
                allButtons.forEach(b => b.classList.remove("_active"));
                btn.classList.add("_active");
            });
        });
    }
    spoller();
    headerScroll();
    headerAddress();
    inputmask();
    burger();
    slides();
    tabs();
    more();
    select_select();
    inputFile();
    connectFile();
    map();
    anchors_anchors();
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
})();