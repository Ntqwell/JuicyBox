$(document).ready(function(){
    $(".hamburger-toggle__toggle").click(function(){
        $(".hamburger-toggle__toggle").toggleClass("hamburger-toggle__toggle--active");
        $(".menu__list").toggleClass("menu__list-open");
    })
});