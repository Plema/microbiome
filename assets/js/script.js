$(document).ready(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

    $('body').css({
        'padding-bottom': $('footer').height(),
    });

    $('header ul li ul').parent().addClass('drop');

});

$(window).resize(function(){

    $('body').css({
        'padding-top': $('header').height(),
    });

    $('body').css({
        'padding-bottom': $('footer').height(),
    });

});