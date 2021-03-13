'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TaskLists.belongsTo(models.Users, {foreignKey: 'userId'})
    }
  };
  TaskLists.init({
    userId: DataTypes.STRING,
    namaList: DataTypes.TEXT,
    detailList: DataTypes.TEXT,
    warnaList: DataTypes.STRING,
    dateList : DataTypes.DATE,
    statusList : DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TaskLists',
  });
  return TaskLists;
};