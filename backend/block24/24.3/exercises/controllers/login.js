const jwt = require('jsonwebtoken');
const dataIsValid = require('../services/isValid');
const ModelUser = require('../models/ModelUser');

module.exports = validateLogin = async (req, res) => {
  const { username, password } = req.body;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256'
  };

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  if (!dataIsValid(username) && !dataIsValid(password)) return res.status(401).json({ message: 'username ou password não válido'});

  const file = await ModelUser.readFiles();
  const filtered = await file.filter((elem) => elem.username === username);

  if (filtered.length >= 1) {
    const token = jwt.sign({ username: filtered.username, admin: filtered.admin }, process.env.SECRET, jwtConfig)
    return res.status(200).json({ token })
  }

  return res.status(400).json({ message: 'Ocorreu algum erro'})
}