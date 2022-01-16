const { promise1 } = require('./exercise1')

function generateNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function calcula() {
  const randomNumbers = Array.from({length: 3}).map(generateNumber);
  return promise1(...randomNumbers)
}
calcula()
  .then(data => console.log(data))
  .catch(err => console.log(err));
  