var db = require("../models");

app.get("/api/wines", function(req, res){

    db.Wine.findAll().then(function(results){
        res.json(results);
    })


});

app.post("api/wines", function(req, res){

});


app.put("api/wines", function (req, res){

    

});



app.get("/api/users", function (req, res){

});

app.post("api/users", function (req, res){

});

app.put("/api/users", function(req, res){

})

app.delete("/api/users", function (req, res){

});

