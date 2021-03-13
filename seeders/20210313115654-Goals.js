'use strict';

const { nanoid } = require("nanoid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Goals', [
      { id: nanoid(), categoriesId: '-75aoJC7hwadrknBNLu3q', namaGoal: 'Menjadi UI/UX Designer', deskripsiGoal: 'Belajar menjadi UI/UX', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: '-75aoJC7hwadrknBNLu3q', namaGoal: 'Menjadi Graphic Designer', deskripsiGoal: 'Belajar menjadi Graphic Designer', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'E0J98r_xTXgTOevS2PbYk', namaGoal: 'Menjadi Youtuber', deskripsiGoal: 'Belajar menjadi youtuber', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'uGX0qsaTIx2s_3MaQTm5L', namaGoal: 'Membuat Aplikasi Mobile', deskripsiGoal: 'Belajar membuat aplikasi mobile', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'uGX0qsaTIx2s_3MaQTm5L', namaGoal: 'Membuat Start-Up', deskripsiGoal: 'Belajar mengenai startup', estimationTime: '2 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'uGX0qsaTIx2s_3MaQTm5L', namaGoal: 'Menjadi Front-End Developer', deskripsiGoal: 'Belajar mengenai web development terutama front-end development', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'ego7mT-vmX0IHRtSf72HS', namaGoal: 'Belajar Memasak', deskripsiGoal: 'Belajar Memasak', estimationTime: '3 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: 'ego7mT-vmX0IHRtSf72HS', namaGoal: 'Belajar Bahasa Inggris', deskripsiGoal: 'Belajar bahasa inggris', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: '0cEVZehT0eeTFKHTCdqva', namaGoal: 'Membuat Bisnis Online', deskripsiGoal: 'Membuat bisnis online sederhana', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: '0cEVZehT0eeTFKHTCdqva', namaGoal: 'Investasi Saham di Pasar Modal', deskripsiGoal: 'Belajar investasi saham', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Goals', null, {});
  }
};

