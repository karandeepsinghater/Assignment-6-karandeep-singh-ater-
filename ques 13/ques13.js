$(document).ready(function()
{
        var highest = null;
        var hi = 0;
       $(".panel").each(function()
       {
         var h = $(this).height();
         
              if(h > hi){
                   hi = h;
                   highest=$(this);
                    }         
      });
        alert('max height is: '+hi); 
         $(highest).css("background-color","red");   
});