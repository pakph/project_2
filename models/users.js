module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            
        }
    });
    // User.associate = function(models) {
    //     User.hasOne(models.Bp, {
    //         foreignKey: {
    //             allowNull: true
    //         }
    //     });
    // }
    return User;
};

