'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discussions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Discussions.belongsTo(models.Goals, { foreignKey: 'goalsId' })
      Discussions.belongsTo(models.Users, { foreignKey: 'userId' })
    }
  };
  Discussions.init({
    detailDiskusi: DataTypes.TEXT,
    diskusiDate: DataTypes.DATE,
    userId: DataTypes.STRING,
    goalsId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Discussions',
  });
  return Discussions;
};