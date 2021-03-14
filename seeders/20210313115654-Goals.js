'use strict';
const { nanoid } = require("nanoid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query('SELECT "Categories"."id", "Categories"."namaKategori" AS "Categories.id" FROM "Categories" AS "Categories";');
    const categoriesRows = categories[0];
    await queryInterface.bulkInsert('Goals', [
      { id: nanoid(), categoriesId: categoriesRows[2].id, namaGoal: 'Menjadi UI/UX Designer', deskripsiGoal: 'Belajar menjadi UI/UX', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[2].id, namaGoal: 'Menjadi Graphic Designer', deskripsiGoal: 'Belajar menjadi Graphic Designer', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[3].id, namaGoal: 'Menjadi Youtuber', deskripsiGoal: 'Belajar menjadi youtuber', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[1].id, namaGoal: 'Membuat Aplikasi Mobile', deskripsiGoal: 'Belajar membuat aplikasi mobile', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[1].id, namaGoal: 'Membuat Start-Up', deskripsiGoal: 'Belajar mengenai startup', estimationTime: '2 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[1].id, namaGoal: 'Menjadi Front-End Developer', deskripsiGoal: 'Belajar mengenai web development terutama front-end development', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[4].id, namaGoal: 'Belajar Memasak', deskripsiGoal: 'Belajar Memasak', estimationTime: '3 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[4].id, namaGoal: 'Belajar Bahasa Inggris', deskripsiGoal: 'Belajar bahasa inggris', estimationTime: '1 tahun', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[0].id, namaGoal: 'Membuat Bisnis Online', deskripsiGoal: 'Membuat bisnis online sederhana', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
      { id: nanoid(), categoriesId: categoriesRows[0].id, namaGoal: 'Investasi Saham di Pasar Modal', deskripsiGoal: 'Belajar investasi saham', estimationTime: '6 bulan', createdAt: new Date(), updatedAt: new Date() },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Goals', null, {});
  }
};

