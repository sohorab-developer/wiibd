const images = [
    "css/images/welding.jpeg", 
    "css/images/welding2.jpeg"
  ];

  let currentIndex = 0;
  const heroSection = document.querySelector(".hero");

  function changeBackground() {
    heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentIndex]}')`;
    heroSection.style.animation = 'zoomInOut 3s ease-in-out infinite';
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeBackground, 3000);

  changeBackground();