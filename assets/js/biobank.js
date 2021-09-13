$(document).ready(function(){

    if($(window).width() < 1280 ){
        
            $('.cost-items').slick({
                dots: true,
                slidesToShow: 1,
                infinite: false,
                slidesToScroll: 1,
                mobileFirst: true,
                adaptiveHeight: false,
                appendArrows: $('.cost .button-container'),
                appendDots: $('.cost .button-container'),
                nextArrow: '<button class="slick-arrow next"><i class="icon-next"></i></button>',
                prevArrow: '<button class="slick-arrow prev"><i class="icon-prev"></i></button>',
                responsive: [
    
                ]
            })

            var img = $('.cost-items img').width()  
            $('.cost-items img').height(img / 1.73)
        
    }

});

$(window).resize(function(){

    if($(window).width() < 1280 ){
        var img = $('.cost-items img').width()  
        $('.cost-items img').height(img / 1.73)
      }
    

});