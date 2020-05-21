/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var UserMeds = sequelize.define('user_meds', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'user_id',
        key: 'user_id'
      }
    },
    med_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'medication',
        key: 'med_id'
      }
    },
    med_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dosage: {
      type: DataTypes.STRING(75),
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
    tableName: 'user_meds',
    timestamps: false
  });
  return UserMeds;
};
