const fullscreenView = document.getElementById("fullscreenView");
const fullscreenName = document.getElementById("fullscreenName");
const fullscreenHex = document.getElementById("fullscreenHex");
const closeFullscreen = document.getElementById("closeFullscreen");

const colourOptions = {
  teal: {
    name: "Deep Teal",
    hex: "#008080",
    className: "teal-full"
  },
  olive: {
    name: "Earthy Olive Green",
    hex: "#526B49",
    className: "olive-full"
  }
};

let lastFocusedButton = null;

document.querySelectorAll("[data-expand]").forEach((button) => {
  button.addEventListener("click", () => {
    const colour = colourOptions[button.dataset.expand];
    if (!colour) return;

    lastFocusedButton = button;
    fullscreenView.classList.remove("teal-full", "olive-full");
    fullscreenView.classList.add(colour.className);
    fullscreenName.textContent = colour.name;
    fullscreenHex.textContent = colour.hex;
    fullscreenView.hidden = false;
    document.body.style.overflow = "hidden";
    closeFullscreen.focus();
  });
});

function closePreview() {
  fullscreenView.hidden = true;
  fullscreenView.classList.remove("teal-full", "olive-full");
  document.body.style.overflow = "";
  if (lastFocusedButton) lastFocusedButton.focus();
}

closeFullscreen.addEventListener("click", closePreview);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !fullscreenView.hidden) {
    closePreview();
  }
});
