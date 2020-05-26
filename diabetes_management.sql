DROP DATABASE IF EXISTS diabetes_management;
CREATE DATABASE diabetes_management;

USE diabetes_management;

CREATE TABLE user_id (
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

CREATE TABLE bgl_entry (
user_id VARCHAR (30),
date_time DATETIME NOT NULL,
glucose INTEGER(11)
);

CREATE TABLE bp_entry (
user_id VARCHAR (30),
date_time DATETIME NOT NULL,
systolic INTEGER(11),
diastolic INTEGER(11)
);

CREATE TABLE carb_entry (
user_id VARCHAR (30),
date_time DATETIME NOT NULL,
carb_amount INTEGER(11)
);

SELECT * FROM user_id user_id RIGHT JOIN bgl_entry;
SELECT * FROM user_id user_id RIGHT JOIN bp_entry;
SELECT * FROM user_id user_id RIGHT JOIN carb_entry;
SELECT * FROM user_id user_id RIGHT JOIN user_meds;