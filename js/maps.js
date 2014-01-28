// Google Maps JS

function initialize() {

	// Declare mapOptions to be an object
	var mapOptions = {
		center: new google.maps.LatLng(37.7908880,-122.4014350),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};

	// Create a new map feature for the page
	var map = new google.maps.Map(
			document.getElementById("map-canvas"),
			mapOptions
	);

	var contentString = '<div id="content">' + 
		'<div id="siteNotice">' + 
		'</div>' + 
		'<h1 id="firstHeading" class="firstHeading">RocketSpace</h1>' + 
		'<div id="bodyContent">' + 
		'<p><b>RocketSpace</b>, the hub of cool shit happinging now etc etc.' +
		'</p>' +
		'</div>' +
		'</div>';

	// Create an info box when the map icon is clicked
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	// Icon image
	var image = 'css/rocket-u-logo-large.png';

	// The marker feature on hte map
	var marker = new google.maps.Marker({
		position: mapOptions.center,
		animation: google.maps.Animation.DROP,
		icon: image,
		title:"RocketSpace"
	});
	marker.setMap(map); // Sets the marker on the map

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
