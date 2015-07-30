var globaldata;
var map;
var markers = [];
var infowindow;

function createInfoWindow( marker, data ){

	var contentString = '<div id="content">'+
	    '<h2 id="firstHeading" class="firstHeading">' + data.name + '</h2>'+
	    '<div id="bodyContent">'+
	    '<p><b>' + data.office + '</b></p>'+
	    '<p>Nationality: ' + data.country + '</p>' +
	    '<p>Birthday: ' + data.dob + '</p>' +
	    '<p><a target="_blank" href="http://en.wikipedia.org/wiki/' + data.name.replace(/ /g,"_") + '">Biography</a></p>'+  
	    '<p><a target="_blank" href="https://twitter.com/search?q=' + encodeURIComponent( data.name ) + '">What people are saying</a></p>'+
	    '</div>'+
	    '</div>';
	    
	marker.infowindow = new google.maps.InfoWindow({
	    content: contentString,
	    boxStyle: { 
			  background: 'blue',
			  opacity: 0.75,
			  width: "280px"
		}
	});
	
	marker.index = markers.length;
	
	google.maps.event.addListener( marker, 'click', function() {
		for( var m in markers ){ markers[m].infowindow.close();}	
		this.infowindow.open( map, this );
	});
}

function showInfo(data) {
	
	/* scheme 1 */
	
	var water = "#a0c4d5";
	var landscape = "#ffffff";
	var maplabel = "#a3a8ab";
	
	/* scheme 2 */
	
	var water = "#30acd2";
	var landscape = "#95d1e1";
	var maplabel = "#ffffff";

	var styles = [
	  { "featureType": "landscape", "stylers": [ { "visibility": "simplified" } ] },
	  { "featureType": "water", "stylers": [ { "visibility": "simplified" }, { "color": water } ] },
	  { "featureType": "landscape", "stylers": [ { "color": landscape } ] },
	  { "featureType": "road", "stylers": [ { "visibility": "off" } ] },
	  { "featureType": "poi", "stylers": [ { "visibility": "off" } ] },
	  { "featureType": "administrative.country", "elementType": "geometry.stroke", "stylers": [ { "color": maplabel }, { "weight": 0.5 } ] },
	  { "featureType": "administrative", "elementType": "labels", "stylers": [ { "color": maplabel }, { "weight": 0.1 } ] },
	  { "featureType": "administrative.province", "stylers": [ { "visibility": "off" } ] }
	];


    var mapOptions = {
		mapTypeControlOptions: { mapTypeIds: [ 'Styled'] },
		center: new google.maps.LatLng( 44.40565, 8.946256),
		zoom: 3,
		mapTypeId: 'Styled'
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	 var styledMapType = new google.maps.StyledMapType(styles, { name: 'Cardinals Of The 2013 Conclave' });
   	 map.mapTypes.set('Styled', styledMapType);  
	
	for (var element= 0; element<data.conclave.elements.length; element++) {
			
		var cardinal = data.conclave.elements[element];
	
		var lat= cardinal.latitude;
		
		var longitude= cardinal.longitude;
	
		var position = new google.maps.LatLng ( lat, longitude );
		
		var cardinalRed = '#CC2233';
		
		var marker = new google.maps.Marker({
		  position: position,
		  icon: {
		    path: google.maps.SymbolPath.CIRCLE,
		    fillOpacity: 0.6,
		    fillColor: cardinalRed,
		    strokeOpacity: 0.7,
		    strokeColor: cardinalRed,
		    strokeWeight: 1.5, 
		    scale: 6 //pixels
		  },
		  map:map
		});
		
		createInfoWindow( marker, cardinal ); 

		markers.push( marker );	     
	}
}

window.onload = function() {



	var spreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AhLgoEUzhCg_dEh5S0o4eUdxd0RQTE50ekI0VGFPb1E&output=html';
   	Tabletop.init({ key: spreadsheet, callback: showInfo });
};