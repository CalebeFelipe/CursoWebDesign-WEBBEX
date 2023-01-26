import { sortear } from './beluga.js'

(function(){
    window.addEventListener('load', init)

    function init(){
        let n = sortear(3) + 1;
        console.log(sortear(4))
        document.querySelector('body').style.background = `url(images/modelo${n}.jpg`;
    }
})()