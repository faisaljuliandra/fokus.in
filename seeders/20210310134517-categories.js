'use strict';

const { nanoid } = require("nanoid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { id: nanoid(), namaKategori: 'Bisnis & Keuangan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), namaKategori: 'Teknologi', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), namaKategori: 'Desain', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), namaKategori: 'Entertainment', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), namaKategori: 'Pengembangan Diri', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
