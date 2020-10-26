$(document).ready(function(){

    jcf.replaceAll();

    $(".privacy-policy .text").mCustomScrollbar();

    if($(window).width() >= 768 ){

        $('.contacts-content li').matchHeight({
            byRow: false
        }); 

    }

});

