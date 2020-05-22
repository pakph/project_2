/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Carb = sequelize.define('carb_entry', {
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
    carb_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'carb_entry',
    timestamps: false
  });
  return Carb;
};