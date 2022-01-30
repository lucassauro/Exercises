const { sequelize, dataTypes, checkModelName, checkPropertyExists } = require('sequelize-test-helpers');
const bookModel = require('../models/book');

describe('O model de book', () => {
  const Book = bookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', () => {
    checkModelName(Book)('Book');
  })

  describe('possui as propriedades "title", "author", "page_quantity"', () => {
    ['title', 'pageQuantity', 'author'].forEach(checkPropertyExists(book));
  })

})