const fs = require('fs/promises');
const rl = require('readline-sync');

const answer = rl.question('Que arquivo deseja abrir? ');

fs.readFile(`./${answer}`, 'utf-8')
.then(data => console.log(data))
.catch((err) => {
  if (err.code === 'ENOENT') return console.log('Arquivo Inexistente')
  console.log(err.message);
})
