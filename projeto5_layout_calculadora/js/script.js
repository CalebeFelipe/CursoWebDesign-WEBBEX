const display = document.getElementById('display')

const calcular = (tipo, valor) => {

    if (tipo === 'acao') {
        if (valor === 'c') {
            display.value = ''
        }

        if (valor === '*' || valor === '+' || valor === '-' || valor === '/' || valor === '.') {
            display.value += valor
        }

        if (valor === '=') {
            const resultado = eval(display.value)

            display.value = resultado
        }
    } else if (tipo === 'valor') {

        display.value += valor

    }

}

document.querySelector('body').addEventListener('keyup', function (event) {
    let tecla = event.key

    if (tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' || tecla == '7' ||
     tecla == '8' || tecla == '9' || tecla == '0') {
        display.value += tecla
    }

    if (event.shiftKey && tecla == '+' || tecla == '-' || event.shiftKey && tecla == '*') {
        display.value += tecla
    }

    if(tecla == 'Backspace') {
        display.value = ''
    }

    if(tecla == 'Enter') {
        const resultado = eval(display.value)

        display.value = resultado
    }

})

