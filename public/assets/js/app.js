$(document).ready(function() {
    // need to pull up the modal when clicking on it
    $('.modal').modal();

    // for dropdown button in medications page
    $('.dropdown-trigger').dropdown();

    // function for the search input on the carb-trackr page

    // api key
    var key = "https://platform.fatsecret.com/js?key=d8db07bcdf444a4e829b355e25117d57&auto_nav=false"

    function doLoad() {
        fatsecret.setContainer("my_container");
        fatsecret.setCanvas("foods.search");
    };
   
});


    


