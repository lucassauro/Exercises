const readline = require('readline-sync');
const InitialMessage = 'Iniciando script Velocidade';
console.log(InitialMessage);

const distance = readline.questionInt('Qual a distância em metros? ');
const time = readline.questionInt('Qual o tempo em segundos? ');

const averageSpeed = distance / time;

console.log(`A velocidade é: ${averageSpeed}`);