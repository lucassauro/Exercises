const { expect } = require('chai');
const { discoverNumber } = require('../exercises');

const positivo = 1;
const neutro = 0;
const negativo = (-1);

describe('Executes function discover number', () => {
  describe('It returns a string with "positivo" if param > 0', () => {
    const returned = discoverNumber(positivo)
    
    it('returns a string', () => {
      expect(returned).to.be.a('string');
    });
    
    it('returns "positivo" if param > 0', () => {
      expect(returned).to.be.equals('positivo');
    })
  });

  describe('It returns a string with "negativo" if param < 0', () => {
    const returned = discoverNumber(negativo);

    it('returns a string', () => {
      expect(returned).to.be.a('string');
    });

    it('returns "negativo" if param > 0', () => {
      expect(returned).to.be.equals('negativo');
    });
  });

  describe('It returns a string with "neutro" if param = 0', () => {
    const returned = discoverNumber(neutro);

    it('returns a string', () => {
      expect(returned).to.be.a('string');
    });

    it('returns "neutro" if param = 0', () => {
      expect(returned).to.be.equals('neutro');
    });
  });
  describe("If param isn't a Number, it returns string with 'o valor informado deve ser um numero'", () => {
    const returned = discoverNumber('string');

    it('returns a string', () => {
      expect(returned).to.be.a('string');
    });

    it('returns "o valor informado deve ser um numero"', () => {
      expect(returned).to.be.equals('o valor informado deve ser um numero');
    });
  })
});
