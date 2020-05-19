/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bgl =  sequelize.define('bgl_entry', {
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
    }
  }, {
    tableName: 'bgl_entry'
  });
  return Bgl;
};
