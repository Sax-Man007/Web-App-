
SWSG = SWSG || {};

var map = null,
    markers = [];

SWSG.maps = {
    init: function () {
        var mapDiv = document.getElementById('swsg-map');

        if (mapDiv != null && window.google != undefined) {
            var initMap = function () {
                map = new google.maps.Map(mapDiv, {
                	center: new google.maps.LatLng(40.4089137, -79.9814881), // HQ
                    zoom: 3,
                    minZoom: 1,
                    mapTypeControl: false,
                    styles: []
                });
            }
            initMap();
            SWSG.maps.placeNewMarkers();

            // Click listener for mobile
            $('.js-hide-map').click(function () {
               if ($('#swsg-map').hasClass('lv-small-down-invisible')) {
                  $('.js-hide-map-text').html('Hide Map');
                  $('#swsg-map').removeClass('lv-small-down-invisible');
                  $('.js-hide-map-icon').removeClass('fa-chevron-down');
                  $('.js-hide-map-icon').addClass('fa-chevron-up');
               } else {
                  $('.js-hide-map-text').html('Show Map');
                  $('#swsg-map').addClass('lv-small-down-invisible');
                  $('.js-hide-map-icon').removeClass('fa-chevron-up');
                  $('.js-hide-map-icon').addClass('fa-chevron-down');
               }
            });
        }
    },
    placeNewMarkers: function () {
        var infoWindow = new google.maps.InfoWindow();

        // Remove all markers initially.
        SWSG.maps.utils.deleteMarkers();

        var bounds = new google.maps.LatLngBounds(), i;

        if (locationsList.length > 0) {
            // Loop through the array of locations and place markers for each one on the map
            for (i = 0; i < locationsList.length; i++) {
                var curLocation = locationsList[i],
                    locationLoc = SWSG.maps.utils.getLatAndLngOfLocation(curLocation);

                if (!isNaN(locationLoc.lat) && !isNaN(locationLoc.lng)) {
                    bounds.extend(new google.maps.LatLng(curLocation.Latitude, curLocation.Longitude));

                    SWSG.maps.utils.addMarker(infoWindow, locationLoc, i, curLocation);
                    SWSG.maps.utils.setBounds(bounds);
                }
            }
        }
    },
    utils: {
        addMarker: function (infoWindow, location, position, curLocation) {

            var markerProps = {
                position: location,
                map: map,
                title: curLocation.DisplayName,
                icon: {
                    path: 'M11 2c-3.9 0-7 3.1-7 7 0 5.3 7 13 7 13 0 0 7-7.7 7-13 0-3.9-3.1-7-7-7Z',
                    scale: 1.6363636363636363636363636364,
                    anchor: new google.maps.Point(11, 22),
                    labelOrigin: new google.maps.Point(11, 10),
                    fillOpacity: 1,
                    fillColor: '#c50072',
                    strokeOpacity: 0
                }
            };

            if( curLocation.District === "Main Office" ){
                markerProps.icon.fillColor = "#7e8602";
            }

            var marker = new google.maps.Marker(markerProps);

            google.maps.event.addListener(marker, 'click', (function (infoWindow, marker, i, curLocation) {
                return function () {
                	var contentString = '<div class="marker-content location-info">' +
                        '<h3 class="h5 small gray">' + curLocation.DisplayName + '</h3>' +
                        '<div class="tight-spacing"><p>' + curLocation.Address + '</p></div>'
                    '</div>';

                    infoWindow.setContent(contentString);
                    infoWindow.open(map, marker);
                }
            })(infoWindow, marker, position, curLocation));

            markers.push(marker);
        },
        // Sets the map on all markers in the array.
        setMapOnAll: function (map) {
            if (markers.length > 0) {
                for (var i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }
        },
        // Removes the markers from the map but keeps them in the array.
        clearMarkers: function () {
            SWSG.maps.utils.setMapOnAll(null);
        },
        // Shows any markers currently in the array.
        showMarkers: function () {
            SWSG.maps.utils.setMapOnAll(map);
        },
        // Deletes all markers in the array by removing references to them.
        deleteMarkers: function () {
            SWSG.maps.utils.clearMarkers();
            markers = [];
        },
        // Get the latitude and longitude of the location in an object format.
        getLatAndLngOfLocation: function (studioObj) {
            var latLngObj = {};
            latLngObj["lat"]= parseFloat(studioObj.Latitude);
            latLngObj["lng"]= parseFloat(studioObj.Longitude);
            return latLngObj;
        },
        // Set bounds correctly on the map
        setBounds: function (bounds) {
            // Don't zoom in too far on only one marker
            if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
                var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() +0.01, bounds.getNorthEast().lng() +0.01);
                var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() -0.01, bounds.getNorthEast().lng() -0.01);
                bounds.extend(extendPoint1);
                bounds.extend(extendPoint2);
            }

            // Automatically center the map to fit all the markers on the screen
            map.fitBounds(bounds);
        }
    }
}
