var path = require("path");
var db = require("../models");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/:username", function(req, res) {
        db.User.findOne({
        where: {
            username: req.params.username
        },
        // include: [db.Wine],
        // include: [db.Review]

    }).then(function(results){
        console.log(results.dataValues);
        res.render("profiles", results.dataValues);
    });
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