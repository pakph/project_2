var express = require("express");

var db = require("../models");


module.exports = function(app) {
  // POST route for saving a new blood glucose entry
  app.post("/api/Trackr/:user_id", function(req, res) {
      db.BgBp.create(req.body).then(function(dbBgl) {
        res.json(dbBgl);
        console.log(dbBgl)
      });
    });

  // POST route for saving a new blood pressure entry
  app.post("/api/bpentry", function(req, res) {
      db.Bp.create(req.body).then(function(dbBp) {
        res.json(dbBp);
      });
    });

  // POST route for saving a new carbohydrate entry
  app.post("/api/carbentry", function(req, res) {
      db.Carb.create(req.body).then(function(dbCarb) {
        res.json(dbCarb);
      });
    });

  // POST route for saving a new medication entry
  app.post("/api/medentry", function(req, res) {
      db.UserMeds.create(req.body).then(function(dbUserMeds) {
        res.json(dbUserMeds);
      });
    });


  // DELETE route for deleting a blood glucose entry
  app.delete("/api/bglentry/:user_id", function(req, res) {
      db.Bgl.destroy({
        where: {
          user_id: req.params.user_id
        }
      }).then(function(dbBgl) {
        res.json(dbBgl);
      });
    });

  // DELETE route for deleting a blood pressure entry
  app.delete("/api/bpentry/:user_id", function(req, res) {
      db.Bp.destroy({
        where: {
          user_id: req.params.user_id
        }
      }).then(function(dbBp) {
        res.json(dbBp);
      });
    });

  // DELETE route for deleting a carbohydrates entry
  app.delete("/api/carbentry/:user_id", function(req, res) {
      db.Carb.destroy({
        where: {
          user_id: req.params.user_id
        }
      }).then(function(dbCarb) {
        res.json(dbCarb);
      });
    });

  // DELETE route for deleting a medication entry
  app.delete("/api/medentry/:user_id", function(req, res) {
      db.UserMeds.destroy({
        where: {
          user_id: req.params.user_id
        }
      }).then(function(dbUserMeds) {
        res.json(dbUserMeds);
      });
    });

// PUT route for updating blood glucose
  app.put("/api/bglentry/:user_id", function(req, res) {
      db.Bgl.update(
        req.body,
        {
          where: {
            user_id: req.body.user_id
          }
        }).then(function(dbBgl) {
        res.json(dbBgl);
      });
    });

  // PUT route for updating blood pressure
  app.put("/api/bpentry/:user_id", function(req, res) {
      db.Bp.update(
        req.body,
        {
          where: {
            user_id: req.body.user_id
          }
        }).then(function(dbBp) {
        res.json(dbBp);
      });
    });

  // PUT route for updating carbs
  app.put("/api/carbentry/:user_id", function(req, res) {
      db.Carb.update(
        req.body,
        {
          where: {
            user_id: req.body.user_id
          }
        }).then(function(dbCarb) {
        res.json(dbCarb);
      });
    });

  // PUT route for updating medications
  app.put("/api/medentry/:user_id", function(req, res) {
      db.UserMeds.update(
        req.body,
        {
          where: {
            user_id: req.body.user_id
          }
        }).then(function(dbMeds) {
        res.json(dbMeds);
      });
    });
};