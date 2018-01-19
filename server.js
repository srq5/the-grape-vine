var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var db = require("./models");

var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

require("./controller/api-routes.js")(app);
require("./controller/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function(){
		console.log("Listening on PORT" + PORT);
	});

});


