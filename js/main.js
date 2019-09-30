
$(document).ready(function () {
	if (typeof is_mobile !== "undefined" && is_mobile) {
		$('body').addClass('mobile');
	}

	$('.menu-btn').on('click', function () {
		
		if (typeof is_mobile !== "undefined" && is_mobile) {
			$('body').addClass('scroll-hidden')
			$('body > *:not(header):not(.overlay)').addClass('blur')
			$('body .navbar').addClass('blur')
			$('.mobile-nav').fadeIn();
		} else {
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
		}
	});

	if ($('#slider-header').length) {
		$('#slider-header').slideshow({
			randomize: false, // Randomize the play order of the slides.
			slideDuration: 6000, // Duration of each individual slide.
			fadeDuration: 1000, // Duration of the fading transition. Should be shorter than slideDuration.
			animate: true, // Turn css animations on or off.
			pauseOnTabBlur: true, // Pause the slideshow when the tab is out of focus. This prevents glitches with setTimeout().
			enableLog: false // Enable log messages to the console. Useful for debugging.
		});
	}

	if ($('#slider-news').length) {
		$("#slider-news").owlCarousel({
			center: true,
			dots: false,
			loop: true,
			margin: 36,
			navText: ['<i class="far fa-arrow-alt-circle-left"></i>', '<i class="far fa-arrow-alt-circle-right"></i>'],
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				992: {
					items: 4,
					nav: true,
				},
			}
		});
	}

	if ($('#slider-info').length) {
		$("#slider-info").owlCarousel({
			items: 1,
			dots: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			animateOut: 'fadeOut',
			autoplayHoverPause: true
		});
	}

	if ($('#slider-info-m').length) {
		$("#slider-info-m").owlCarousel({
			items: 1,
			dots: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			animateOut: 'fadeOut',
			autoplayHoverPause: true
		});
	}

	if ($('#slider-vacancies').length) {
		$("#slider-vacancies").owlCarousel({
			items: 1,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			animateOut: 'fadeOut',
			autoplayHoverPause: true
		});
	}

	if ($('#slider-vacancies-m').length) {
		$("#slider-vacancies-m").owlCarousel({
			items: 1,
			dots: false,
			loop: true,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
			animateOut: 'fadeOut',
			autoplayHoverPause: true
		});
	}

	// открыть форму обратной связи
	$('.message').click(function () {
		$('#contactform').fadeIn();
		$('#contactform').addClass('disabled');
		
		$('body').addClass('scroll-hidden')
		$('body > *:not(.overlay):not(header)').addClass('blur')
	});

	// открыть анкету вакансии
	$('.vacancy-form').click(function () {
		$('#vacancyform').fadeIn();
		$('#vacancyform').addClass('disabled');

		$('body').addClass('scroll-hidden')
		$('body > *:not(.overlay):not(header)').addClass('blur')
	});

	// закрыть на крестик
	$('.close-popup').click(function () {
		$('.overlay').fadeOut();
		$('body').removeClass('scroll-hidden');
		if (!(typeof is_mobile !== "undefined" && is_mobile && $('.mobile-nav').is(":visible"))) $('.blur').removeClass('blur');
	});

	// закрыть на крестик мобильное меню
	$('.mobile-nav .close-popup').click(function () {
		$('body').removeClass('scroll-hidden')
		$('.blur').removeClass('blur')

		$('.mobile-nav').fadeOut();
		$('.menu-btn').show();
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
	$('.main-logo').addClass('small-logo-width');
}

function show_big_logo() {
	$('.main-logo').removeClass('small-logo-width');
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

	$('.inputfile').on('change', function (e) {
		var $input = $(this),
			$label = $input.next('label'),
			labelVal = $label.html(),
			$labelName = $input.prev('div.file').find('span');
		if (this.files && this.files.length > 1)
			fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		else if (e.target.value)
			fileName = e.target.value.split('\\').pop();

		if (fileName)
			$labelName.html(fileName);
		else
			$labelName.html(labelVal);
	})
		

	// Firefox bug fix
	$('.inputfile')
		.on('focus', function () {
			$(this).addClass('has-focus');
		})
		.on('blur', function () {
			$(this).removeClass('has-focus');
		});

})(jQuery, window, document);