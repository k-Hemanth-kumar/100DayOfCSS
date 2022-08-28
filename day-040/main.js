const img = document.querySelectorAll("img");
img.forEach((e) => {
  e.addEventListener("click", (toggle) => {
    toggle.target.classList.toggle("active");
    toggle.target.classList.toggle("close");
  });
});
