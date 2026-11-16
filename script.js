const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".abstract-toggle").forEach((button) => {
  const abstract = document.getElementById(button.getAttribute("aria-controls"));
  const label = button.querySelector(".bracketed-link-label");
  if (!abstract || !label) {
    return;
  }
  button.addEventListener("click", () => {
    const expand = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expand));
    label.textContent = expand ? "hide abstract" : "abstract";
    abstract.hidden = !expand;
  });
});
