'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Milestones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Milestones.hasOne(models.Goals, { foreignKey: 'id' })
      Milestones.belongsToMany(models.UserGoals, {through: 'userProgressMilestones', as:'progress', foreignKey: 'id'})
    }
  };
  Milestones.init({
    goalsId: DataTypes.STRING,
    detailGoal: DataTypes.TEXT,
    referensi: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Milestones',
  });
  return Milestones;
};