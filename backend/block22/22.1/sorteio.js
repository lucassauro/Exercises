const readline = require('readline-sync');
const InitialMessage = 'Iniciando script Sorteio';
console.log(InitialMessage);
const game = () => {
  function adivinhe() {
    const randomNumber = Math.floor(Math.random() * (11 - 0) + 0);
    const palpite = readline.questionInt('Adivinhe um número de 1 a 10. ');
    if (randomNumber === palpite) {
      return console.log(`Parabéns, o número era mesmo ${randomNumber}. Você acertou!`)
    } else {
      return console.log(`Sinto muito, o número aleatório era ${randomNumber}.`)
    }
  }
  adivinhe();
  for (i = 1; i<=1000; i++) {
    const playAgain = readline.keyInYN(`Você jogou ${i} vez(es). Gostaria de jogar novamente? `);
    if (playAgain) {
      adivinhe();
    } else {
      console.log('Au revoir!')
      process.exit();
    }
  }
}
game();
