export default function select() {
  const buttons = document.querySelectorAll(".select-btn");

  if (buttons.length) {
    const selects = document.querySelectorAll(".select");
    const selectBodies = document.querySelectorAll(".select-body");

    selectBodies.forEach((body) => {
      body.addEventListener("click", (e) => e.stopPropagation());
    });

    selects.forEach((select) => {
      const input = select.querySelector(".select-input");
      const items = select.querySelectorAll(".select-item");
      const title = select.querySelector(".select-title");

      items.forEach((item) => {
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
      document.querySelectorAll(".select").forEach((select) => {
        select.classList.remove("_open");
      });
    });

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const parent = btn.closest(".select");

        if (parent.classList.contains("_open")) {
          handleClose(parent);
        } else {
          handleOpen(parent);
        }
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
