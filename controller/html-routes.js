var path = require("path");

module.exports = function(app){

    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/profile", function(req, res){
        res.sendFile(path.join(__dirname, "../public/profiles.html"));
    });

    app.get("/reviews", function(req, res){
        res.sendFile(path.join(__dirname, "../public/reviews.html"));
    });

}