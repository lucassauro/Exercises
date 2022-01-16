const fs = require('fs/promises');

const arquivo = './simpsons.json';

const getAllChars = () => {
  fs.readFile(arquivo, 'utf-8')
  .then((content) => JSON.parse(content))
  .then((data) => {data.map((elem) => console.log(`${elem.id} - ${elem.name}`))})
  .catch((err) => console.log(err))
};
// getAllChars();

const characterId = id => {
  const promise = new Promise((resolve, reject) => {
    if (typeof id !== 'number') reject(new Error('Id deve ser um número!'))
    const result = fs.readFile(arquivo, 'utf-8')
      .then((content) => JSON.parse(content))
      .then((content) => content.filter((elem) => elem.id == id))
      .then((content) => {
        if(content[0]) return console.log(`${content[0].id}, ${content[0].name}`)
        throw new Error('Id não encontrado!')
      })

      .catch((err) => console.log(err.message));
    resolve(result);
  })
  return promise;
}
// characterId(8);

const removeId = (id) => {
  const result = fs.readFile(arquivo, 'utf-8');
  result
    .then((content) => JSON.parse(content))
    .then((content) => content.filter((elem) => elem.id != id))
    .then((content) => JSON.stringify(content))
    .then((content) => fs.writeFile(arquivo, content))
    .catch((err) => console.log(err));
  return result;
}
// removeId(6);

const createSimpsonsFamily = (nomeNovoArquivo, idRangeMin, idRangeMax) => {
  fs.readFile(arquivo, 'utf-8')
    .then((content) => JSON.parse(content))
    .then((content) => content.filter((elem) => elem.id >= idRangeMin && elem.id <= idRangeMax))
    .then((content) => JSON.stringify(content))
    .then((content) => fs.writeFile(nomeNovoArquivo, content));
}
// createSimpsonsFamily('./simpsonsFamily.json', 1, 4);

const appendCharacter = (file, name) => {
  const character = [];
  fs.readFile(arquivo, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter((elem) => elem.name.includes(name)))
    .then((data) => character.push(data[0]))

  fs.readFile(file, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => {
      data.push(character[0])
      return data;
    })
    .then(data => JSON.stringify(data))
    .then(data => fs.writeFile(file, data))
}
// appendCharacter('./simpsonsFamily.json', 'Nelson');

const replaceCharacter = (fileToReplaceName, nameIn, nameOut) => {
  const character = [];
  fs.readFile(arquivo, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter((elem) => elem.name.includes(nameIn)))
    .then((data) => character.push(data[0]))

  fs.readFile(fileToReplaceName, 'utf-8')
    .then((data) => JSON.parse(data))
    .then((data) => data.filter((elem) => !elem.name.includes(nameOut)))
    .then(data => {
      data.push(character[0])
      return data;
    })
    .then(data => JSON.stringify(data))
    .then(data => fs.writeFile(fileToReplaceName, data))
};
// replaceCharacter('./simpsonsFamily.json', 'Maggie', 'Nelson');

