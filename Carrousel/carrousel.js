const image = document.getElementById("carrousel-image");
const images = ["pompe-musculation.gif", "Sans titre.jpg", "img3.jpg"];
let index = 0;

document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  image.src = images[index];
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  image.src = images[index];
};




