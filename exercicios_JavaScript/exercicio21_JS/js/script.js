let paragrafos = document.querySelectorAll('.paragrafo');
let texto, arrayDasPalavras;

for(let i = 0; i < paragrafos.length; i++){
    paragrafos[i].innerHTML = formataParagrafo(paragrafos[i].innerHTML)
    
    
}

function formataParagrafo(textoParagrafo) {
    arrayDasPalavras = textoParagrafo.split(' ')

    return (arrayDasPalavras.length > 10) ? `${arrayDasPalavras.slice(0, 9).join(' ')}...` : textoParagrafo;
}