var express = require("express");

var db = require("../models");

module.exports = function(app) {
    //API Route for All User Data
    app.get("/api/users", function(req, res) {
        db.user_id.findAll({}).then(function(data) {
            res.json(data);
        });     
    });
    //API Route to obtain a single user's data based on user id
    app.get("/api/users/:user_id/", function(req, res) {
        db.user_id.findAll({
            where: {
                user_id: req.params.user_id
            }
        }).then(function(data) {
            res.json(data);
        });
    });

    //API Route to obtain bgl entries for a single
    app.get("/api/users/:user_id/health", function(req, res) {
        db.user_id.findAll({
            where: {
                user_id: req.params.user_id
            },
            include: [{
                model: db.bgl_entry
            }]
        })
    })
}

