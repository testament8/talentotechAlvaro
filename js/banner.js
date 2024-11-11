let slideIndex = 0;
showSlides();

function showSlides() {
  // let index;
  let slides = document.getElementsByClassName("banner-slide");
  console.log("slides", slides);
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
