// Function to change the main image when a thumbnail is clicked
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

// Zoom in effect for main image
document.getElementById("mainImage").addEventListener("click", function () {
  if (this.style.transform === "scale(1.5)") {
    this.style.transform = "scale(1)";
    this.style.cursor = "zoom-in";
  } else {
    this.style.transform = "scale(1.5)";
    this.style.cursor = "zoom-out";
  }
});
