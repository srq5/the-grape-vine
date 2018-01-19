var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// require("./controller/api-routes.js")(app);
require("./controller/html-routes.js")(app);

db.sequelize.sync().then(function() {
	app.listen(PORT, function(){
		console.log("Listening on PORT" + PORT);
	});

});


