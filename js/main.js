$(document).ready(function () {

	$('.menu-btn').on('click', function () {
		$(this).toggleClass('menu-btn_active');
		$('.nav').toggleClass('nav_active');
		if ($(document).scrollTop() == 0) {
			$('.navbar').toggleClass('navbar_active');
		}

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

	// открыть по кнопке
	$('.message').click(function () {
		$('.overlay').fadeIn();
		$('.overlay').addClass('disabled');
	});

	// закрыть на крестик
	$('.close-popup').click(function () {
		$('.overlay').fadeOut();
	});

	// закрыть по клику вне окна
	$(document).mouseup(function (e) {
		var popup = $('.popup');
		if (e.target != popup[0] && popup.has(e.target).length === 0) {
			$('.overlay').fadeOut();
		}
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
		$('.navbar').addClass('navbar_active');
	} else {
		show_big_logo();
		if (!$('.menu-btn.menu-btn_active').length) $('.navbar').removeClass('navbar_active');
	}
}


$(window).on("scroll touchmove", function () {
	check_scroll();
});


$(window).on('load', function () {
	check_scroll();
	$('.backdrop').delay(1000).fadeOut('slow');
});

'use strict';

;
(function ($, window, document, undefined) {
	$('.inputfile').each(function () {
		var $input = $(this),
			$label = $input.next('label'),
			labelVal = $label.html();

		$input.on('change', function (e) {
			var fileName = '';

			if (this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else if (e.target.value)
				fileName = e.target.value.split('\\').pop();

			if (fileName)
				$label.find('span').html(fileName);
			else
				$label.html(labelVal);
		});

		// Firefox bug fix
		$input
			.on('focus', function () {
				$input.addClass('has-focus');
			})
			.on('blur', function () {
				$input.removeClass('has-focus');
			});
	});
})(jQuery, window, document);