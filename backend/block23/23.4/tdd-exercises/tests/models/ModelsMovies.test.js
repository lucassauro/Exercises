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

describe('Consulta no Banco de Dados um id...', () => {
  describe('válido e existente', () => {
    const payload = 1;
    before(async () => {
      const execute = [{ id: 1, title: 'Inglorious Basterds', directedBy: 'Quentin Tarantino', releaseYear: 2009 }];
      sinon.stub(connection, 'execute').resolves(execute);
    })
  
    after(async () => {
      connection.execute.restore();
    })
    it('retorna um objeto', async () => {
      const result = await ModelMovies.get(payload)
      expect(result).to.be.an('object')
    })
    it('o objeto contém o título do filme consultado', async () => {
      const result = await ModelMovies.get(payload)
      expect(result.title).to.be.equal('Inglorious Basterds')
    })
  })

  describe('inexistente', () => {
    const payload = 2;
    before(async () => {
      const execute = [[]];
      sinon.stub(connection, 'execute').resolves(execute);
    })
  
    after(async () => {
      connection.execute.restore();
    })
    it('retorna um array vazio', async () => {
      const result = await ModelMovies.get(payload)
      expect(result).to.be.an('array').that.is.empty;
    })
  })
})