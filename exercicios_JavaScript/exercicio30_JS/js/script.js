(function(){
    window.addEventListener('scroll', destacaMenu)
    let $menu = document.querySelector('.nav')
    let $links = $menu.querySelectorAll('li a')


    function destacaMenu(){
        let positions = []
        for(let i = 0; i < $links.length; i++){
            positions[i] = pegaYPosicaoScroll($links[i])
        }

        let linkAtual = pegaUltimoLinkVisivel(positions)
        let linkActived = $menu.querySelector('.actived')
        if(linkActived) linkActived.classList.remove('actived')

        linkAtual.classList.add('actived')
    }

    function pegaYPosicaoScroll(link){
        let alvo = document.querySelector(link.getAttribute('href'))
        let positionYViewport = alvo.getBoundingClientRect().top

        return positionYViewport
    }

    function pegaUltimoLinkVisivel(positions){
        let qtd = positions.length
        while(qtd){
            qtd--
            if(positions[qtd] < innerHeight / 2){
                return $links[qtd]
            }
        }
        return $links[0]
    }

    destacaMenu()
})()