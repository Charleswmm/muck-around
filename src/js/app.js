import '../css/normalize.css';
import '../css/app.css';
import 'svg-url-loader?iesafe!../assets/dis-logo.svg';
import 'svg-url-loader?iesafe!../assets/discord.svg';

console.log("Welcome! Greetings from app.js");

document.addEventListener('DOMContentLoaded', function () {
  const menu_item = document.querySelectorAll('.nav-list-menu');

  menu_item.forEach((e) => {
    const dropdown = e.lastElementChild;

    e.addEventListener('mouseenter', function (o) {
      dropdown.classList.add('show');
      dropdown.classList.remove('gone');
    });

    e.addEventListener('mouseleave', function (o) {
      dropdown.classList.add('gone');
      dropdown.classList.remove('show');
    });

  });
});
