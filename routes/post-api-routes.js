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
    // var query = {};
    // if (req.query.users) {
    //   query.User = req.query.user_id;
    // }
    // 1. Add a join here to include one of the users to these entries
    db.Bgl.findAll({
        where: {
            user_id: req.params.user_id
          }
          // include: {
          //   model: db.User
            
          // }
        }).then(function(dbBgl) {
          console.log(dbBgl);
          res.json(dbBgl);
        });
      });

// GET route for getting all of the carb entries
app.get("/api/bpentry/:user_id", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.User = req.query.user_id;
    }
      db.Bp.findOne({
        where: {
            id: req.params.user_id
          },
          include: {
            model: db.User
            
          }
        }).then(function(dbBp) {
          console.log(dbBp);
          res.json(dbBp);
        });
      });

// GET route for getting all of the carb entries
app.get("/api/carbentry", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.User = req.query.user_id;
    }

      db.Carb.findOne({
        where: {
            id: req.params.user_id
          },
          include: {
            model: db.User
            
          }
        }).then(function(dbCarb) {
          console.log(dbCarb);
          res.json(dbCarb);
        });
      });

// GET route for getting all of the medication entries
app.get("/api/medentry", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.User = req.query.user_id;
    }
    // 1. Add a join here to include one of the users to these entries
    db.UserMeds.findOne({
        where: {
            id: req.params.user_id
          },
          include: {
            model: db.User
            
          }
        }).then(function(dbUserMeds) {
          console.log(dbUserMeds);
          res.json(dbUserMeds);
        });
      });



 // POST route for saving a new blood glucose entry
 app.post("/api/bglentry", function(req, res) {
    db.Bgl.create(req.body).then(function(dbBgl) {
      res.json(dbBgl);
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