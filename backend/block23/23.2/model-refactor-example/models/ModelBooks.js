const connection = require('./connection');

const getBookByAuthorId = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [id]);
  return book;
}

const getAllBooks = async () => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
}

const getBookById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
  return book;
}

const createBook = async (title, author_id) => {
  const [created] = await connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, author_id])
  return created;
}

const deleteBookById = async (id) => {
  const [deleted] = await connection.execute('DELETE FROM books WHERE id = ?', [id])
  return deleted;
}


module.exports = {
  getAllBooks,
  getBookByAuthorId,
  getBookById,
  createBook,
  deleteBookById,
}