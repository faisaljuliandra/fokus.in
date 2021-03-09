'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Goals.hasOne(models.Categories, { foreignKey: 'id' })
      Goals.hasMany(models.Milestones, { foreignKey: 'goalsId' })
      Goals.belongsToMany(models.Users, { through: 'userGoals', as: 'goals', foreignKey: 'id' })
    }
  };
  Goals.init({
    categoryId: DataTypes.STRING,
    namaGoal: DataTypes.STRING,
    deskripsiGoal: DataTypes.TEXT,
    estimationTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Goals',
  });
  return Goals;
};