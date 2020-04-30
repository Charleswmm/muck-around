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

  //  Mobile nav menu uncheck menu checkboxes

  const dropdown_toggle = document.querySelectorAll('.mobile-dropdown-toggle');

  dropdown_toggle.forEach((item) => {
    item.addEventListener('click', function () {

      const checked_toggle = document.querySelectorAll('.mobile-dropdown-toggle:checked');

      checked_toggle.forEach( toggle => toggle.checked = toggle === item);
    });
  });
 });
