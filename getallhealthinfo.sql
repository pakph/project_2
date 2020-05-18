SELECT bgl_entry.glucose, bp_entry.systolic, bp_entry.diastolic, carb_entry.carb_amount
FROM bgl_entry
INNER JOIN bp_entry ON bgl_entry.user_id = bp_entry.user_id
INNER JOIN carb_entry ON bgl_entry.user_id = carb_entry.user_id