const fs = require('fs/promises');
const rl = require('readline-sync');

fs.readFile(rl.question('Qual arquivo deseja utilizar? '), 'utf-8')
  .then(data => {
    console.log(data)
    return data;
  })
  .then((data) => {
    return data.replace(
      new RegExp(
        rl.question('Qual palavra deseja substituir? '), 'g'), 
        rl.question('Qual palavra substituirá a anterior? ')
    )
  })
  .then((data) => {
    console.log(data)
    return data;
  })
  .then((data) => {
    fs.writeFile(rl.question('Em qual arquivo deseja salvar? '), data)
  })
  .catch((err) => {
    if(err.code === 'ENOENT') return console.log('Arquivo inexistente');
    return console.log(err);
  })
