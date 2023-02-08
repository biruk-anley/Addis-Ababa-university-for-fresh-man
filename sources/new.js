var images = [
    "image1.jpg",
    
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
  ];
  var currentImageIndex = 0;
  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  
  previousButton.addEventListener("click", showPreviousImage);
  nextButton.addEventListener("click", showNextImage);
  function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    document.getElementById("image").src = images[currentImageIndex];
  }
  
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    document.getElementById("image").src = images[currentImageIndex];
  }
  showNextImage();
    