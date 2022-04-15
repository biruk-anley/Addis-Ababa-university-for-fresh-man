var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 5,
    slideShadows: true,
  },
  loop: true,
});

// function city() {
//   document.getElementById("campus").style.display = "none";
//   document.getElementById("city").style.display = "block";
// }
// function campus() {
//   document.getElementById("city").style.display = "none";
//   document.getElementById("campus").style.display = "block";
// }
