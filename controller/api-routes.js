var db = require("../models");

app.get("/api/wines", function(req, res){

    db.Wine.findAll().then(function(results){
        res.json(results);
    })


});

app.post("api/wines", function(req, res){

    db.Wine.create({

        title: req.body.title,
        country: req.body.country,
        description: req.body.description,
        price: req.body.price,
        points: req.body.points,
        variety: req.body.variety,
        winery: req.body.winery,
        

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

