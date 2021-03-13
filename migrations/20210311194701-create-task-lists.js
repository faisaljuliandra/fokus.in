'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TaskLists', {
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
      namaList:{
        type: Sequelize.TEXT
      },
      detailList:{
        type: Sequelize.TEXT
      },
      warnaList:{
        type: Sequelize.STRING(15)
      },
      dateList:{
        type: Sequelize.DATE
      },
      statusList:{
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
    await queryInterface.dropTable('TaskLists');
  }
};