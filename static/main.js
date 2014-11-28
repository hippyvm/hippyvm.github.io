d3.json('data.json', function(data) {

	nv.addGraph(function() {
		var chart = nv.models.multiBarChart()
			.x(function(d) { return d.label })
			.y(function(d) { return d.value })
			.margin({top: 30, right: 20, bottom: 50, left: 100})
			.tooltips(true)
			.showControls(false);

		chart.yAxis.tickFormat(d3.format(',.2f'));

		d3.select('#performance svg').datum(data).call(chart);

		return chart;
	});

});

$(function() {

	var mapOptions = {
		zoom: 5,
		center: new google.maps.LatLng(-33.924869, 18.424055),
		scrollwheel: false,
		draggable: false,
		overviewMapControl: false,
		mapTypeControl: false,
		zoomControl: false,
		noClear: true,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};

	var map = new google.maps.Map(
		document.getElementById('map'),
		mapOptions
	);

	$('#peoples-slider').on('slid.bs.carousel', function () {
		var $active = $(this).find('.item.active');

		var lat = $active.attr('data-lat');
		var lng = $active.attr('data-lng');
		var latLng = new google.maps.LatLng(parseFloat(lat), parseFloat(lng));

		map.panTo(latLng);
	})
});
