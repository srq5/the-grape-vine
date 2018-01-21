var path = require("path");
var db = require("../models");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/profile", function(req, res) {
        res.render("profiles");
    });

    app.get("/reviews", function(req, res) {
        db.Wine.findAll({

                //        where: {
                //            points: { $gt: 99 }
                //        }
            })

            .then(function(results) {
                console.log(results);
                //render in reviews page
                res.render("reviews", { wines: results });
            });

    });
}