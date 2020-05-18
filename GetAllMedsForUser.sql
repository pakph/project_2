SELECT med_entry.med_name, med_entry.dosage, user_meds.frequency
FROM med_entry
INNER JOIN user_meds ON med_entry.user_id = user_meds.user_id 
AND med_entry.med_id = user_meds.med_id