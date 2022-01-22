const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/Connection');
const ModelMovies = require('../../models/ModelMovies');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  })

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await ModelMovies.create(payloadMovie);
      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await ModelMovies.create(payloadMovie);
      expect(response).to.have.a.property('id')
    });

  });
});

describe('Realiza uma consulta ao banco de dados', () => {
  describe('é bem sucedida', () => {
    before(async () => {
      const execute = [{ id: 1, title: 'Inglorious Basterds', directedBy: 'Quentin Tarantino', releaseYear: 2009}]
      sinon.stub(connection, 'execute').resolves(execute);
    })
    after(async () => {
      connection.execute.restore()
    })

    it('retorna um objeto', async () => {
      const result = await ModelMovies.get(1)
      expect(result).to.be.a('object');
    })
    it('o objeto possui o título do filme', async () => {
      const result = await ModelMovies.get(1)
      expect(result.title).to.be.equal('Inglorious Basterds')
    })
  })

  describe('é mal sucedida', () => {
    before(async () => {
      const execute = [[]]
      sinon.stub(connection, 'execute').resolves(execute);
    })
    after(async () => {
      connection.execute.restore()
    })
    it('retorna um array', async () => {
      const result = await ModelMovies.get(5)
      expect(result).to.be.a('array');
    })
    it('o array retornado não tem nenhum elemento', async () => {
      const result = await ModelMovies.get(5)
      expect(result[0]).to.be.equal(undefined);
    })
  })
});