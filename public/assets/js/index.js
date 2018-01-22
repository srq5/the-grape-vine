function User(firstName, lastName, username, password, email) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.username = username,
        this.password = password,
        this.email = email
}

$(document).ready(function() {

    //initialize all modals           
    $('.modal').modal();
    //initialize selection boxes 
    $('select').material_select();
});

//code to handle what happens if user clicks on create account

// $("#createAcctModal").modal({
//     //callback function to run when modal is open
//     dismissible: true, // Modal can be dismissed by clicking outside of the modal
//     opacity: .5, // Opacity of modal background
//     inDuration: 300, // Transition in duration
//     outDuration: 200, // Transition out duration
//     startingTop: '4%', // Starting top style attribute
//     endingTop: '10%', // Ending top style attribute
//     ready: function(createAcctModal) {
       $("#createAcctSubmit").on("click", function(e) {
           e.preventDefault();
           var username = $("#username").val().trim();
           console.log("It worked");
           var newUser = {
            firstName: $("#firstName").val().trim(),
            lastName :$("#lastName").val().trim(),
            username :$("#username").val().trim(),
            password :$("#password").val().trim(),
            email :$("#email").val().trim()
           };
           
            console.log(newUser);

           $.ajax({
                type:"POST",
                url: "/api/users",
                data: newUser
            }).done(function(data){
                console.log("post succesful");

                window.location = "/user/" + username;

               //  $.get("/api/users/" + username, function(data) {
               //     //actually display profile
               // });
            });
               
                 

               
               //code to display new user profile
               
           });
      
  // }
   //code to display modal with form or open page with form

//})

//code to handle what happens after the user clicks the  sign in button
$("#signInButton").on("click", function(e) {
    e.preventDefault();
    var username = $("#signInInput").val().trim();
    //code to get users info from database
    $.get("/profile" + username, function(data) {
        //get back an html page
        window.location.pathname = data;
    }); //ends ajax function
}); //ends sign in button click function

//code to handle what happens if user clicks on create account
$("#navSignInModal").modal({
    //callback function to run when modal is open
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(navSignInModal) {
        $("#navCreateAcctForm").submit(function(e) {
            e.preventDefault();
            var firstName = $("#navFirstName").val().trim();
            var lastName = $("#navLastName").val().trim();
            var username = $("#navUsername").val().trim();
            var password = $("#navPassword").val().trim();
            var email = $("#navEmail").val().trim();
            var newUser = new User(firstName, lastName, username, password, email);

            $.post("/api/users", newUser, function(data) {
                console.log("post succesful");
                //code to display new user profile
                $.get("/api/users" + username, function(data) {
                    //actually display profile
                })
            })
        })
        $("#navSignInButton").on("click", function(e) {
            e.preventDefault();
            var username = $("#navSignInInput").val().trim();
            //code to get users info from database
            $.get("/profile" + username, function(data) {
                //get back an html page
                window.location.pathname = data;
            }); //ends ajax function
        }); //ends sign in button click function
    }
    //code to display modal with form or open page with form

})


//code to happen if user does a search
//code to grab search terms
// switch (searchParam) {

//     case "wine":
//         var searchInput = $("#wine-search").val().trim();
//         //code to get wine info from database
//         $.get("/api/wines/" + searchInput, function(data) {
//             //code to handle what happens if wine not found
//             if (!data) {
//                 //code to ask user if they want to add wine
//                 //switch to modal
//                 window.prompt("Would you like to add this wine?");
//                 //code redirecting user to add wine page/modal

//             } else {
//                 //comes back as a json object
//                 //code to display result

//             }
//         })
//         break;

//     case "variety":
//         var searchInput = $("#wine-search").val().trim();
//         $.get("/api/variety/" + searchInput, function(data) {
//             if (!data) {
//                 window.prompt("Would you like to add a wine of this varietal?");

//             } else {

//             }
//         })
//         break;

//     case "country":
//         var searchInput = $("#wine-search").val().trim();
//         $.get("/api/country/" + searchInput, function(data) {
//             if (!data) {
//                 window.prompt("Would you like to add a wine from this country?");

//             } else {

//             }
//         })
//         break;


// } //ends switch