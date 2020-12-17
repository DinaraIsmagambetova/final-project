function initMap(){

        
    var location = { lat: 51.23400135721058, lng:51.39393642434754};
    var location2 = { lat: 51.24992590471687, lng: 51.35052059718316};
    var location3 = { lat: 51.22367864962428, lng: 51.38712003088445};
    var location4 = { lat: 51.2299753504857, lng: 51.439692195123655};

    

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, 
        center: location,
        styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#242f3e" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],

    });
    
    
    var icon = {
        url: "https://musica36.ru/assets/web/v1/logo-77059bf60fe4a22a1915b5e8f9c3623ac43aea2d64d1a969e587986d941ecf87.png" ,
        
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0),
        
    };

    var icon2 = {
        url: "https://musica36.ru/assets/web/v1/logo-77059bf60fe4a22a1915b5e8f9c3623ac43aea2d64d1a969e587986d941ecf87.png",
        
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    var icon3 = {
        url: "https://musica36.ru/assets/web/v1/logo-77059bf60fe4a22a1915b5e8f9c3623ac43aea2d64d1a969e587986d941ecf87.png",
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    var marker1 = new google.maps.Marker({
        position: location2,
        map: map,
        icon: icon
    });
    var marker2 = new google.maps.Marker({
        position: location3,
        map: map,
        icon: icon2
    });
    var marker3 = new google.maps.Marker({
        position: location4,
        map: map,
        icon: icon3
    });
}


