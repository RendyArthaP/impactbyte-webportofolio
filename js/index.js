const menu = document.querySelector('.menu');

menu.addEventListener('click', function() {
  menu.parentElement.children[1].classList.toggle('open');
})