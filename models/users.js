module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("users", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_id: DataTypes.STRING
    });
    return User;
};