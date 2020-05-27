/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var BgBp =  sequelize.define('BgBp', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    glucose: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pressure: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'bgbp_entry'
  });

  return BgBp;
};
