(function(){
    'use strict'

    let nome = 'Calebe Felipe Alves Freitas';
    let nomeFormatado = formatarNome(nome);

    function formatarNome(nome){
        let posicaoUltimoEspaco = nome.lastIndexOf(' ');
        
        if(posicaoUltimoEspaco <= 0){
            return nome;
        }

        let ultimoNome = nome.slice(posicaoUltimoEspaco + 1)

        let primeiroNome = nome.slice(0, posicaoUltimoEspaco);

        return `${ultimoNome}, ${primeiroNome}`
    }

    console.log(nomeFormatado)
})()