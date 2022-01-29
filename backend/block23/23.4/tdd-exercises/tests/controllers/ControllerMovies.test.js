const sinon = require('sinon');
const { expect, calledWith } = require('chai');
const connection = require('../../models/Connection');

const ServiceMovies = require('../../services/ServiceMovies');
const ControllerMovies = require('../../controllers/ControllerMovies');

describe('Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(ServiceMovies, 'create')
        .resolves(false);
    });

    after(() => {
      ServiceMovies.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await ControllerMovies.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await ControllerMovies.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });

  });

  describe('quando é inserido com sucesso', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub()
        .returns(response);
      response.send = sinon.stub()
        .returns();

      sinon.stub(ServiceMovies, 'create')
        .resolves(true);
    })

    after(() => {
      ServiceMovies.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await ControllerMovies.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await ControllerMovies.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
    });

  });
});

describe('Consulta no banco de dados um id...', () => {

    describe('válido ..', () => {
      const request = {};
      const response = {};

      before(() => {
        request.params = { id: 1 };
  
        response.status = sinon.stub()
          .returns(response);
        response.send = sinon.stub()
          .returns();
      })
  

      describe('existente', () => {
        before(async () => {
          const execute = { id: 1, title: 'Inglorious Basterds', directedBy: 'Quentin Tarantino', releaseYear: 2009 };
          sinon.stub(ServiceMovies, 'get').resolves(execute);
        })
        after(async () => {
          ServiceMovies.get.restore();
        })

        it('retorna status 200 ok', async () => {
          await ControllerMovies.get(request, response)
          expect(response.status.calledWith(200)).to.be.equal(true);
        })
        it('recebe send com detalhes corretos do filme', async () => {
          await ControllerMovies.get(request, response)
          expect(response.send.calledWith({ id: 1, title: 'Inglorious Basterds', directedBy: 'Quentin Tarantino', releaseYear: 2009 })).to.be.equal(true); 
        })
      })

      describe('inexistente', () => {
        before(async () => {
          const execute = { error: { code: 'notFound', message: 'Id não encontrado' } };
          sinon.stub(ServiceMovies, 'get').resolves(execute);
        })
        after(async () => {
          ServiceMovies.get.restore();
        })
        it('retorna status 404 Not Found', async () => {
          await ControllerMovies.get(request, response)
          expect(response.status.calledWith(404)).to.be.equal(true)
        })
        it('retorna a mensagem de NotFound id não encontrado', async () => {
          await ControllerMovies.get(request, response)
          expect(response.send.calledWith('Id não encontrado')).to.be.equal(true);
        })
      })
    })

    describe('inválido', () => {
      before(async () => {
        const execute = { error: { code: 'badRequest', message: 'id deve ser número' } };
        sinon.stub(ServiceMovies, 'get').resolves(execute);
      })
      after(async () => {
        ServiceMovies.get.restore();
      })
      it('retorna status 400 bad Request', () => {

      })
      it('retorna a mensagem de badRequest id deve ser número', () => {

      })
    })

})