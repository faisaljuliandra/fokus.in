'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      username: {
        type: Sequelize.STRING(18)
      },
      password: {
        type: Sequelize.STRING(60)
      },
      nama: {
        type: Sequelize.STRING(255)
      },
      email: {
        type: Sequelize.STRING(30)
      },
      jenisKelamin: {
        type: Sequelize.STRING(7)
      },
      noTelp: {
        type: Sequelize.STRING(30)
      },
      role: {
        type: Sequelize.STRING(6)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};