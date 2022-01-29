const connection = require('./connection');

const getAll = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books');
  return books;
}

const getByAuthorId = async (id) => {
  const [books] = await connection.execute('SELECT * FROM books WHERE author_id = ?', [id]);
  return books;
}

const getBookById = async (id) => {
  const [book] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
  return book;
}

const createBook = async (title, author_id) => {
  const [create] = await connection.execute('INSERT INTO books (title, author_id) VALUES (?, ?)', [title, author_id])
  console.log('insertId', create.insertId);
  return create.insertId;
}

const deleteById = async (id) => {
  const deleted = await connection.execute('DELETE FROM books WHERE id = ?', [id])
  console.log(deleted);
  return deleted;
}


module.exports = {
  getAll,
  getByAuthorId,
  getBookById,
  createBook,
  deleteById,
}