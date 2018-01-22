# The Grape Vine

### Concept

The Grape Vine is an application that lets users build a list of their favorite wines. Users can: 

* Search for a wine.
* Add wines to their favorites list.
* Write a review of a wine.
* Build a user profile.
* See a list of top-rated wines.

### Motivation 

The Grape Vine allows for users to keep track of wines they like, discover new wines, and could allow for social interation based on common wine interests.

### Design Process

* Initial conception
	* M.V.C. 
	* C.R.U.D.
	* Creation of user stories.

* MVP Concept
	* Index
		* Search box for wines
		* User creation
	* Profile
		* Display user profile with favorite wines, form to read, add, delete, and update wines.
	* Reviews
		* Display top wine reviews or narrow by type, country, year etc.

* Back End
	* Found Dataset 
	* Created Models/Migration
	* Routing
	* Created Associations (Many to Many, Join Table)

* Front End

	* Created layout views
	* Created HTML shell for each view
	* Configured AJAX requests
	* Finalized site style and layout (colors, backgrounds, fonts, images, etc.)
	* Configured additional client side Javascript

* Project Management

	* Assigned into Front End & Back End teams.
	* Used GitHub Issues.
	* Used Google Docs for miscellaneous team notes.
	* Created a development schedule and list of tasks with estimated hours to complete.
	
### Technologies

1. MySQL
2. Sequelize
	* ORM 
3. Sequelize CLI
	* Sets up model/migration structure from the terminal.
	* Migrations provide a level of automation and conisistent process flow for setting up and make changes to database structure. 
2. Node/Express
3. Materialize
	* A CSS Framework 
4. Handlebars
	* Templating engine
6. Kaggle dataset

### Future Development

1. User validation using JSON Web Tokens
	* Require username/password; app data reflects the current user that's logged in.
	* Validate username; two users cannot have the same.
2. Extend the app to be more social; users can interact with others profiles.
3. Include a "If you liked this wine, you might like this one" feature.

### Purpose

This app was created as the second project for the Georgia Tech Coding Bootcamp. The team included Steven, Julie, Ovie, and Shaheena.