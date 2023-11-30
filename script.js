const loader = document.getElementById("blur-container");
const wrapper = document.getElementById("container");

function animateEffects() {
  let scaleValue = 0; // Initial scale value

  const animationInterval = setInterval(() => {
    scaleValue += 0.02; // Adjust the increment for a smoother transition
    loader.style.transform = `scale(${scaleValue})`;

    if (scaleValue >= 1) {
      clearInterval(animationInterval);
      setTimeout(zoomInImage, 1500); // Call the zoomInImage function after a delay
    }
  }, 25); // Adjust the interval for smoother animation
}

function zoomInImage() {
  let blurAmount = 0; 
  let scaleValue = 1; 

  const zoomInterval = setInterval(() => {
    blurAmount += 1;
    scaleValue += 0.1;
    loader.style.filter = `blur(${blurAmount}px)`;
    loader.style.transform = `scale(${scaleValue})`;
  
    if (blurAmount >= 20) {
      clearInterval(zoomInterval);
      loader.style.display = "none";
      loader.style.opacity = 0;
      wrapper.style.display = "block";
    }
  }, 60); // Adjust the interval for smoother animation
}

window.onload = animateEffects;
