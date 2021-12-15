// Add a toggle to the hamburger menu in smaller media queries
// Target the menu icon and save it in a variable
const menuElement = document.querySelector('.menu');

// Target nav ul element to manipulate
const navUlElement = document.querySelector('.mobile-only');
console.log(navUlElement);

// Create an event listener to capture clicks on the menu icon
menuElement.addEventListener('click', function(event) {
    navToggle(event.target);
    
})
// Create menu toggle
// When menu icon is clicked, nav uls are visible
// When menu icon is clicked again, nav uls are hidden/collapsed
function navToggle() {
navUlElement.classList.toggle("show");
}

// 
