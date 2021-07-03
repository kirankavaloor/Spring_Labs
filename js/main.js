$(document).ready(function(){

    //Nav Bar
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })

    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    // fixed nav bar
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
            
        }else{
            $(".header").removeClass("fixed");
            
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".headertopmobile").addClass("fixed1");
        }else{
            $(".headertopmobile").removeClass("fixed1");
        }
    })


})

$.scrollIt({
    topOffset: -50
});