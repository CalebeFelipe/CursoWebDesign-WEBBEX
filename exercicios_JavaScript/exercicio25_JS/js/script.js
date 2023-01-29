let ul = document.querySelector('ul');
let itensLista = ul.querySelectorAll('li');
let btnRemover = document.querySelectorAll('.apagar');
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

    btnRemover = document.querySelectorAll('.apagar');
    
    percorrerNodeList()

    inputTextTarefa.value = '';
    inputTextTarefa.focus();
}

function percorrerNodeList(){
    for(let i = 0; i < btnRemover.length; i++){
        addEvent(btnRemover[i]);
        console.log(btnRemover[i])
    }
}

percorrerNodeList()

function toggleDone(li) {
    li.classList.toggle('done');
}

function addEvent(item){
    item.addEventListener('click', apagarItem);
}

function apagarItem(){
    if(confirm('Deseja realmente excluir?')){
       this.parentNode.parentNode.removeChild(this.parentNode)
    }
}


//Eventos
ul.addEventListener('click', function(e){
    if(e.target.nodeName === 'A'){
        toggleDone(e.target);
    }
})
btnCadastrar
    .addEventListener('click', inserirNovaTarefa);
inputTextTarefa
    .addEventListener('keyup', function(e) {
        if(e.key === 'Enter'){
            inserirNovaTarefa();
        }
    })

