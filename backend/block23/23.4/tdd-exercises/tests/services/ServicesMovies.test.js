const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/Connection');

const ModelMovies = require('../../models/ModelMovies');
const ServiceMovies = require('../../services/ServiceMovies');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await ServiceMovies.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await ServiceMovies.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(ModelMovies, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      ModelMovies.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await ServiceMovies.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await ServiceMovies.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Consulta no banco de dados um id', () => {

  describe('existente', () => {
    const payload = 1;
    before(async () => {
      const execute = { id: 1, title: 'Inglorious Basterds', directedBy: 'Quentin Tarantino', releaseYear: 2009 };
      sinon.stub(ModelMovies, 'get').resolves(execute);
    })
    after(async () => {
      ModelMovies.get.restore();
    })
    it('retorna um objeto', async () => {
      const result = await ServiceMovies.get(payload)
      expect(result).to.be.an('object');
    })
    it('o objeto contém o título do filme consultado', async () => {
      const result = await ServiceMovies.get(payload);
      expect(result.title).to.be.equal('Inglorious Basterds');
    })
  })
  describe('inexistente', () => {
    const payload = 2;
    before(async () => {
      const execute = [];
      sinon.stub(ModelMovies, 'get').resolves(execute);
    })
    after(async () => {
      ModelMovies.get.restore();
    })
    it('retorna um objeto', async () => {
      const result = await ServiceMovies.get(payload)
      expect(result).to.be.an('object');
    })
    it('o objeto contém informações de erro', async () => {
      const result = await ServiceMovies.get(payload)
      expect(result.error).to.be.an('object')
    })
    it('o erro tem o código "notFound"', async () => {
      const result = await ServiceMovies.get(payload)
      expect(result.error.code).to.be.equal('notFound');
    })
  })
})