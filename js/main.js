const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

// Prevent layout surprises if an optional image is missing.
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("image-unavailable");
  }, { once: true });
});
