var img = document.querySelectorAll("#img");

img[0].addEventListener("mouseover", () => {
  img[1].src = "./res/4.png";
});
img[0].addEventListener("mouseout", () => {
  img[1].src = "./res/2.png";
});
img[1].addEventListener("mouseover", () => {
  img[0].src = "./res/3.png";
});
img[1].addEventListener("mouseout", () => {
  img[0].src = "./res/1.png";
});
img[2].addEventListener("click", () => {
  img[0].src = "./res/3.png";
  img[1].src = "./res/1.png";
  img[3].src = "./res/2.png";
  img[2].src = "./res/4.png";
});
