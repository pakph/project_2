USE diabetes_management;

INSERT INTO user_id (first_name, last_name, user_id)
VALUES ("John", "Smith", "jsmith");

INSERT INTO user_id (first_name, last_name, user_id)
VALUES ("Jane", "Doe", "jdoe");

INSERT INTO user_meds (user_id, med_name, dosage, no_of_tablets, frequency)
VALUES ("jsmith", "Actos", "15 mg", 1, 1);

INSERT INTO user_meds (user_id, med_name, dosage, no_of_tablets, frequency)
VALUES ("jsmith", "Glipizide", "10 mg", 1, 1);

INSERT INTO carb_entry (user_id, carb_amount)
VALUES ("jsmith", 30);

INSERT INTO bgl_entry (user_id, glucose)
VALUES ("jsmith", 116);

INSERT INTO bp_entry (user_id, systolic, diastolic)
VALUES ("jsmith", 130, 50);
