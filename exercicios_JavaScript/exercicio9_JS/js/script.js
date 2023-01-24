let dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];
let hoje = new Date();
let diaSemana = hoje.getDay()

alert(`Bem vindo, hoje é ${dias[diaSemana]}`)