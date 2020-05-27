$(document).ready(function() {
    $(document).on("submit", "#trackr-form", function(event){
        event.preventDefault();
        console.log("hello")
    });
});