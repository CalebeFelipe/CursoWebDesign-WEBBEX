'use strict';

let $btn = document.querySelector('#btn');
let $chk = document.querySelector('#checkbox');
toggleBtn();

function habilitarBotaoAceitar(){
    toggleBtn();
}

function toggleBtn() {
    $btn.disabled = !$chk.checked;
}

$chk.addEventListener('change', habilitarBotaoAceitar)

