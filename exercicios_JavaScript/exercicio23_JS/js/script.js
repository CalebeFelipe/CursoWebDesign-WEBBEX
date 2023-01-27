let $txtMsg = document.querySelector('#msg');
let $restaContainer = document.querySelector('#restaContainer')
let $resta = document.querySelector('#resta');
let maxima = $txtMsg.maxLength;

$resta.textContent = maxima;
function mostrarContainerResta(){
    $restaContainer.style.display = 'block';
}

mostrarContainerResta()

function checkLength() {
    'use strict'
    let numeroLetrasDigitadas = this.value.length;
    let caracteresRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarCaracteresFaltantes(caracteresRestantes);
}

function mostrarCaracteresFaltantes(n) {
    $resta.textContent = n;
}

$txtMsg.addEventListener('input', checkLength);