'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserCategories.hasOne(models.Users, { foreignKey: 'id' })
      UserCategories.hasOne(models.Categories, { foreignKey: 'id' })
    }
  };
  UserCategories.init({
    namaKategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserCategories',
  });
  return UserCategories;
};