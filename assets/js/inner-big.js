$(document).ready(function(){

    $('.internal-slider').slick({
        rows: 2,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
    });

    $('.slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
    });

    $('.slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
    });

    if($(window).width() <= 768 ){

        $('.content article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Подробнее</a>',
            collapsedHeight: 305,
        });

        $('.text article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Подробнее</a>',
            collapsedHeight: 277,
        });

        $('.ul-item article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Читать далее</a>',
            collapsedHeight: 170,
        });

    }

    if($(window).width() >= 1024 ){

        $('.internal-slider').slick('unslick');
        $('.slider-items').slick('unslick');
        $('.slider-img').slick('unslick');

    }

});

$(window).resize(function(){

    

});