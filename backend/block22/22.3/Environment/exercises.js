const fs = require('fs');

function discoverNumber(param) {
  if (param > 0) {
    return 'positivo';
  } else if (param === 0) {
    return 'neutro';
  } else if (param < 0) {
    return 'negativo';
  } else if (typeof param !== 'number') {
    return 'o valor informado deve ser um numero';
  }
}

function writeOnFile(file, content) {
  if (!file || !content) return null;
  fs.writeFile(`./${file}`, content);
  return 'ok';
}

// const escrevaArquivo = (file, content) => {
//   fs.writeFileSync(`${__dirname}/${file}`, content);
//   return 'ok';
// };


module.exports = {
  discoverNumber,
  writeOnFile,
  // escrevaArquivo,
}