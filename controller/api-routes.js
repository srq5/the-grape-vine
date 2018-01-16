var db = require("../models");

app.get("/api/wines", function(req, res){

    db.Wine.findAll().then(function(results){
        res.json(results);
    })


});

app.post("api/wines", function(req, res){

    db.Wine.create({

        country: req.body.country,
        description: req.body.description,
        designation: req.body.designation,
        price: req.body.price,
        points: req.body.points,
        province: req.body.province,
        variety: req.body.variety,
        winery: req.body.winery,
        region_1: req.body.region_1,
        region_2: req.body.region_2


    }).then(function(results){
        res.json(results);
    });

});


app.put("api/wines", function (req, res){

    

});

app.delete("api/wines", )










app.get("/api/users", function (req, res){

});

app.post("api/users", function (req, res){

});

app.put("/api/users", function(req, res){

})

app.delete("/api/users", function (req, res){

});

