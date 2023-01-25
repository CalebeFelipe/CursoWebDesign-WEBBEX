(function(){                    
                    
    let trs = document.querySelectorAll('.js-tabela tbody .aluno');
    
    for(let i = 0; i < trs.length; i++) {
        let linhaAluno = trs[i];
        let tds = linhaAluno.querySelectorAll('td');

        let notas = recuperarNumerosDeColunas(tds);

        let media = calcularMedia(notas)

        linhaAluno.querySelector('.aluno-m').textContent = media;

    };
    
    function calcularMedia(notas){
        let quantidadeDeNotas = notas.length
        let somaDasNotas = notas.reduce((acc, currentValue) => acc += currentValue, 0)
        let total = somaDasNotas / quantidadeDeNotas
        console.log(total)
        return total.toFixed(2)
    }

    function recuperarNumerosDeColunas(tds){
        let arr = [];
        for(let i = 0; i < tds.length; i++) {
            if(!isNaN(tds[i].textContent) && tds[i].textContent !== '') {
                arr.push(parseFloat(tds[i].textContent))
            }
        };
        return arr;
    }
})()