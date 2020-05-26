/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var MedEntry = sequelize.define('med_entry', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    med_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    med_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dosage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'med_entry'
  });
  return MedEntry
};
