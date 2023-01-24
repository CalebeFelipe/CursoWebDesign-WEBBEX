'use strict'

const output = document.querySelector('#output');
let dados = [
    {'nome': 'Calebe', 'email': 'ca@server.com'},
    {'nome': 'Mylena', 'email': 'my@server.com'},
    {'nome': 'Agelma', 'email': 'ag@server.com'},
];
let msg = '';


let dado = dados.map(dado => {
    msg += `<p>nome: ${dado.nome}</p>`;
    msg += `<p>email: ${dado.email}</p><br>`;
});

output.innerHTML = msg;