# The Grape Vine

### Concept

The Grape Vine is an application that lets users build a list of their favorite wines. Users can: 

* Search for a wine.
* Add wines to their favorites list.
* Write a review of a wine.
* Build a user profile.

### Motivation 

The Grape Vine allows for users to keep track of wines they like, discover new wines, and could allow for social interation based on common wine interests.

### Design Process

* Initial concept
	* M.V.C. 
	* C.R.U.D.

* Back End
	* Dataset 
	* Models/Migration
	* Routing
	* Associations (Many to Many, Join Table)

* Front End

	* Create layout views
	* Create HTML shell for each view
	* Configure AJAX requests
	* Finalize site style and layout (colors, backgrounds, fonts, images, etc.)
	* Configure additional client side Javascript

* Project Management
	* GitHub Issues
	* Google Docs

### Technologies

1. MySQL
2. Sequelize
2. Node/Express
3. Materialize 
4. Handlebars
5. Migrations with Sequelize CLI
6. Kaggle dataset

### Future Development

1. User validation using JSON Web Tokens
	* Requires username/password; app data reflects the current user that's logged in.
	* Validate username; two users cannot have the same.
2. Extend the app to be more social; users can interact with others profiles.
3. Include a "If you liked this wine, you might like this" feature.

### Purpose

This app was created as the second project for the Georgia Tech Coding Bootcamp.