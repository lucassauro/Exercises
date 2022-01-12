const readline = require('readline-sync');

const options = ['imc', 'velocidade', 'sorteio', 'fatorial', 'fibonacci'];

const escolha = readline.keyInSelect(options, 'Qual script deve ser executado? ');

console.log(`Escolhido ${options[escolha]}.`)

require(`./${options[escolha]}`)