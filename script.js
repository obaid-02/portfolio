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
    var developerText = document.querySelector('.section__text__p2'); // Move outside the setInterval function

    setInterval(function() {
        developerText.classList.remove('show');

        // Increment the index and reset to 0 if it exceeds the length of the array
        currentIndex = (currentIndex + 1) % roles.length;

        setTimeout(function() {
            developerText.textContent = roles[currentIndex];
            developerText.classList.add('show');
        }, 1000); // Adjust the wait time between transitions (in milliseconds)
    }, 2000); // Adjust the total interval duration (in milliseconds)

    // Immediately execute the function once after the page loads
    developerText.textContent = roles[currentIndex];
    developerText.classList.add('show');
});
// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Array of developer roles
    var roles = ['Frontend Development', 'Android Development'];
    var currentIndex = 0;

    // Function to alternate between developer roles
    var experienceTitle = document.querySelector('.experience-box .experience-sub-title'); // Get reference to the specific experience title element

    setInterval(function() {
        experienceTitle.classList.remove('show');

        // Increment the index and reset to 0 if it exceeds the length of the array
        currentIndex = (currentIndex + 1) % roles.length;

        setTimeout(function() {
            experienceTitle.textContent = roles[currentIndex];
            experienceTitle.classList.add('show');
        }, 1000); // Adjust the wait time between transitions (in milliseconds)
    }, 2000); // Adjust the total interval duration (in milliseconds)

    // Immediately execute the function once after the page loads
    experienceTitle.textContent = roles[currentIndex];
    experienceTitle.classList.add('show');
});


