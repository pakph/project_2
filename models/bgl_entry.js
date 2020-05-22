/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bgl = sequelize.define('bgl_entries', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      references: {
        model: 'user_id',
        key: 'user_id',
      }
    },
    date_time: {
      type: DataTypes.DATE,
    },
    glucose: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'bgl_entries',
    timestamps: false
  });
  
  Bgl.associate = function(models) {
    Bgl.belongsTo(models.user_id, {
      foreignKey: 'user_id',
      as: 'BGL_user_id'
    })
  }
  return Bgl;
};
