module.exports = function(sequelize, DataTypes) {
  var Carb = sequelize.define('Carb', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    carb_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'carb_entry'
  });

  return Carb;
};
