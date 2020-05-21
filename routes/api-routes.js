var express = require("express");

var db = require("../models");

module.exports = function(app) {
    //API Route for All User Data
    app.get("/api/users", function(req, res) {
        db.user_id.findAll({}).then(function(data) {
            res.json(data);
            console.log(data);
        });     
    });
}

