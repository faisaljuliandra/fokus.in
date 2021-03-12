<<<<<<< HEAD
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserProgressMilestones', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      milestonesId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Milestones',
          key: 'id'
        }
      },
      userGoalsId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'UserGoals',
          key: 'id'
        }
      },
      isFinished: {
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
    await queryInterface.dropTable('UserProgressMilestones');
  }
=======
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserProgressMilestones', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(22)
      },
      MilestoneId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'Milestones',
          key: 'id'
        }
      },
      userGoalsId: {
        type: Sequelize.STRING(22),
        references: {
          model: 'UserGoals',
          key: 'id'
        }
      },
      isFinished: {
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
    await queryInterface.dropTable('UserProgressMilestones');
  }
>>>>>>> feature/categories-goals-milestone
};