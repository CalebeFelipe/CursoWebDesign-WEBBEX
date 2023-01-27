import {recuperarNumerosDeColunas, calcularMedia, aprovadoOuReprovado} from './beluga.js'

let trs = document.querySelectorAll('.js-tabela tbody .aluno');

for(let i = 0; i < trs.length; i++) {
    let linhaAluno = trs[i];
    let tds = linhaAluno.querySelectorAll('td');

    let notas = recuperarNumerosDeColunas(tds);
    console.log(notas)
    let media = calcularMedia(notas)
    let resultadoFinal = aprovadoOuReprovado(notas)

    linhaAluno.querySelector('.aluno-m').textContent = media;
    linhaAluno.querySelector('.aluno-aprov').textContent = resultadoFinal

};