const express = require('express');
const BookModels = require('./models/BookModels');
const { validateInfo } = require('./middlewares/middlewares');

require('dotenv').config()

const app = express();
app.use(express.json());

app.get('/book', async (req, res) => {
  const { author_id } = req.query;
  const book = await BookModels.getByAuthorId(author_id)
  if (!book) return res.status(404).json({ message: "Not found"});
  res.status(200).json(book);
})

app.get('/books', async (req, res) => {
  const books = await BookModels.getAll();
  if (!books) return res.status(404)
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await BookModels.getBookById(id);
  if (!books || books.length < 1) return res.status(404).json({ message: "Not found"});
  res.status(200).json(books);
})

app.post('/books', validateInfo, async (req, res) => {
  const { title, author_id} = req.body;
  const create = await BookModels.createBook(title, author_id);
  res.status(201).json({ message: `Livro criado com sucesso! Id número ${create}` })
})

app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  await BookModels.deleteById(id);
  res.status(204).json({ message: `Arquivo ${id} deletado com sucesso.` })
} )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));