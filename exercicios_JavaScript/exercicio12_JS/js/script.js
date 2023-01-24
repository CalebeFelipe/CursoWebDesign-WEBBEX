(function(){
    function calcularMedia(...notas){
        let quantidadeDeNotas = notas.length
        let somaDasNotas = notas.reduce((acc, currentValue) => acc += currentValue, 0)
        let total = somaDasNotas / quantidadeDeNotas
        return total
    }

    var media1 = calcularMedia(2, 3)
    var media2 = calcularMedia(2, 0, 10, 10)

    console.log(`media1: ${media1}`)
    console.log(`media2: ${media2}`)
})()