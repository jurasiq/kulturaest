$(document).ready(function () {
	$("#slider-news").owlCarousel({
		center: true,
		items: 4,
		nav: true,
		dots: false,
		loop: true,
		margin: 36
	});

	$("#slider-info").owlCarousel({
		items: 1,
		dots: true,
		loop: true,
		autoplay: true
	});
});