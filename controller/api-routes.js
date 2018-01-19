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

app.get("api/wines/:id", function(req, res){
    db.Wine.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(results){
    res.json(results);
    })
})

app.delete("/api/wines/:id", function(req, res){
    db.Wine.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(results){
        res.json(results);
    });
});

app.get("/api/user/:id", function(req, res){

    db.#.findAll({

        where: 
    })

})

app.get("/api/user/:username", function (req, res){

    db.User.findOne({
        where: {
            username: req.params.username
        }
    }).then(function(results){
        res.json(results);
    });

});

app.post("api/user", function (req, res){

    db.User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
       
    }).then(function(results){
        res.json(results);
    });

});

app.put("/api/user", function(req, res){

    db.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
    }).then(function(results){
        res.json(results);
    });

})

//User can only delete from their own profile.

app.delete("/api/user/:username", function (req, res){

    db.User.destroy({

        where: {
            username: req.params.username
        }
        
    }).then(function(results){
        res.json(results);
    });

});

