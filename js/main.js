$(document).ready(function () {

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('menu-btn_active');
		$('.nav').toggleClass('nav_active');
		$('.navbar').toggleClass('navbar_active');
		// change logo size on menu click
		if ($(this).hasClass('menu-btn_active')) {
			show_big_logo();
		} else if ($(document).scrollTop() > 0) {
			show_small_logo();
		}
	});

	$('#slider-header').slideshow({
		randomize: false, // Randomize the play order of the slides.
		slideDuration: 6000, // Duration of each induvidual slide.
		fadeDuration: 1000, // Duration of the fading transition. Should be shorter than slideDuration.
		animate: true, // Turn css animations on or off.
		pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
		enableLog: false // Enable log messages to the console. Useful for debugging.
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
	$('.main-logo img').addClass('small-logo-width');
}

function show_big_logo() {
	$('.main-logo img').removeClass('small-logo-width');
}

function check_scroll() {
	if ($(document).scrollTop() > 0 && !$('.menu-btn.menu-btn_active').length) {
		show_small_logo();
	} else {
		show_big_logo();
	}
}


$(window).on("scroll touchmove", function () {
	check_scroll();
});


$(window).on('load', function () {
	check_scroll();
	$('.backdrop').delay(1000).fadeOut('slow');
});