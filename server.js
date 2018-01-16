var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var db = require("./models");

var PORT = process.env.PORT || 8000;



require("./controller/api-routes.js");
require("./controller/html-routes.js");

app.listen(PORT, function(){

    console.log("Listening on PORT" + PORT);

});