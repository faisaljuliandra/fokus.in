'use strict';

const { nanoid } = require("nanoid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Goals', [
      { id: nanoid(), categoriesId: '-75aoJC7hwadrknBNLu3q', namaGoal: 'Menjadi UI/UX Designer', deskripsiGoal: 'Belajar menjadi UI/UX', estimationTime: '3 minggu', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: '-75aoJC7hwadrknBNLu3q', namaGoal: 'Menjadi Graphic Designer', deskripsiGoal: 'Belajar menjadi Graphic Designer', estimationTime: '2 minggu', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'E0J98r_xTXgTOevS2PbYk', namaGoal: 'Belajar Mengenai Teknik MC', deskripsiGoal: 'Belajar menjadi MC', estimationTime: '1 minggu', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'uGX0qsaTIx2s_3MaQTm5L', namaGoal: 'Menjadi QA Engineer', deskripsiGoal: 'Belajar menjadi QA', estimationTime: '4 minggu', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'ego7mT-vmX0IHRtSf72HS', namaGoal: 'Mengembangkan Potensi Diri', deskripsiGoal: 'Belajar Sehat mental', estimationTime: '1 minggu', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Goals', null, {});
  }
};

