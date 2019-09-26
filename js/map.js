ymaps.ready(function () {
	var addresses = {};
	$.getJSON("js/map_data.json", function(json) {
		addresses = json['addresses'];
		var mapPoints = [];
		addresses.forEach(function(addr){
			var htmlAddress = "<ul class='address' id='"+addr["id"]+"'>";
			htmlAddress += "<li><p><span><strong>М</strong></span>"+addr["metro"]+"</p></li>";
			htmlAddress += "<li><p><span class='mapmarker'></span>"+addr["address"]+"</p></li>";
			htmlAddress += "<li><p><span class='phone'></span>"+addr["phone"]+"</p></li>";
			htmlAddress += "<li><p><span class='clock'></span>"+addr["clock"]+"</p></li>";
			htmlAddress += "<li><p><span>Формат:</span><strong>"+addr["format"]+"</strong></p></li>";
			$("#addresses").append(htmlAddress);
			mapPoints[addr["id"]] = new ymaps.Placemark(addr['coordinates'], {iconContent: addr["id"]}, {
															iconLayout: 'default#image',
															iconImageHref: 'img/map-logo.png',
															iconImageSize: [48, 60],
															iconImageOffset: [-24, -30],
															
														});
		});
		
		var myMap = new ymaps.Map('map', {
				center: [59.930934, 30.361884],
				zoom: 11
			}, {
				searchControlProvider: 'yandex#search'
		});

		
		for (var key in mapPoints) {
			myMap.geoObjects.add(mapPoints[key]);
		};
		

		// events for clicking on marks
		for (key in mapPoints) {
			//alert(mapPoints[key].properties.get("iconContent"));
			mapPoints[key].events.add('click', function (e) { 
				var elemId = e.get('target').properties.get("iconContent");
				$('.address').removeClass('address-selected');
				$('#'+elemId).addClass('address-selected');
			});
		}

		// events for clicking on addresses
		for (key in addresses) {
			var addr = addresses[key];
			$('#'+addr["id"]).click({coords:addr["coordinates"]}, function(e){
				$('.address').removeClass('address-selected');
				$(this).addClass('address-selected');
				
				if (typeof is_mobile !== "undefined" && is_mobile) {
					$('html, body').animate({
					    	scrollTop: $("#map").offset().top
						}, 
						200, 
						function(){ 
							myMap.setCenter(e.data.coords, 15, {duration: 1000})
					});
				} else {
					myMap.setCenter(e.data.coords, 15, {duration: 1000})
				};

			});
		}
	});
});