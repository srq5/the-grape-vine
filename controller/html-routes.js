var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res){
        res.render( "index" );
    });

    app.get("/profile", function(req, res){
        res.render("profiles");
    });

    app.get("/reviews", function(req, res){
        res.render("reviews");
    });

}