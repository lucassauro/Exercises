// the authentication logic implemented in this file SHOULD NOT be used in any circumstances. For learning purposes ONLY.
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs/promises');
const crypto = require('crypto');

const app = express();
app.use(bodyParser.json());

// bônus 2
function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}



// 1
app.get('/ping', (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  res.status(200).json({ message: 'pong' })
})

// 2
app.post('/hello', (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!`})
})

// 3
app.post('/greetings', (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const { name, age } = req.body;
  return age <= 17 
  ? res.status(401).json({ message: 'Unauthorized'})
  : res.status(200).json({ message: `Hello, ${name}!`});
})

// 4
app.put('/users/:name/:age', (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const { name, age } = req.params;
  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade!` })
})


// 5, 6

function getSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .catch((error) => JSON.parse(error));
}


// with async await and external function
app.get('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const simpsons = await getSimpsons();
  res.status(200).json(simpsons);
})

// without async and await
// app.get('/simpsons', (_req, res) => {
//   const read = fs.readFile('./simpsons.json', 'utf-8');
//   read
//     .then((content) => res.status(200).json(JSON.parse(content)))
//     .catch((error) => res.status(500).json(error));
// })

// 7 
app.get('/simpsons/:id', async (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const simpsons = await getSimpsons();
  const { id } = req.params;
  const filteredSimpsons = simpsons.filter((character) => character.id === id);
  if (filteredSimpsons.length === 0) return res.status(404).json({ message: 'Simpson not found!'})
  res.status(200).json(filteredSimpsons);
})


// 8

function addSimpsons(data) {
  return fs.writeFile('./simpsons.json', data)
    .then((content) => console.log(content))
    .catch(error => console.log(error))
}

app.post('/simpsons', async (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const simpsons = await getSimpsons();
  const { id, name } = req.body;
  const findIndex = simpsons.findIndex((character) => character.id === id)
  
  if(findIndex !== -1) return res.status(409).json({ message: 'id already exists!' });
  
  simpsons.push({ id, name });
  addSimpsons(JSON.stringify(simpsons));
  // res.status(200).json(simpsons);
  res.status(204).end();
})

// I decided to create an endpoint that delete characters from simpsons.json;
app.delete('/simpsons/:id', async (req, res) => {
  const token = req.headers.authorization;
  if(!token || token.length !== 16) return res.status(401).json({ message: 'Token Inválido' })
  const simpsons = await getSimpsons();
  const { id } = req.params;
  const findIndex = simpsons.findIndex((character) => character.id === id)

  if(findIndex === -1) return res.status(409).json({ message: 'id do not exists!' });
  simpsons.splice(findIndex, 1);
  addSimpsons(JSON.stringify(simpsons))
  // res.status(200).json({ message: `char de id ${id} excluído` })
  res.status(204).end();
})


app.post('/signup', async (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: 'Missing fields' });
  const token = generateToken();
  res.status(200).json({ token })
})

app.listen(3000, () => {
  console.log('chora...')
})