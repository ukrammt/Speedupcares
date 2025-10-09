
function init() {
    // 📍 Coordonnées correspondant à FF5P+99J, Médiouna
    // (d'après le code plus Google Maps)
    var myLatlng = new google.maps.LatLng(33.458643, -7.514038);

    // 🗺️ Options de la carte
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "simplified" },
                    { "hue": "#ff0000" }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    { "visibility": "off" } // cache les points d’intérêt
                ]
            }
        ]
    };

    // 🔧 Création de la carte
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // 📍 Ajout du marqueur
    new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: 'images/loc.png', // ton icône personnalisée (par ex: un pin rouge)
        title: 'Speed Up Location - Médiouna'
    });
}

<script src="https://maps.googleapis.com/maps/api/js?key=TA_CLE_API&callback=init" async defer></script>
