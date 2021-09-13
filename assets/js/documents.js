$(document).ready(function(){
    if($(window).width() < 1024 ){
        $('.chapter-items').each(function(){
            $(this).slick({
                dots: true,
                slidesToShow: 1,
                infinite: false,
                slidesToScroll: 1,
                rows: 5,
                mobileFirst: true,
                adaptiveHeight: false,
                appendArrows: $('.steps-wrapper .button-container'),
                appendDots: $('.steps-wrapper .button-container'),
                nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        rows: 3,
                      }
                    },
                ]
            })
        })
    }
})