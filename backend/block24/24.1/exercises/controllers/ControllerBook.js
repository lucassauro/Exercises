const { Book } = require("../models");

const getAll = async (_req, res) => {
  const getAll = await Book.findAll({
    order: [
      ['title', 'ASC'],
      ['created_at', 'ASC'],
    ],
  });
  res.status(200).json(getAll);
}

const getBookById = async (req, res) => {
  const { id } = req.params;
  const getBookById = await Book.findByPk(id)
  res.status(200).json(getBookById);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const created = await Book.create({ title, author, pageQuantity });
  res.status(201).json(created);
};

const alterBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { id } = req.params;
  const found = await Book.update({
    title,
    author,
    pageQuantity
  },
  {
    where: { id } 
  });
  res.status(201).json(found);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const deleted = await Book.destroy({
    where: { id },
  });
  res.status(200).json(deleted);
}; 

const getBookByAuthor = async (req, res) => {
  const { author } = req.query;
  const result = await Book.findOne({ where: { author } })
  res.status(200).json(result);
}

module.exports = {
  getAll,
  getBookById,
  createBook,
  alterBook,
  deleteBook,
  getBookByAuthor,
}