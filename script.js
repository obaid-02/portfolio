function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Alternate between Android Developer and Frontend Developer
    setInterval(function() {
        var developerText = document.querySelector('.section__text__p2');
        developerText.classList.remove('show');
        setTimeout(function() {
            if (developerText.textContent === 'Android Developer') {
                developerText.textContent = 'Frontend Developer';
            } else {
                developerText.textContent = 'Android Developer';
            }
            developerText.classList.add('show');
        }, 1000); // Adjust the wait time between transitions (in milliseconds)
    }, 5000); // Adjust the total interval duration (in milliseconds)
});
