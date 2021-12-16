// Add a toggle to the hamburger menu in smaller media queries
// Capture the hambburger menu icon and save it in a variable
const menuElement = document.querySelector('.menu');

// Capture mobile nav ul element and save it in a varible
const navUlElement = document.querySelector('.mobile-only');
console.log(navUlElement);

// Create an event listener to capture clicks on the hamburger menu icon
menuElement.addEventListener('click', function(event) {
    navToggle(event.target);
    
})
// Create hamburger menu toggle
// When hamburger menu icon is clicked, mobile nav uls are visible
// When menu icon is clicked again, hamburger menu nav uls are hidden/collapsed
function navToggle() {
navUlElement.classList.toggle("show");
}

// 
