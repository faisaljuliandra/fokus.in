'use strict';
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

  async function hash(password) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);  

    return passwordHash;
  }

const ROLE = {
  ADMIN: 'admin',
  USER: 'user'
}

module.exports = {
  ROLE: ROLE,
  up: async (queryInterface, Sequelize) => {
    const data = [
    {id: nanoid(), username: "admin001", password: await hash("admin001"), nama: "Admin", email: "admin@gmail.com", jenisKelamin: "Pria", noTelp: "08986236202", role: ROLE.ADMIN, createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), username: "faisal01", password: await hash("faisal01"), nama: "Faisal", email: "faisal01@gmail.com", jenisKelamin: "Pria", noTelp: "08986236202", role: ROLE.USER, createdAt: new Date(), updatedAt: new Date()},
    {id: nanoid(), username: "admin002", password: await hash("admin002"), nama: "Admin", email: "admin002@gmail.com", jenisKelamin: "Pria", noTelp: "08986236202", role: ROLE.ADMIN, createdAt: new Date(), updatedAt: new Date()}
    ];
    return await queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
