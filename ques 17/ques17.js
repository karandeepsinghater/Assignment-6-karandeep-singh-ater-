images = ['12.jpeg','wall.png','21.jpg','699992.jpg'];


setInterval(forwardImage, 500);


//This function will find the key for the current Image
function currentImageKey() {
    i = jQuery.inArray($('#slideshow').attr('src'), images);
    return i;
}


//This function will move the slideshow forward one
function forwardImage() {
    currentImageKey();
    if (i < images.length - 1) {
        changeImage(i + 1);
    } else {
        changeImage(0);
    }
}


//This function will change to image to whatever the variable i passes to it
function changeImage(i) {
    $('#slideshow').stop().animate({
        opacity: 0,
    }, 200, function() {
        $('#slideshow').attr('src', images[i]);
        $('.holder img').on('load',(function() {
            $('#slideshow').stop().animate({
                opacity: 1,
            }, 200)
        }))
    })
}