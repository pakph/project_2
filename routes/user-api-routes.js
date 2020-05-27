var express = require("express");

var db = require("../models");

module.exports = function(app) {
  // GET Route for All User Data
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(data) {
        res.json(data);
        console.log(data);
    });     
  });

  // GET route for getting user data for a specific user
  app.get("/api/users/:user_id", function(req, res) {
    db.User.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:user_id", function(req, res) {
    db.User.destroy({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
