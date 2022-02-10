const express = require('express');
const app = express();
const validateLogin = require('./controllers/login');
const validateJWT = require('./auth/validateJWT');
const isAdmin = require('./auth/isAdmin');
const jwt = require('jsonwebtoken');

const dataIsValid = require('./services/isValid');

const ModelUser = require('./models/ModelUser');



app.use(express.json());

app.post('/login', validateLogin);

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256'
  };

  const adminValue = Math.floor(Math.random() * 100)
  const admin = adminValue <= 50 ? false : true;
  const file = await ModelUser.readFiles();
  const filtered = await file.filter((elem) => elem.username === username);
  if (filtered) { 
    return res.status(409).json({ message:  'user already exists'});
  } 
  if (dataIsValid(username) && dataIsValid(password) && file) {
    await file.push({ username, admin, password });
    await ModelUser.writeFiles(file)
  }
  const token = jwt.sign({ username, admin }, process.env.SECRET, jwtConfig)
  return res.status(200).json({ token })
})

app.get('/users/me', validateJWT);

app.get('/top-secret', isAdmin);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {console.log(PORT)})