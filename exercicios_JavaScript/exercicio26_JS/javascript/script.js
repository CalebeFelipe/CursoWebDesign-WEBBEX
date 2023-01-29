let root = document.querySelector('html');
let menuHamburguer = document.querySelector('.header-nav__hamburgger');

function abrirMenu(){
    root.classList.toggle('menu-opened');
}

menuHamburguer
    .addEventListener('click', abrirMenu);