/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bp = sequelize.define('bp_entry', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'user_id',
        key: 'user_id'
      }
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    systolic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    diastolic: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'bp_entry',
    timestamps: false
  });
  
  return Bp;
};
