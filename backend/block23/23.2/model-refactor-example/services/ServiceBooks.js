const ModelBooks = require('../models/ModelBooks');

const getBookByAuthorId = async (author_id) => ModelBooks.getBookByAuthorId(author_id);

const getAllBooks = async () => ModelBooks.getAllBooks();

const getBookById = async (id) => ModelBooks.getBookById(id);

const createBook = async (title, author_id) => ModelBooks.createBook(title, author_id);

const deleteBookById = async (id) => ModelBooks.deleteBookById(id);

module.exports = {
  getBookByAuthorId,
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById

}
