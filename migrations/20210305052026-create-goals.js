'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      categoriesId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      namaGoal: {
        type: Sequelize.STRING(60)
      },
      deskripsiGoal: {
        type: Sequelize.TEXT
      },
      estimationTime: {
        type: Sequelize.STRING(30)
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
    await queryInterface.dropTable('Goals');
  }
};