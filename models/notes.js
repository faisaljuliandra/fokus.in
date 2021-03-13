'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Notes.belongsTo(models.UserGoals, { foreignKey: 'userGoalsId' })
    }
  };
  Notes.init({
    userGoalsId: DataTypes.STRING,
    isiNotes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};