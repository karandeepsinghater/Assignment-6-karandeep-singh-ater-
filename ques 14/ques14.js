$(document).ready(function(){

    $('.epoints').each(function(i, n) {
   if($(n).text() > 10) 
      $(n).css('color', 'yellow').css('background-color','red');
});
});
