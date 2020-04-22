import '../css/normalize.css';
import '../css/app.css';
import 'svg-url-loader?iesafe!../assets/dis-logo.svg';
import 'svg-url-loader?iesafe!../assets/discord.svg';

console.log("Welcome! Greetings from app.js");

document.addEventListener('DOMContentLoaded', function () {
  let develop = document.querySelector('#develop');

  develop.addEventListener('mouseenter', function () {
    develop.lastElementChild.classList.add('gone');
  });
  develop.addEventListener('mouseleave', function () {
    develop.lastElementChild.classList.remove('gone');
  });
});