import {recuperarNumerosDeColunas, calcularMedia} from './beluga.js'

let trs = document.querySelectorAll('.js-tabela tbody .aluno');

for(let i = 0; i < trs.length; i++) {
let linhaAluno = trs[i];
let tds = linhaAluno.querySelectorAll('td');

let notas = recuperarNumerosDeColunas(tds);

let media = calcularMedia(notas)

linhaAluno.querySelector('.aluno-m').textContent = media;

};