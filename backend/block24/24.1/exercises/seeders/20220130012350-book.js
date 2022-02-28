'use strict';

const { Sequelize } = require("../models");

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Le Petit Prince',
      author: 'Saint Exupèry',
      // Dúvida. Ao inserir pageQuantity com camelCase e realizar a consulta gerou erro. Mesmo com as migrations utilizando camelCase e propriedade field.
      page_quantity: 200,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },{
      title: 'I Am Robot',
      author: 'Isaac Asimov',
      // Dúvida. Ao inserir pageQuantity com camelCase e realizar a consulta gerou erro. Mesmo com as migrations utilizando camelCase e propriedade field.
      page_quantity: 400,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
