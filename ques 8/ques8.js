$(document).ready(function() {
    $("button").click(function() {
$("div").append("<p>click me</p>")
$("div").on("click",function(){
  $("div").append("<p>click me</p>") });
});
});