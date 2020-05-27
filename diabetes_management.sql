DROP DATABASE IF EXISTS diabetes_management;
CREATE DATABASE diabetes_management;

USE diabetes_management;

CREATE TABLE users (
first_name  VARCHAR (45),
last_name  VARCHAR (45),
user_id VARCHAR(30),
PRIMARY KEY (user_id)
);

CREATE TABLE user_meds (
user_id VARCHAR(30),
med_name VARCHAR(30),
dosage VARCHAR(75),
no_of_tablets INTEGER(11),
frequency INTEGER(11)
);

CREATE TABLE medication (
med_id INTEGER(11) AUTO_INCREMENT NOT NULL,
med_name VARCHAR(45),
med_type VARCHAR (45),
dosage VARCHAR(75),
PRIMARY KEY (med_id)
);

CREATE TABLE bgbp_entry (
id INT NOT NULL AUTO_INCREMENT,
user_id VARCHAR (30),
date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
glucose INTEGER(11),
pressure VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE carb_entry (
user_id VARCHAR (30),
date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
carb_amount INTEGER(11)
);

