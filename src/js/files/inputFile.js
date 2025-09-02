export default function inputFile() {
  const inputs = document.querySelectorAll(".input-file");

  if (inputs.length) {
    inputs.forEach(input => {
      input.addEventListener("change", (e) => {
        if (e.target.files.length) {
          const title = input.nextElementSibling.querySelector("span");

          title.textContent = "Файл прикреплён";
        }
      })
    })
  }
}