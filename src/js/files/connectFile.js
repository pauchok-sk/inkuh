export default function connectFile() {
  const input = document.querySelector(".s-connect__form .input-file");

  if (input) {
    const gallery = document.querySelector(".s-connect__gallery")
    input.addEventListener("change", (e) => {
      const files = e.target.files;

      if (files.length) {
        gallery.innerHTML = "";
        Array.from(files).forEach(file => {
          const reader = new FileReader();

          reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            gallery.appendChild(img)
          }

          reader.readAsDataURL(file);
        })
      }
    })
  }
}