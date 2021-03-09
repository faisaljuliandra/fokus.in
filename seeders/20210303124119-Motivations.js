'use strict';
const { nanoid } = require('nanoid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
    {id: nanoid(), dailyMotivation: "apaweh", createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), dailyMotivation: "apaaja", createdAt: new Date(), updatedAt: new Date()}
    ];
    return await queryInterface.bulkInsert('Motivations', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Motivations', null, {});
  }
};
