$(document).ready(function () {

	$('.menu-btn').on('click', function (e) {
		e.preventDefault;
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
		autoplay: true
	});
});