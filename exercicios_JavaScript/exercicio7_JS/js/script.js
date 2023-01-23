let saidaHtml = document.getElementById('output') 
let criarTabuada = document.getElementById('gerarTabuada')
let limparTabuada = document.getElementById('limparTabuada')

const limpar = () => {
    saidaHtml.innerHTML = ''
}

const geradorDeTabuada = () => {
    let numero = parseFloat(prompt('Digite um número:'))

    limpar()

    let mensagem = ''

    for(i = 0; i <= 10; i++) {
        mensagem += `${numero} x ${i} = ${numero * i} <br>`
    }

    saidaHtml.innerHTML = mensagem
}

//Eventos
criarTabuada
    .addEventListener('click', geradorDeTabuada)

limparTabuada
    .addEventListener('click', limpar)