let dataAtual = new Date();
dataAtual.setHours(0);
dataAtual.setMinutes(0);
dataAtual.setSeconds(0);
dataAtual.setMilliseconds(0);
let anoAtual = dataAtual.getFullYear();

let dataAniversario = new Date(anoAtual, 8, 6);
console.log(dataAniversario)

//TS - Times Temp
let dataAtualTS = dataAtual.getTime();
let dataNiverTS = dataAniversario.getTime();

if(dataAtualTS === dataNiverTS){
    alert('Parabéns pelo seu aniversario!')
}

if(dataAtualTS > dataNiverTS){
    dataAniversario.setFullYear(++anoAtual);
    dataNiverTS = dataAniversario.getTime();
}

const umDiaTS = 24 * 60 * 60 * 1000;
let diferenca = dataNiverTS - dataAtualTS;

console.log(`Seu aniversário é 0${dataAniversario.getDate()}/0${dataAniversario.getMonth() + 1}/${dataAniversario.getFullYear()}`);
console.log(`Faltam ${diferenca / umDiaTS} dia(s) para seu aniversário!`);