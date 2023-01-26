(function(){
    window.addEventListener('load', init);

    function init() {
        let paragrafos = document.querySelectorAll('.paragrafo');
        
        for(let i = 0; i < paragrafos.length; i++){
            paragrafos[i].innerHTML = formatarTexto(paragrafos[i]);
        }
    }

    function formatarTexto(paragrafo){
        let conteudoDoParagrafo = paragrafo.innerHTML;

        if(conteudoDoParagrafo <= 200){
            return conteudoDoParagrafo;
        }

        let subTexto = `${conteudoDoParagrafo.slice(0, 200)}...`;
        return subTexto;
    }
})()