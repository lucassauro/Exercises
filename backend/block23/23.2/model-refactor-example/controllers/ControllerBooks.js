const ServiceBooks = require('../services/ServiceBooks');

// Middlewares Books
const getBookByAuthorId = async (req, res) => {
  const { author_id } = req.query;
  const book = await ServiceBooks.getBookByAuthorId(author_id)
  if (!book) return res.status(404).json({ message: "Not found"});
  res.status(200).json(book);
};

const getAllBooks = async (_req, res) => {
  const books = await ServiceBooks.getAllBooks();
  if (!books) return res.status(404)
  res.status(200).json(books);
}

const getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await ServiceBooks.getBookById(id);
  if (!book || book.length < 1) return res.status(404).json({ message: "Not found"});
  res.status(200).json(book);
}

const createBook = async (req, res) => {
  const { title, author_id} = req.body;
  const created = await ServiceBooks.createBook(title, author_id);
  res.status(201).json({ message: `Livro criado com sucesso! Id número ${created.insertId}` })
}

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  await ServiceBooks.deleteBookById(id);
  res.status(204).json({ message: `Arquivo ${id} deletado com sucesso.` })
} 


module.exports = {
  getBookByAuthorId,
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
}
