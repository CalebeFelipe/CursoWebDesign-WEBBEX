let numeroDigitado = parseFloat(prompt('Digite um número para tabuada:'))

for(let i = 0; i <= 50; i++){
    document.write(`${numeroDigitado} x ${i} = ${numeroDigitado * i} <br>`)

    if(i % 10 === 0 && i != 0 && i != 50) {
        document.write('<hr>')
    }
}