//new wine constructor
function NewWine(title, country,description,price,points,variety,winery){
	this.title= title,
	this.country = country,
	this.description=description,
	this.price=price,
	this.points=points,
	this.variety=variety,
	this.winery=winery
}

//on clicking add wine button
$("#addWine").on("click", function(e){
	e.preventdefault();
	//open modal with add form
	var wineTitle = $("#addFormTitle").val().trim();
	var wineCountry = $("#addFormCountry").val().trim();
	var wineDesc = $("#addFormDesc").val().trim();
	var winePrice = $("#addFormPrice").val().trim();
	var winePts = $("#addFormPts").val().trim();
	var wineVariety = $("#addFormVariety").val().trim();
	var wineWinery = $("#adFormWinery").val().trim();
	//create newWine object
	var newWine = NewWine(wineTitle,wineCountry,wineDesc,winePrice,winePts,wineVariety,wineWinery);
	//post newWine obj
	$.post("/api/wines", newWine, function(data){
		//display new wine
	})
});

//on clicking remove wine button
$("#removeWine").on("click", function(e){
	e.preventdefault();
	//get wine input
	var wineDelChoice = window.prompt("What wine would you like to remove?");
	//api delete call
	$.delete(window.location.pathname+wineDelChoice,function(data){
		console.log("Wine deleted!");
	})
});

//on clicking an update review button

$("#updateReview").on("click", function(e){
	e.preventdefault();

})