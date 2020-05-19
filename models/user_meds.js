/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var UserMeds = sequelize.define('user_meds', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    med_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dosage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    no_of_tablets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'user_meds'
  });
  return UserMeds;
};
