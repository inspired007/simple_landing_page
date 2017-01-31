/**
 * Created by inspired on 24.01.17.
 */

$(document).ready(function(){
    $('.prev-img').hover(
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
    );


    $(function() {
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
    });

});




$(document).ready(function() {

     var defaults = {
     containerID: 'toTop', // fading element id
     containerHoverID: 'toTopHover', // fading element hover id
     scrollSpeed: 1200,
     easingType: 'linear'
     };

    $().UItoTop({ easingType: 'easeOutQuart' });



});