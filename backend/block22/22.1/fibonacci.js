const readline = require('readline-sync');

const InitialMessage = 'Iniciando script Fibonacci';
console.log(InitialMessage);

const fibonacci = (number) => {
  let c = [1];
  for (let i = 1; i<number; i++){
    c.push(
      c[c.length -1] + c[c.length -2] 
      || c[c.length -1] + 0
      ); 
    }
  let resultado = c.toString();
  console.log(`${resultado}.`);
}

const n = readline.questionInt('Exibir quantos números da sequência fibonacci a partir do 1? ');

if (n > 0) {
  fibonacci(n);
} else {
  console.log(`O número deve ser integral positivo.`);
}
