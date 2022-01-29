const { getByAuthorId } = require('../models/BookModels');
const { getUsers } = require('../models/UserModels');

const validateInfo = async (req, res, next) => {
  const { title, author_id } = req.body;
  const author = await getByAuthorId(author_id);
  if (!title || !author_id || title.length < 3) return res.status(400).json({ message: "Dados inválidos" })
  if (author.length < 1) return res.status(400).json({ message: "Dados inválidos" });
  next();
}

const validateUser = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!password || password.length < 6) return res.status(400).json({error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' })
  if (!firstName || firstName.length < 3) return res.status(400).json({error: true, message: 'O campo "firstName" deve ter pelo menos 3 caracteres'})
  if (!lastName || lastName.length < 3) return res.status(400).json({ error: true, message: 'O campo "lastName" deve ter pelo menos 3 caracteres'})
  if (!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) return res.status(400).json({error: true, message: 'O campo "email" deve ser um email válido'})
  next();
}

const validateUserId = async (req, res, next) => {
  const { id } = req.params;
  const userId = await getUsers(id)
  if (!userId || userId.length < 1) return res.status(404).json({ error: true, message: "Usuário não encontrado" })
  next();
}

module.exports = {
  validateInfo,
  validateUser,
  validateUserId
}