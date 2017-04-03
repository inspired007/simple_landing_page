
$.fn.customOverlay = function(){
    $(this).hover(
        function(){
            $(this).closest('.prev-img').find('.overlay').slideToggle();
            $(this).closest('.prev-img').find('.theme').removeClass('hidden');
            $(this).closest('.prev-img').find('.img-overlay').slideToggle('slow','swing');

        },
        function(){
            $(this).closest('.prev-img').find('.overlay').slideToggle();
            $(this).closest('.prev-img').find('.theme').addClass('hidden');
            $(this).closest('.prev-img').find('.img-overlay').slideToggle('slow','swing');
        }
    );}





$.fn.smoothScroll =  function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}


$.fn.UItoTop = function(options) {

    var defaults = {
            text: '',
            min: 200,
            inDelay:600,
            outDelay:400,
            containerID: 'toTop',
            containerHoverID: 'toTopHover',
            scrollSpeed: 1200,
            easingType: 'linear'
        },
        settings = $.extend(defaults, options),
        containerIDhash = '#' + settings.containerID,
        containerHoverIDHash = '#'+settings.containerHoverID;

    $('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
    $(containerIDhash).hide().on('click.UItoTop',function(){
        $('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
        $('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
        return false;
    })
        .prepend('<span id="'+settings.containerHoverID+'"></span>')
        .hover(function() {
            $(containerHoverIDHash, this).stop().animate({
                'opacity': 1
            }, 600, 'linear');
        }, function() {
            $(containerHoverIDHash, this).stop().animate({
                'opacity': 0
            }, 700, 'linear');
        });

    $(window).scroll(function() {
        var sd = $(window).scrollTop();
        if(typeof document.body.style.maxHeight === "undefined") {
            $(containerIDhash).css({
                'position': 'absolute',
                'top': sd + $(window).height() - 50
            });
        }
        if ( sd > settings.min )
            $(containerIDhash).fadeIn(settings.inDelay);
        else
            $(containerIDhash).fadeOut(settings.Outdelay);
    });


};

$(document).ready(function(){
    $('.prev-img').customOverlay();
    $().smoothScroll();

    var defaults = {
        containerID: 'toTop', // fading element id
        containerHoverID: 'toTopHover', // fading element hover id
        scrollSpeed: 120000,
        easingType: 'linear'
    };

    //$().UItoTop({ easingType: 'easeOutQuart' });
} );


