let ul = document.querySelector('ul');
let itensLista = ul.querySelectorAll('li');
let btnRemover = document.querySelectorAll('.apagar')
let inputTextTarefa = document.querySelector('#txtTarefa');
let btnCadastrar = document.querySelector('#btnCadastrarTarefa');

function inserirNovaTarefa(){
    let li = document.createElement('li');
    let link = document.createElement('a');
    let btnApagar = document.createElement('button');
    let icon = document.createElement('i');
    let text = document.createTextNode(inputTextTarefa.value);

    btnApagar.classList.add('apagar')
    icon.classList.add('fa-solid')
    icon.classList.add('fa-trash')
    link.href = '#';

    btnApagar.appendChild(icon);
    link.appendChild(text);
    li.appendChild(link);
    li.appendChild(btnApagar);
    ul.appendChild(li);
    
    inputTextTarefa.value = '';
    inputTextTarefa.focus();
}

function toggleDone(li) {
    li.classList.toggle('done');
}

ul.addEventListener('click', function(e){
    if(e.target.nodeName === 'A'){
        toggleDone(e.target);
    }
})

for(let i = 0; i < btnRemover.length; i++){
    console.log(btnRemover[i].parentNode)
}



btnCadastrar
    .addEventListener('click', inserirNovaTarefa);
inputTextTarefa
    .addEventListener('keyup', function(e) {
        if(e.key === 'Enter'){
            inserirNovaTarefa();
        }
    })

