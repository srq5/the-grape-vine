//on clicking add wine button
$("#addWine").on("click", function(e){
	e.preventdefault();
	//open modal with add form
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