$(document).ready(function(){

    $('.internal-slider').slick({
        rows: 2,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    });

    if($(window).width() <= 768 ){

        $('.content article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Читать далее</a>',
            collapsedHeight: 610,
        });

        $('.text article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Читать далее</a>',
            collapsedHeight: 210,
        });

    }

    if($(window).width() >= 1024 ){

        $('.internal-slider').slick('unslick');

    }

});

$(window).resize(function(){

    

});