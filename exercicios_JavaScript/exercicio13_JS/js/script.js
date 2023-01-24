(function(){
    'use strict'

    function calcularIMC(peso, altura) {
        let indiceIMC = (peso / altura ** 2).toFixed(2)

        if(indiceIMC < 18.5) {
            return 'magreza'
        } else if(indiceIMC >= 18.5 && indiceIMC < 25) {
            return 'normal'
        } else if(indiceIMC >= 25 && indiceIMC < 30) {
            return 'sobrepeso'
        } else if(indiceIMC >= 30 && indiceIMC < 40) {
            return 'obesidade'
        } else {
            return 'obesidade grave'
        }
    }

    let indice0 = calcularIMC(56, 1.75)
    let indice1 = calcularIMC(56, 1.68)
    let indice2 = calcularIMC(120, 2.1)
    let indice3 = calcularIMC(120, 1.70)
    let indice4 = calcularIMC(120, 1.85)

    console.log(indice0)
    console.log(indice1)
    console.log(indice2)
    console.log(indice3)
    console.log(indice4)
})()