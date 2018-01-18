
USE wine_db;

CREATE TABLE user (

id INTEGER AUTO_INCREMENT,
first_name VARCHAR(200) NOT NULL,
last_name VARCHAR(200) NOT NULL,
email VARCHAR (200),
password VARCHAR(200), 
username VARCHAR (200) NOT NULL,
favorite_wines VARCHAR(200) NOT NULL

PRIMARY KEY (id) 


);

INSERT INTO user VALUES (1, "Steven", "Sammon", "stevenesammon@hotmail.com", "password", "stevensammon", "Carlo & Julian")