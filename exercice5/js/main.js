var img = document.getElementById("img");

img.addEventListener("mouseover", () => {
  img.src = "./res/image2.jpg";
});
img.addEventListener("mouseout", () => {
  img.src = "./res/image1.jpg";
});
img.addEventListener("click", () => {
  if (img.src.includes("image2.jpg")) {
    window.open("mailto:rekwassim@yahoo.fr");
  }
});
