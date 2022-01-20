const { getByAuthorId } = require('../models/BookModels');


const validateInfo = async (req, res, next) => {
  const { title, author_id } = req.body;
  const test = await getByAuthorId(author_id);
  if (!title || !author_id || title.length < 3) return res.status(400).json({ message: "Dados inválidos" })
  if (test.length < 1) return res.status(400).json({ message: "Dados inválidos" });

  next();
}

module.exports = {
  validateInfo,
}