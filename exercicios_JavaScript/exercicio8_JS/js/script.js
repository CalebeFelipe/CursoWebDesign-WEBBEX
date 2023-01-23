let saidaHtml = document.getElementById('output') 
let n1 = parseFloat(prompt('Escreva um numero:'))

const escreve = () => {
    saidaHtml.innerHTML = n1
}

escreve()

const calculadora = (simbolo) => {
    if(simbolo === '+') {
        let n = parseFloat(prompt('Escreva outro numero:'))
        n1 += n
        escreve()
    }

    if(simbolo === '-') {
        let n = parseFloat(prompt('Escreva outro numero:'))
        n1 -= n
        escreve()
    }

    if(simbolo === '/') {
        let n = parseFloat(prompt('Escreva outro numero:'))
        n1 /= n
        escreve()
    }

    if(simbolo === '*') {
        let n = parseFloat(prompt('Escreva outro numero:'))
        n1 *= n
        escreve()
    }
}