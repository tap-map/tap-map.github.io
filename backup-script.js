var map = L.map('map').setView([45, -93.2], 11);

function styleIt(feature){
	console.log(feature.properties.marker-symbol);
    switch (feature.properties.marker-symbol) {
            case 'beer': return {icon: beerIcon};
        }}

function popUp(feature,layer){
             var html = '';
        if (feature.properties.web) {
            html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
      } else {
            html += '<h3>' + feature.properties.title + '</h3>';
      }
        if (feature.properties.address) {
            html += '<p>'+ feature.properties.address + '</p>';
      }
      html += '<div class="put"></div>';
      layer.bindPopup(html);
     }


var tap_layer = new L.GeoJSON.AJAX("js/things.geojson",{onEachFeature:popUp});

		L.control.locate().addTo(map);

		L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
				'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
				'Imagery © <a href="http://mapbox.com">Mapbox</a>',
			id: 'examples.map-i875mjb7'
		}).addTo(map);

var geojson_layer_options = {
        pointToLayer: L.marker.style,
        onEachFeature: function (feature, layer) {
             var html = '';
        if (feature.properties.web) {
            html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
      } else {
            html += '<h3>' + feature.properties.title + '</h3>';
      }
        if (feature.properties.address) {
            html += '<p>'+ feature.properties.address + '</p>';
      }
      html += '<div class="put"></div>';
      layer.bindPopup(html);
      }
      };

var geojson_layer = new L.GeoJSON(null, geojson_layer_options);
geojson_layer.addTo(map);
		


		//function onLocationFound(e) {
		//	var radius = e.accuracy / 2;

	//		L.marker(e.latlng).addTo(map)
	//			.bindPopup("You are within " + radius + " meters from this point").openPopup();

		//	L.circle(e.latlng, radius).addTo(map);
	//	}

	//	function onLocationError(e) {
	//		alert(e.message);
		//}

	//	map.on('locationfound', onLocationFound);
	//	map.on('locationerror', onLocationError);

	//	map.locate({setView: true, maxZoom: 16});
