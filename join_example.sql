SELECT first_name, last_name, med_name, no_of_tablets, frequency
FROM users LEFT JOIN user_meds ON users.user_id = user_meds.user_id
WHERE users.user_id = "jsmith"