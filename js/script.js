var map = L.map('map').setView([45, -93.2], 11);

		L.control.locate({
                      strings: {
                                 title: "Zoom to your current location"
                               }
               ,locateOptions: {
                                 maxZoom: 16
                               }
                     }).addTo(map);

//var baselayer = new L.StamenTileLayer("toner-lite");
var baselayer = new L.StamenTileLayer("terrain");
baselayer.addTo(map);


var beerPin = L.MakiMarkers.icon({
    icon: "beer",
    color: "#23344c",
    size: "m"
});

var pendingPin = L.MakiMarkers.icon({
    icon: "beer",
    color: "#939393",
    size: "m"
});

var tapLayer = new L.GeoJSON.AJAX("js/things.geojson",{
		    pointToLayer: function (feature, latlng) {
		    	
				 var html = '';
               if (feature.properties.web) {
                      html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
                                           } 
               else {
                      html += '<h3>' + feature.properties.title + '</h3>';
                    }
               if (feature.properties.address) {
                      html += '<p>'+ feature.properties.address + '</p>';
                                               }
               if (feature.properties.expected) {
                      html += '<p> Expected '+ feature.properties.expected + '</p>';
                                               }
      html += '<div class="put"></div>';
      var popup = new L.popup({closeButton:false}).setContent(html);

      var marker = new L.marker(latlng);
      if (feature.properties.status === 'open') {
          marker.setIcon(beerPin); 
         }
      else {
          marker.setIcon(pendingPin); 
         }
      //marker.setIcon(beerPin);          
		  marker.bindPopup(popup);
	   
		  return marker;		        
		    }
		});

tapLayer.addTo(map);

