$(document).ready(function()
{
        
$('.panel').on('click', function () { alert('You clicked on the panel element.'); }).children().on('click', function (e) {
    e.stopPropagation();
    
});
});