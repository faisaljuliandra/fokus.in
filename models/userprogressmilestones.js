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
      UserProgressMilestones.hasOne(models.UserGoals, { foreignKey: 'userGoalsId' })
      UserProgressMilestones.hasOne(models.Milestones, { foreignKey: 'milestonesId' })
    }
  };
  UserProgressMilestones.init({
    milestonesId: DataTypes.STRING,
    userGoalsId: DataTypes.STRING,
    isFinished: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserProgressMilestones',
  });
  return UserProgressMilestones;
};