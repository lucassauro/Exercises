const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');
const { writeOnFile } = require('../exercises');

const file = 'arquivo.txt';
const content = 'Isso aí, vamos juntos!';

describe('Executes writeOnFile function', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  })

  after(() => {
    fs.writeFile.restore();
  })

  describe('In case of success', () => {
    it('returns ok', () => {
      const returned = writeOnFile(file, content);
      expect(returned).to.be.equals('ok')
    });
  });
  
  describe('In case of failure', () => {    
    it('return error', () => {
      const returned = writeOnFile()
      expect(returned).to.be.null;
    });
  });
});

// const fs = require('fs');
// const sinon = require('sinon');
// const { expect } = require('chai');

// const {escrevaArquivo} = require('../exercises');

// describe('Executa a função escrevaArquivo', () => {
//   before(() => {
//     sinon.stub(fs, 'writeFileSync');
//   });

//   after(() => {
//     fs.writeFileSync.restore();
//   });

//   describe('a resposta', () => {
//     it('é uma "string"', () => {
//       const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo1');

//       expect(resposta).to.be.a('string');
//     });

//     it('é igual a "ok"', () => {
//       const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo2');

//       expect(resposta).to.be.equals('ok');
//     });
//   });
// });