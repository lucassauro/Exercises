const fs = require('fs/promises');

async function readFiles() {
  return await fs.readFile('./teams.json', 'utf-8')
  .then((content => JSON.parse(content)))
  .catch(err => console.log(err));
}

async function writeFiles(data) {
  return await fs.writeFile('./teams.json', data)
  .then((data => console.log(data)))
}

module.exports = {
  readFiles,
  writeFiles,
}