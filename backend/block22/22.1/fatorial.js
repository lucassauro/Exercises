const readline = require('readline-sync');

const InitialMessage = 'Iniciando script Fatorial';
console.log(InitialMessage);

const fatorial = (number) => {
  let resultado = 1;
  for (let i = number; i >= 1; i--) {
    console.log(`calculando... ${resultado} * ${i} = ${resultado}...`)
    resultado *= i;
  }
  console.log(`O resultado do fatorial de ${number} é: ${resultado}.`);
  return resultado;
}

const n = readline.questionInt('Calcular o fatorial de qual número? ');

if (n > 0) {
  fatorial(n);
} else {
  console.log(`O número deve ser integral positivo.`);
}
