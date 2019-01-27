var num = 380;
var widthScreen = 991;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num && $(window).width() > widthScreen) {
        $('.navbar').addClass('navbar_dark');
    }  else {
        $('.navbar').removeClass('navbar_dark');
    }
    if($(window).width() <= widthScreen){
        $('.navbar').addClass('navbar_dark');
    }
   
});