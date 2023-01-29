let root = document.querySelector('html');
let menuHamburguer = document.querySelector('.header-nav__hamburgger');

root.classList.remove('no-js');
root.classList.add('js');

function abrirMenu(){
    root.classList.toggle('menu-opened');
}

menuHamburguer
    .addEventListener('click', abrirMenu);