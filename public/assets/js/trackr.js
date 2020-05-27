$(document).ready(function() {
    $(document).on("submit", "#trackr-form", function(event){
        event.preventDefault();
        console.log("hello")
    });
    function getBgl() {
        var rowsToAdd = [];
        $.get("/api/bglentry/jsmith", function(data) {
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createBglRow(data[i]));
            }
        })
        $.get("/api/bpentry/jsmith", function(data) {
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push()
            }
        })
    }
});