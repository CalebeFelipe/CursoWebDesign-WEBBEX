let jogador1 = parseFloat(prompt('Jogador 1 digite um número:'))
let jogador2 = parseFloat(prompt('Jogador 2 digite um número:'))
let maiorNumero = (jogador1 > jogador2) ? 'O vencedor é o jogador 1' : 'O vencedor é o jogador 2'
let menorNumero = (jogador1 < jogador2) ? 'O vencedor é o jogador 1' : 'O vencedor é o jogador 2'

if(jogador1 == jogador2) {
    alert('Os valores digitados são iguais: EMPATE')
} else {
    let numeroDeZeroAUm = Math.round(Math.random())
    console.log(numeroDeZeroAUm)
    if(numeroDeZeroAUm === 0) {
        alert(menorNumero)
    } else {
        alert(maiorNumero)
    }
}