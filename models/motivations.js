<<<<<<< HEAD
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motivations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Motivations.init({
    dailyMotivation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motivations',
  });
  return Motivations;
=======
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motivations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Motivations.init({
    dailyMotivation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Motivations',
  });
  return Motivations;
>>>>>>> feature/categories-goals-milestone
};