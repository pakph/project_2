// Dependencies
// =============================================================
var path = require("path");

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // route loads Trackr.handlebars
    app.get("/Trackr", function(req, res) {
        res.render("Trackr", {});
    });

    // route loads Carb-Trackr.handlebars
    app.get("/Carb-Trackr", function(req, res) {
        res.render("Carb-Trackr", {});
    });

    // route loads Medication.handlebars
    app.get("/Medications", function(req, res) {
        res.render("Medication", {});
    });


    // route loads Homepage.html
    app.get("/", function(req, res) {
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "../public/Homepage.html"));
    });
};