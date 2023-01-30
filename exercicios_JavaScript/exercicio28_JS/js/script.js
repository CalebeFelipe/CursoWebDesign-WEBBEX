let bodyTag = document.querySelector('body');

window.addEventListener('scroll', function(){
    scrollY > 150 ? bodyTag.setAttribute('class', 'fx') : bodyTag.setAttribute('class', '');
})