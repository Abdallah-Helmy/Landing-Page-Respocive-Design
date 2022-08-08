const menu = document.querySelector('.menu');
const hiddenmenu = document.querySelector('.hidden-menu');
const firstSpan = document.querySelector('.menu span:first-child ');
const secondSpan = document.querySelector('.menu span:nth-child(2)');
const thirdSpan = document.querySelector('.menu span:last-child ');

menu.addEventListener('click', function () {
  firstSpan.classList.toggle('toggle-first');
  secondSpan.classList.toggle('toggle-second');
  thirdSpan.classList.toggle('toggle-last');
  hiddenmenu.classList.toggle('toggle');
});
