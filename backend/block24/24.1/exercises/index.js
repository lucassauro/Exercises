const express = require('express');
const ControllerBook = require('./controllers/ControllerBook');
const app = express();

app.use(express.json());

app.get('/books', ControllerBook.getAll);
app.get('/book/author', ControllerBook.getBookByAuthor);
app.get('/book/:id', ControllerBook.getBookById);
app.post('/book', ControllerBook.createBook);
app.post('/book/:id', ControllerBook.alterBook);
app.delete('/book/:id', ControllerBook.deleteBook);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(PORT))

module.exports = app;