let form = document.querySelector('form');
let inputUsuario = document.querySelector('#usuario');
let inputSenha = document.querySelector('#senha');
let btnEntrar = document.querySelector('#btnEntrar');

function validarCampo(e) {
    if(inputUsuario.value === '' || inputSenha.value === ''){
        alert('Preencha o campo para continuar');
        e.preventDefault();
    }
}

form
    .addEventListener('submit', validarCampo);