module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user_id", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_id: DataTypes.STRING
    });
    return User;
};