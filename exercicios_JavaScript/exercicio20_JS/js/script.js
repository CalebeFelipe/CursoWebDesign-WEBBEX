class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    mostrarNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}

let pessoa1 = new Pessoa('Calebe Felipe', 'Alves Freitas')
let pessoa2 = new Pessoa('Agelma', 'Alves da Silva')
let pessoa3 = new Pessoa('Mylena', 'Alves Freitas')

let pessoas = [pessoa1, pessoa2, pessoa3] 

for(let i = 0; i < pessoas.length; i++){
    console.log(pessoas[i].mostrarNomeCompleto())
}
