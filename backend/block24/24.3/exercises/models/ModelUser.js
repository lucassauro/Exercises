const fs = require('fs/promises');

const readFiles = async () => {
  const file = await fs.readFile('./models/users.json', 'utf-8')
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err))
    return file;
}

const writeFiles = async (file) => {
  const stringfied = JSON.stringify(file)
  await fs.writeFile('./models/users.json', stringfied)
    .then((_data) => true)
    .catch((err) => err);
}

module.exports = {
  readFiles,
  writeFiles,
}