$(document).ready(function(){

    $('.creature-slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        adaptiveHeight: false,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true
              }
            }
        ]
    });

    $('.reviews-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    });

    if($(window).width() <= 768 ){

        $('.technology-text article').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть <i class="icon-arrow"></i></a>',
            moreLink: '<a href="#" class="show-more">Развернуть <i class="icon-arrow"></i></a>',
            collapsedHeight: 285,
        });

    }

    if($(window).width() >= 1024 ){

        $('.technology-item .item-title').matchHeight({
            byRow: false
        }); 

        $('.reviews-slider .text').matchHeight({
            byRow: false
        }); 

        $('.technology-item p').matchHeight({
            byRow: false
        }); 

    }

});

$(window).resize(function(){

    

});