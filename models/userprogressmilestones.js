'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProgressMilestones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserProgressMilestones.belongsTo(models.UserGoals, { foreignKey: 'userGoalsId' })
      UserProgressMilestones.belongsTo(models.Milestones, { foreignKey: 'MilestoneId' })
    }
  };
  UserProgressMilestones.init({
    MilestoneId: DataTypes.STRING,
    userGoalsId: DataTypes.STRING,
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserProgressMilestones',
  });
  return UserProgressMilestones;
};