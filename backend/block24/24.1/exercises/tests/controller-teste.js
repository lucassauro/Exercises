const chai = require('chai');
const { expect } = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../index');
const { Book } = require('../models');

chai.use(chaiHttp);

describe('Busca todos os livros', () => {
  describe('quando não existe nenhum livro cadastrado', () => {
    const findAllStub = sinon.stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    })
    after(() => {
      findAllStub.restore();
    })

    it('executou Book.findAll', async () => {
      await chai.request(app).get('/books');
      expect(Book.findAll.calledOnce).to.be.equals(true);
    })
    it('o status retorna 200', async () => {
      const result = await chai.request(app).get('/books');
      expect(result.status).to.be.equals(200);
    });
    it('a resposta é um array', async () => {
      const result = await chai.request(app).get('/books');
      expect(result.body).to.be.an('array');
    });
    it('o array está vazio', async () => {
      const result = await chai.request(app).get('/books');
      expect(result.body).to.be.empty;
    });
  })
})