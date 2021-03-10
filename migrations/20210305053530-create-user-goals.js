'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserGoals', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
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
      startGoal: {
        type: Sequelize.DATE
      },
      endGoal: {
        type: Sequelize.DATE
      },
      isEnrolled: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('UserGoals');
  }
};