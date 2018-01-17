var db = require("../models");

app.get("/api/wines", function(req, res){

    db.Wine.findAll().then(function(results){
        res.json(results);
    })


});

app.get("/api/variety/:variety", function(req, res){
    db.Wine.findAll({
        where:{
            variety: req.params.variety
        }
    }).then(function(results){
        res.json(results);
    });
});

app.get("/api/country/:country", function(req, res){
    db.Wine.findAll({
        where: {
            country: req.params.country
        }
    }).then(function(results){
        res.json(results);
    });
});

app.post("/api/wines", function(req, res){

    db.Wine.create({

        title: req.body.title,
        country: req.body.country,
        description: req.body.description,
        price: req.body.price,
        points: req.body.points,
        variety: req.body.variety,
        winery: req.body.winery
        

    }).then(function(results){
        res.json(results);
    });

});


app.put("/api/wines", function (req, res){
    db.Wine.update({
        title: req.body.title,
        country: req.body.country,
        description: req.body.description,
        price: req.body.price,
        points: req.body.points,
        variety: req.body.variety,
        winery: req.body.winery
    }, {
        where: {
            id: req.body.id
        }
    }).then(function(results){
        res.json(results);
    });
    

});

app.delete("/api/wines/:id", function(req, res){
    db.Wine.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(results){
        response.json(results);
    });
});










app.get("/api/users/:user", function (req, res){

});

app.post("api/users", function (req, res){

});

app.put("/api/users", function(req, res){

})

app.delete("/api/users", function (req, res){

});

