import '../css/normalize.css';
import '../css/app.css';

console.log("Welcome! Greetings from app.js");

document.addEventListener('DOMContentLoaded', function () {

  // Nav menu drop down - adds and removes the 'active' class

  const menu_item = document.querySelectorAll('.nav-list-menu');
  menu_item.forEach((item) => {
    const dropdown = item.lastElementChild;
    item.addEventListener('mouseenter', function () {
      dropdown.classList.add('active');
    });
    item.addEventListener('mouseleave', function () {
      dropdown.classList.remove('active');
    });
  });

//  Mobile nav menu drop down and burger animation



});
