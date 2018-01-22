//code to pull latest wine reviews from database (maybe 10?)

// $.get("/api/reviews",function(data){
// 	//code to display them on page

// })

// //code to handle if the user clicks on a wine
// 	$(".reviewsClass").on("click", function(e){
// 		var wineId =  $(this).attr("id");
// 	//code to pull all reviews for that wine
// 	$.get("/api/wines"+wineId, function(data){
// 	//open modal maybe (to keep the user on one page) with all the reviews
// 	});
// 	});

$("#varietal-selection").on("change",function(input){
    input=$(this).val();

    $.get("/api/variety"+input, function(data){
        console.log("get info sent",input);
    });
});

$("#location-selection").on("change",function(input){
    input=$(this).val();

    $.get("/api/country"+input, function(data){
        console.log("get info sent",input);
    });
});

var wineId= $(".add-wine").attr("id");
$.post("/api/wine/add", function(data){
    console.log("added new wine");
});
