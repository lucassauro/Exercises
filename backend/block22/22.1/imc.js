const readline = require('readline-sync');

const InitialMessage = 'Iniciando script IMC';
console.log(InitialMessage);
const altura = readline.questionInt('Qual sua altura em centímetros? ');
const peso = readline.questionInt('Qual seu peso em quilos? ');

const imc = peso / ((altura / 100) ** 2);

const situation = () => {
  if (imc < 18.5) 
    return 'abaixo do peso recomendado';
  else if (imc >= 18.5 && imc <= 24.9) 
    return 'no peso recomendado';
  else if (imc >= 25 && imc <= 29.9) 
    return 'acima do peso recomendado (sobrepeso)'
  else if (imc >= 30 && imc <= 34.9)
    return 'obesidade grau I';
  else if (imc >= 35 && imc <= 39.9) 
    return 'obesidade grau II';
  else if (imc >= 40) 
    return 'obesidade graus III e IV';
}

const message = `O seu imc é ${imc.toFixed(2)}. Você está ${situation()}.`;


console.log(message);