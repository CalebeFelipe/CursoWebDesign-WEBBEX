(function(){
    let inputNome = document.querySelector('#campoNome')
    let button = document.querySelector('.btn')
    
    function darBoasVindas() {
        document.querySelector('#output').innerHTML = `<br>Bem-vindo, <strong>${inputNome.value}</strong>!`
    }

    //Eventos
    button
        .addEventListener('click', darBoasVindas)
})()