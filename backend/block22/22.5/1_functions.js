const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(6).toString('hex');
}

function validateRegister(req, res) {
  const { username, email, password } = req.body;

  if (username.match(/(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm) // 3 to 24 characters
    && email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi) // string@string.string
    && password.match(/^\d{4,8}$/i) // 4 to 8 numbers
  ) return res.status(201).json({ message: 'User created!' });

  return res.status(400).json({ message: 'Invalid data!' })
}

function validateLogin(req, res) {
  const { email, password } = req.body;
  const token = generateToken();

  if (email.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi) 
  && password.match(/^\d{4,8}$/i)) return res.status(200).json({ token })
  
  res.status(400).json({ message: 'Email or password incorrect!' })
}

module.exports = {
  validateLogin,
  validateRegister
}