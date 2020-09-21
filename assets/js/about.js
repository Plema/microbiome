$(document).ready(function(){

    if($(window).width() <= 768 ){

        $('.about-content .text').readmore({
            speed: 500,
            lessLink: '<a href="#" class="show-more active">Свернуть</a>',
            moreLink: '<a href="#" class="show-more">Читать далее</a>',
            collapsedHeight: 445,
        });

    }

});

$(window).resize(function(){

    

});