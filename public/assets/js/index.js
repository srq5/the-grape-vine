function User(firstName, lastName,username,password,email){
	this.firstName= firstName,
	this.lastName = lastName,
	this.username=username,
	this.password=password,
	this.email=email
};

function Login(username,password){
	this.username=username,
	this.password=password
};


//code to handle what happens if user clicks on create account
	$("#createAcctModal").modal({
		//callback function to run when modal is open
		 ready: function(createAcctModal){
      $("#createAcctForm").submit(function(e){
        e.preventDefault();
        var firstName = $("#firstName").val().trim();
        var lastName = $("#lastName").val().trim();
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();
        var email = $("#email").val().trim();
        var newUser = new User(firstName,lastName,username,password,email);

        $.post("/api/users", newUser,  function(data){
        	console.log("post new user succesful");
        	//code to display new user profile
        	$.get("/api/users"+username,function(data){
        		console.log("new user profile gotten");
        	});
        });
      });
    };
	});

//code to handle the sign in modal
	$("#signInModal").modal({
		ready:function(signInModal){
			$("#signInForm").submit(function(e){
				e.preventDefault();
		        var username = $("#username").val().trim();
		        var password = $("#password").val().trim();
		        var newLogin = new Login(username,password);
		        $.get("/api/users"+username,function(data){
        			console.log("old user profile gotten");
        	});
			})
		}
	})
	
//code to happen if user does a search
	//event listener for search bar
	//code to grab search terms
	switch(searchParam){

		case "wine":
			var searchInput = $("#wine-search").val().trim();
			//code to get wine info from database
			$.get("/api/wines/"+searchInput, function(data){
				//code to handle what happens if wine not found
				if(!data){
					//code to ask user if they want to add wine
					//switch to modal
					window.prompt("Would you like to add this wine?");
					//code redirecting user to add wine page/modal

				}
				else{	
				//comes back as a json object
				//code to display result

				}
			})
			break;

		case "variety":
			var searchInput = $("#wine-search").val().trim();
			$.get("/api/wines/varietal"+searchInput, function(data){
				if(!data){
					window.prompt("Would you like to add a wine of this varietal?");

				}
				else{	

				}
			})
			break;

					case "country":
			var searchInput = $("#wine-search").val().trim();
			$.get("/api/wines/country/"+searchInput, function(data){
				if(!data){
					window.prompt("Would you like to add a wine from this country?");

				}
				else{	

				}
			})
			break;

					


}//ends switch
	
