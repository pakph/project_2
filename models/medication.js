module.exports = function(sequelize, DataTypes) {
  var Med = sequelize.define('Med', {
    med_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    med_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    med_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dosage: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  }, {
    tableName: 'medication',
    timestamps: false
  });
  return Med
};
