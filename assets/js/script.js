$(document).ready(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

    $('body').css({
        'padding-bottom': $('footer').height(),
    });

    $('header ul li ul').parent().addClass('drop');

    $('.open-menu').on('click', function(){
        $('.mobile-menu').fadeIn();
    });

    $('.call_js').on('click', function(){
        $('.call-back').fadeIn();
    });

    $('.close').on('click', function(){
        $('.mobile-menu').fadeOut();
        $('.call-back').fadeOut();
    });

    $('.close-popup').on('click', function(){
        $('.call-back').fadeOut();
    });

});

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

    $('body').css({
        'padding-bottom': $('footer').height(),
    });

});