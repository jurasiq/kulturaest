$(document).ready(function () {

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('menu-btn_active');
		$('.nav').toggleClass('nav_active');
		$('.navbar').toggleClass('navbar_active');
		// change logo size on menu click
		if ($(this).hasClass('menu-btn_active')) { show_big_logo(); } 
		else if ($(document).scrollTop() > 0) { show_small_logo(); }
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
function show_small_logo() {
	$('.main-logo img').attr('src', 'img/small-logo.png');
	$('.main-logo img').addClass('small-logo-width');
}

function show_big_logo() {
	$('.main-logo img').attr('src', 'img/main-logo.png');
	$('.main-logo img').removeClass('small-logo-width');
}

function check_scroll() {
	if ($(document).scrollTop() > 0) { show_small_logo(); } 
	else { show_big_logo(); }
}


$(window).on("scroll touchmove", function() 
{
	check_scroll();  
});


$(window).on('load', function () {
	check_scroll();
	$('.preloader').delay(1000).fadeOut('slow');
});


