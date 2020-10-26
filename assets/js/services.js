$(document).ready(function(){

    $('.services-slider').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
        ]
    });

    $('.packages-slider').slick({
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
        prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1
              }
            }
        ]
    });

    $('.packages-slider p').matchHeight({
        byRow: false
    }); 

    $('.packages-slider h3').matchHeight({
        byRow: false
    }); 

    if($(window).width() >= 1024 ){

        $('.services-slider').slick('unslick');

        $('.services-item .item-title').matchHeight({
            byRow: false
        }); 

        $('.services-item p').matchHeight({
            byRow: true
        }); 

        $('.packages-slider').slick('unslick');

        $('.packages-slider h3').matchHeight({
            byRow: true
        }); 

        $('.packages-slider p').matchHeight({
            byRow: true
        }); 

    }

    $('.packages_js').on('click', function(){
        $('.packages-popup').fadeIn();
    });

    $(".packages-popup .text").mCustomScrollbar();

});

$(window).resize(function(){



});
