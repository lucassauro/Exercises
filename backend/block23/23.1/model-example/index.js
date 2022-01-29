const express = require('express');
const { validateInfo, validateUser, validateUserId } = require('./middlewares/validationMiddlewares');
const { getBookByAuthorId, getAllBooks, getBookById, createBook, deleteBookById, createUser, getAllUsers, getUserById, updateUser } = require('./middlewares/middlewares')

require('dotenv').config()

const app = express();
app.use(express.json());

app.get('/book', getBookByAuthorId)

app.get('/books', getAllBooks)

app.get('/books/:id', getBookById)

app.post('/books', validateInfo, createBook)

// não consta nos exercícios, endpoint criado para estudar insertId retornado da função connection.execute();
app.delete('/books/:id', deleteBookById)


app.get('/user', getAllUsers) 

app.post('/user', validateUser, createUser)

app.get('/user/:id', getUserById)

app.put('/user/:id', validateUser, validateUserId, updateUser)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));