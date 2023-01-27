export function calcularMedia(notas){
    let quantidadeDeNotas = notas.length
    let somaDasNotas = notas.reduce((acc, currentValue) => acc += currentValue, 0)
    let total = somaDasNotas / quantidadeDeNotas
    return total.toFixed(2)
}

export function recuperarNumerosDeColunas(tds){
    let arr = [];
    for(let i = 0; i < tds.length; i++) {
        if(!isNaN(tds[i].textContent) && tds[i].textContent !== '') {
            arr.push(parseFloat(tds[i].textContent))
        }
    };
    return arr;
}

export const sortear = (n = 0) => {
    let numeroSorteado = Math.random()
    numeroSorteado = Math.floor(numeroSorteado*n)

    return numeroSorteado
}

export function aprovadoOuReprovado(tds) {
    return (tds.some((item) => item == 0)) ? 'reprovado' : 'aprovado';
}
