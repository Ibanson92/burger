var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var methodOveride = require("method-overide");
var app = express();
var orm = require("./config/orm");

var controller = require("./controllers/burgers_controllers");

var PORT = process.env.PORT || 8160;

var router = require("./controllers/burgers_controllers");
app.use("/", router);

app.use(express.static(__dirname + "public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(methodOveride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(controller);

app.listen(PORT, function() {
  console.log("Started our server and listening");
});
