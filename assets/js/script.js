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

    $('.search').on('click', function(){
        $('.mobile-menu').fadeOut();
        $('.search-panel').fadeToggle();
    });

    $('.user').on('click', function(){
        $('.mobile-menu').fadeOut();
        $('.popup-sign-up').fadeIn();
    });

    $('.registration').on('click', function(){
        $('.popup-sign-up').fadeOut();
        $('.popup-registration').fadeIn();
    });


    $('.privacy_js').on('click', function(){
        $('.privacy-policy').fadeIn();
    });

    $('.close').on('click', function(){
        $('.mobile-menu').fadeOut();
        $('.call-back').fadeOut();
        $('.privacy-policy').fadeOut();
        $('.popup-registration').fadeOut();
        $('.popup-sign-up').fadeOut();
        $('.search-panel').fadeOut();
        $('.packages-popup').fadeOut();
        $('.video-popup').fadeOut();
        $('.video-popup iframe').attr('src', '');
    });

    $('.close-popup').on('click', function(){
        $('.call-back').fadeOut();
        $('.privacy-policy').fadeOut();
        $('.packages-popup').fadeOut();
        $('.video-popup').fadeOut();
        $('.video-popup iframe').attr('src', '');
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