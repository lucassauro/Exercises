const express = require('express');
const rescue = require('express-rescue');

const { validateInfo } = require('./services/validationMiddlewares');
const { getBookByAuthorId, getAllBooks, getBookById, createBook, deleteBookById } = require('./controllers/ControllerBooks');

const errorMiddleware = require('./controllers/ControllerError');

const router = express.Router();

router.get('/book', rescue(getBookByAuthorId))

router.get('/', rescue(getAllBooks))

router.get('/:id', rescue(getBookById))

router.post('/', validateInfo, rescue(createBook))

// não consta nos exercícios, endpoint criado para estudar insertId retornado da função connection.execute();
router.delete('/:id', rescue(deleteBookById))

router.use(errorMiddleware);

module.exports = router;
