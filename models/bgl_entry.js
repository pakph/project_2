/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bgl =  sequelize.define('Bgl', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    glucose: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'bgl_entry'
  });

  // Bgl.associate = function(models) {
  //   Bgl.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Bgl;
};
