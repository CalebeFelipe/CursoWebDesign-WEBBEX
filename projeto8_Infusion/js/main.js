(function(){
    let body = document.querySelector('body');
    body.classList.remove('no-js');
    body.classList.add('js');

    let menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnabled: 1024
    })
})()