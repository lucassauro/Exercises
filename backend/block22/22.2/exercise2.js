const { promise1 } = require('./exercise1')

function generateNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

async function calcula() {
  const randomNumbers = Array.from({length: 3}).map(generateNumber);
  console.log(...randomNumbers);
  try {
    const result = await promise1(...randomNumbers)
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
}
calcula();