const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = validateJWT = (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: { message: 'Token não encontrado' } })

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    if (decoded.username === 'admin' && decoded.admin === true) return res.status(200).json({ secretInfo: 'Peter Parker é o homem-Aranha' });

  } catch(err) {
    return res.status(401).json({ error: { message: err.message } })
  }

  res.status(403).json({ message: 'Restricted access' })

}