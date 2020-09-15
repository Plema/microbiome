$(document).ready(function(){

    $('.cooperate-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $('.news-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                dots: false,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                dots: true,
                slidesToShow: 1
              }
            }
        ]
    });


    $('.cooperate-item .img').matchHeight({
        byRow: false
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

        $('.technology-item p').matchHeight({
            byRow: false
        }); 

    }

});

$(window).resize(function(){

    

});