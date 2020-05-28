var express = require("express");

var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the blood glucose entries
    app.get("/api/Trackr/:user_id", function(req, res) {
        db.BgBp.findAll({
            where: {
                user_id: req.params.user_id
            },
            raw:true,
            }).then(function(dbBgl) {
                console.log(dbBgl);
                
                res.render("Trackr", {user: dbBgl} );
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

    app.get("/api/meds", function(req, res) {
        db.Med.findAll({ raw:true}).then(function(data) {
            console.log(data)
            //res.json(data);
            res.render('Medication', {medication:data});
            });     
        });
}