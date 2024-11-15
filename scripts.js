function toggleMenu() {
    const nav = document.querySelector('.hide');
    nav.classList.toggle('show');
}

function hideSideBar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

var slideIndex = 0; // Start at 0 to make auto-slideshow easier to manage
showSlides(); // Call the function once to display the first slide

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Remove fade-in class and hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    slides[i].classList.remove("fade-in");
  }

  // Increment the slideIndex and reset to 1 if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show the current slide and add fade-in effect
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => {
    slides[slideIndex - 1].classList.add("fade-in");
  }, 10); // Slight delay to allow display to update first

  // Update dots to show the active slide
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }

  // Set interval for the next slide change
  setTimeout(showSlides, 12000); // Change slides every 3 seconds
}




