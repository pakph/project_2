$(document).ready(function() {
    $("#trackr-form",).on("submit", function(event){
        event.preventDefault();
        var newInfo = {
            user_id: "jsmith",
            glucose: $("#blood_glucose").val(),
            pressure: $("#blood_pressure").val(),
            date_time: new Date(Date.now())
        };

        $.ajax("/api/Trackr/:user_id", {
            type: "POST",
            data: newInfo
        }).then(
            function() {
                console.log("Added new data");
                location.reload();
            }
        );
    });
    
});