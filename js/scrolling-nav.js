//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

 
$('nav').hide();
$('section:not(#intro)').hide();
$('.subtitle').hide()
$('.title1').hide()
$('.title2').hide()
$('.title3').hide()
$('.title4').hide()
$('.title5').hide()
$('.title1').delay(500).fadeIn(300)
$('.title2').delay(900).fadeIn(300)
$('.title3').delay(1300).fadeIn(300)
$('.title4').delay(1700).fadeIn(300)
$('.title5').delay(2100).fadeIn(300)
$('.subtitle').delay(2500).fadeIn(600)
$('nav').delay(2500).fadeIn(600);
$('section:not(#intro)').delay(2500).fadeIn(600);