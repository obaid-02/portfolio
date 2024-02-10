function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 // Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Array of developer roles
    var roles = ['Android Developer', 'Frontend Developer', 'Machine Learning Engineer'];
    var currentIndex = 0;

    // Function to alternate between developer roles
    setInterval(function() {
        var developerText = document.querySelector('.section__text__p2');
        developerText.classList.remove('show');

        // Increment the index and reset to 0 if it exceeds the length of the array
        currentIndex = (currentIndex + 1) % roles.length;

        setTimeout(function() {
            developerText.textContent = roles[currentIndex];
            developerText.classList.add('show');
        }, 1000); // Adjust the wait time between transitions (in milliseconds)
    }, 5000); // Adjust the total interval duration (in milliseconds)
});

