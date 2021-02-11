var html = '<tr><td><input type="text" name="name"></td><td><button class="remove">-</button></td></tr>';
 
$(function() {
    $('tbody').sortable();
 
    $('#addRow').click(function(){
        $('tbody').append(html);
    });
 
    $(document).on('click', '.remove', function() {
        $(this).parents('tr').remove();
    });
 
   
});