$(document).ready(function() {
    $("button").click(function() {
        /* Act on the event */
        $("#el").append("click me to add text <br>")
    });
    $("#el").click(function() {
        /* Act on the event */
        $("#el").append("click me to add text <br>")
    });
});