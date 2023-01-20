function calcular(tipo, valor) {
    
    if (tipo === 'acao') {

        if(valor === 'c') {
            document.getElementById('visor').value = ''
        }

        //Isolado porque fica mais fácil de dar manutenção
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.' ) {
            document.getElementById('visor').value += valor //Vai concatenar
        }

        if(valor === '=') {
            /*Fornece o resultado em forma de string, então a função nativa EVAL vai interpretar a operação
            em forma de conta e já trazer o resultado
            */
            let valorCampo = eval(document.getElementById('visor').value)
            
            document.getElementById('visor').value = valorCampo
        }

    } else if (tipo === 'valor') {

        document.getElementById('visor').value += valor //Vai concatenar
    }

}

//Adicionando números e operações por teclado
document.querySelector('body').addEventListener('keyup', function(event) {
    var tecla = event.key

    //Números
    if (tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' ||
    tecla == '7' || tecla == '8' || tecla == '9' || tecla == '0') {
        document.getElementById('visor').value += tecla
    }

    //Operações 
    if (event.shiftKey && tecla == '+' || tecla == '-' || event.shiftKey && tecla == '*') {
        document.getElementById('visor').value += tecla
    }

    //Gambiarra no meu teclado para DIVISÃO
    if (tecla == 'q') {
        document.getElementById('visor').value += '/'
    }

    //Apagar
    if (tecla == 'Backspace') {
        document.getElementById('visor').value = '' 
    }

    //Mostrar o resultado
    if(tecla == 'Enter') {
        let valorCampo = eval(document.getElementById('visor').value)
            
        document.getElementById('visor').value = valorCampo
    }


})