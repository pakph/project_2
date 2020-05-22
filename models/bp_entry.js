/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bp = sequelize.define('bp_entries', {
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
      defaultValue: DataTypes.NOW
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
    tableName: 'bp_entries',
    timestamps: false
  });

  Bp.associate = function(models) {
    Bp.belongsTo(models.user_id, {
      foreignKey: 'user_id',
      as: 'BP_user_id'
    })
  }
  
  return Bp;
};
