export default function headerAddress() {
  const drop = document.querySelector(".header__address-dropdown");

  if (drop) {
    const btn = document.querySelector(".header__address-btn");

    document.body.addEventListener("click", handleClose);
    drop.addEventListener("click", (e) => e.stopPropagation());

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (btn.classList.contains("_active")) {
        handleClose();
      } else {
        handleOpen();
      }
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
