const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = validateJWT = (req, res) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ error: { message: 'Token não encontrado' } })

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    res.status(200).json({ username: decoded.username, admin: decoded.admin });

  } catch(err) {
    res.status(401).json({ error: { message: err.message } })
  }

}