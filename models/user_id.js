/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user_id', {
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'user_id',
    timestamps: false
  });
  
  User.associate = function(models) {
    User.hasMany(models.bgl_entries,
    {
      foreignKey: 'BGL_user_id',
      sourceKey: 'user_id'
    });
    User.hasMany(models.bp_entries, {
      foreignKey: 'BP_user_id',
      sourceKey: 'user_id'
    });
  };

  return User;
};
