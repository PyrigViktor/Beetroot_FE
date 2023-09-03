$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        speed: 800,
        vertical: true,
        rows: 1,
        slidePerRow: 1,
        slidesToShow: 1
    });

});


$(document).ready(function () {
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        speed: 800,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});





(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({
    key: "AIzaSyAsVRGU2Fb3BpfGKmElpMfxacuYUn-2ZSA",
    // Add other bootstrap parameters as needed, using camel case.
    // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
});


// let map;

// async function initMap() {
//     const { Map } = await google.maps.importLibrary("maps");

//     map = new Map(document.getElementById("map"), {
//         center: { lat: 40.673576, lng: -73.910144 },
//         zoom: 14.5,
//     });
// }

// initMap();


// let map;

// async function initMap() {
//     // The location of Uluru
//     const position = { lat: 40.673576, lng: -73.910144 };
//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//     // The map, centered at Uluru
//     map = new Map(document.getElementById("map"), {
//         zoom: 15,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//     });

//     // The marker, positioned at Uluru
//     const marker = new AdvancedMarkerView({
//         map: map,
//         position: position,
//         title: "Uluru",
//     });
// }

// initMap();


// let map;

// async function initMap() {
//     // The location of Uluru
//     let position = { lat: 40.673576, lng: -73.910144 };
//     // Request needed libraries.
//     //@ts-ignore
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//     // The map, centered at Uluru
//     map = new Map(document.getElementById("map"), {
//         zoom: 14,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//     });

//     // The marker, positioned at Uluru
//     let marker = new AdvancedMarkerView({
//         map: map,
//         position: position,
//         title: "Uluru",
//     });

//     let marker = new google.maps.LatLng (40.673576, -73.910144)
//     let marker = new google.maps.Marker(markerOptions);
// }

// let features = [
//     {
//         position: new google.maps.LatLng(40.673576, -73.910144)
//     }
// ];

// initMap();


async function initMap() {
    let mapOptions = {
        center: { lat: 40.673576, lng: -73.910144 },
        zoom: 14,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    let markerOptions = {
        position: new google.maps.LatLng(40.673576, -73.910144),
        map: map
    };

    let marker = new google.maps.Marker(markerOptions);

}

initMap();


