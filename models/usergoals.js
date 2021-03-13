'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGoals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGoals.belongsTo(models.Users, { foreignKey: 'id' })
      UserGoals.belongsTo(models.Goals, { foreignKey: 'id' })
      UserGoals.belongsToMany(models.Milestones, {through: 'UserProgressMilestones', as:'progress', foreignKey: 'userGoalsId'})
    }
  };
  UserGoals.init({
    userId: DataTypes.STRING,
    goalsId: DataTypes.STRING,
    startGoal: DataTypes.DATE,
    endGoal: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserGoals',
  });
  return UserGoals;
};