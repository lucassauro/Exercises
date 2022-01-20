const BookModels = require('../models/BookModels');
const UserModels = require('../models/UserModels');

// Middlewares Books
const getBookByAuthorId = async (req, res) => {
  const { author_id } = req.query;
  const book = await BookModels.getByAuthorId(author_id)
  if (!book) return res.status(404).json({ message: "Not found"});
  res.status(200).json(book);
};

const getAllBooks = async (_req, res) => {
  const books = await BookModels.getAll();
  if (!books) return res.status(404)
  res.status(200).json(books);
}

const getBookById = async (req, res) => {
  const { id } = req.params;
  const books = await BookModels.getBookById(id);
  if (!books || books.length < 1) return res.status(404).json({ message: "Not found"});
  res.status(200).json(books);
}

const createBook = async (req, res) => {
  const { title, author_id} = req.body;
  const create = await BookModels.createBook(title, author_id);
  res.status(201).json({ message: `Livro criado com sucesso! Id número ${create}` })
}

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  await BookModels.deleteById(id);
  res.status(204).json({ message: `Arquivo ${id} deletado com sucesso.` })
} 

const getAllUsers = async (_req, res) => {
  const getAll = await UserModels.getUsers();
  res.status(200).json(getAll);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getAll = await UserModels.getUsers(id);
  if (!getAll || getAll.length < 1) return res.status(404).json({ error: true, message: "Usuário não encontrado." })
  res.status(200).json(getAll);
}

const createUser = async (req, res) => {
  const user = req.body;
  const create = await UserModels.create(user);
  res.status(201).json(create);
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = await UserModels.update(id, body);
  res.status(200).json(update);
}

module.exports = {
  getBookByAuthorId,
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById,
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
}
