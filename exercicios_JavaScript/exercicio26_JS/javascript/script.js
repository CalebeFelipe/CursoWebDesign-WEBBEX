let html = document.querySelector('html');
let menuHamburguer = document.querySelector('.header-nav__hamburgger');
let ariaControl = menuHamburguer.getAttribute('aria-controls');

let menu = document.getElementById(ariaControl);

console.log(ariaControl)

html.classList.remove('no-js');
html.classList.add('js');

function abrirMenu(){
    html.classList.toggle('menu-opened');

    let ariaExpanded = this.getAttribute('aria-expanded') === 'true';

    menuHamburguer.setAttribute('aria-expanded', !ariaExpanded);
    menu.setAttribute('aria-expanded', !ariaExpanded);
}

menuHamburguer
    .addEventListener('click', abrirMenu);