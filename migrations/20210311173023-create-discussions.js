'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Discussions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      detailDiskusi: {
        type: Sequelize.TEXT
      },
      diskusiDate: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      goalsId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Goals',
          key: 'id'
        }
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
    await queryInterface.dropTable('Discussions');
  }
};