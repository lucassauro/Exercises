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