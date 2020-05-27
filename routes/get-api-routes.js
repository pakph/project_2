var express = require("express");

var db = require("../models");

module.exports = function(app) {
    //API Route for All User Data
    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(data) {
            res.json(data);
            console.log(data);
        });     
    });

    // GET route for getting all of the blood glucose entries
    app.get("/api/bglentry/:user_id", function(req, res) {
        db.Bgl.findAll({
            where: {
                user_id: req.params.user_id
            }
            }).then(function(dbBgl) {
                console.log(dbBgl);
                res.json(dbBgl);
            });
        });

    // GET route for getting all of the carb entries
    app.get("/api/bpentry/:user_id", function(req, res) {
        db.Bp.findAll({
            where: {
                user_id: req.params.user_id
            }
            }).then(function(dbBp) {
                console.log(dbBp);
                res.json(dbBp);
            });
        });

    // GET route for getting all of the carb entries
    app.get("/api/carbentry/:user_id", function(req, res) {
        db.Carb.findAll({
            where: {
                user_id: req.params.user_id
            }
            }).then(function(dbCarb) {
                console.log(dbCarb);
                res.json(dbCarb);
            });
        });

    // GET route for getting all of the medication entries
    app.get("/api/medentry/:user_id", function(req, res) {
        // 1. Add a join here to include one of the users to these entries
        db.UserMeds.findAll({
            where: {
                user_id: req.params.user_id
            }
            }).then(function(dbUserMeds) {
            console.log(dbUserMeds);
            res.json(dbUserMeds);
            });
        });
}