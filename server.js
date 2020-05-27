var express = require("express");
// var mysql = require("mysql");
var exphbs = require("express-handlebars");

var db = require("./models")

let morgan = require('morgan')
morgan.format('logFormat', ':date, :resource, :remote-addr, :status, :response-time ms');


var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(morgan('dev'))

// api routes
require("./routes/html-routes.js")(app);
require("./routes/post-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/get-api-routes.js")(app);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
    // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });
});