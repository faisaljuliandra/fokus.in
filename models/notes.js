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
      Notes.belongsTo(models.Goals, { foreignKey: 'goalsId' })
    }
  };
  Notes.init({
    goalsId: DataTypes.STRING,
    isiNotes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Notes',
  });
  return Notes;
};