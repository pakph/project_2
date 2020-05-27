var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/user/:id", function(req, res) {
    // 2; Add a join to include all of the user's input here
    db.User.findOne({
      where: {
        id: req.params.user_id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.user_id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
