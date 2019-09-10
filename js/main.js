$(document).ready(function () {

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('menu-btn_active');
		$('.nav').toggleClass('nav_active');
		$('.navbar').toggleClass('navbar_active');
	});

	$("#slider-news").owlCarousel({
		center: true,
		items: 4,
		nav: true,
		dots: false,
		loop: true,
		margin: 36,
		navText: ['<i class="far fa-arrow-alt-circle-left"></i>', '<i class="far fa-arrow-alt-circle-right"></i>']
	});

	$("#slider-info").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true,
		autoplayTimeout: 8000,
		smartSpeed: 2000,
		animateOut: 'fadeOut'
	});

	$('.arrow-up-icon').click(function () {
		$('html, body').stop().animate({
			scrollTop: 0
		}, 'slow', 'swing');
	});

});


// change logo after scroll
function check_scroll() {
	if ($(document).scrollTop() > 0) 
	{
		$('.main-logo img').attr('src', 'img/small-logo.png');
		$('.main-logo img').addClass('small-logo-width');
    } else {
    	$('.main-logo img').attr('src', 'img/main-logo.png');
    	$('.main-logo img').removeClass('small-logo-width');
    }
}


$(window).on("scroll touchmove", function() 
{
	check_scroll();  
});


$(window).on('load', function () {
	check_scroll();
	$('.preloader').delay(1000).fadeOut('slow');
});


