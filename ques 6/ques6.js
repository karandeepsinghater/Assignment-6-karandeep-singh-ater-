$(document).ready(function() {
    $("#b1").click(function() {
        /* Act on the event */
        $("div").replaceWith($("<p>"+$("div").text()+"</p>"));
    });
    
});