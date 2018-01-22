# The Grape Vine

### Concept

The Grape Vine is an application that lets users build a list of their favorite wines and   search a general dataset of wines for more information. Users can: 

* Search for a wine.
* Add wines to their favorites list.
* Write a review of a wine.
* Build a user profile.
* See a list of top-rated wines.

### Motivation 

The motivation for development was to create one place to get information about specific wines and also save information about personal wine favorites. 

### How to use (demo)


### Design Process

After initial brainstorming, we narrowed down our ideas and landed on the wine app. Our reasoning was based on research of available data, ease of implementation, and usability. We also outlined an overall project plan and documented it in Google Docs. It included our MVP, User Stories, tasks, and a general schedule timeline.

* Initial conception
	* M.V.C. 
	* C.R.U.D.

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

	* Created wireframes for layout views.
	* Created HTML shell for each view.
	* Configured AJAX requests.
	* Finalized site style and layout (colors, backgrounds, fonts, images, etc.)
	* Configured additional client side Javascript
	* We decided to try a new CSS framework based on available component libraries and documentation.

* Project Management

	* Assigned Front End & Back End teams.
	* Used GitHub Issues.
	* Used Google Docs for miscellaneous team notes.
	* Created a development schedule and list of tasks with estimated hours to complete.
	
### Technologies

1. MySQL
2. Sequelize
3. Sequelize CLI
	* Sets up model/migration structure from the terminal.
	* Migrations provide a level of automation and conisistent process flow for setting up and making changes to database structure. 
2. Node/Express
3. Materialize
4. Handlebars
6. Kaggle dataset
7. Adobe XD

### Purpose

This app was created as the second project for the Georgia Tech Coding Bootcamp. The team included Steven, Julie, Ovie, and Shaheena.

### Future Development

1. Complete the search by wine functionality and narrow by country or varietal.
2. Complete functionality to update user's wine reviews or delete wine reviews.
4. Connect user reviews to general wine reviews to create more of a social network app where users can see each others' reviews.

5. User validation using JSON Web Tokens
	* Require username/password; app data reflects the current user that's logged in.
	* Validate username; two users cannot have the same.
6. Include a "If you liked this wine, you might like this one" feature.
