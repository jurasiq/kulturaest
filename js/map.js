ymaps.ready(function () {
	var addresses = {};
	$.getJSON("js/map_data.json", function(json) {
		addresses = json['addresses'];
		var mapPoints = [];
		var pointCollection = new ymaps.GeoObjectCollection(null, {});
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
															iconImageOffset: [-24, -60],
															
														});
			pointCollection.add(mapPoints[addr["id"]]);
		});
		
		var myMap = new ymaps.Map('map', {
				center: [59.930934, 30.361884],
				zoom: 11
			}, {
				searchControlProvider: 'yandex#search'
		});
		
		

		if (typeof is_mobile !== "undefined" && is_mobile) {
			myMap.behaviors.disable('drag');
		}
		
		myMap.geoObjects.add(pointCollection);

		myMap.setBounds(pointCollection.getBounds(),{zoomMargin:50});

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
					myMap.setCenter(e.data.coords, 15, {duration: 0}).then(function(){
						$('html, body').animate({scrollTop: $("#map").offset().top},400) 
					})
				} else {
					myMap.setCenter(e.data.coords, 15, {duration: 1000})
				};

			});
		}
	});
});