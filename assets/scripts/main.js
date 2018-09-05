/* global iziToast */
/* global google */
/* global senadores */
/* global diputados */

var resetPoint = $("#results").html();

function cargarDatos(distrito, entidad_numero) {
    $("#results").html(resetPoint);
    console.log("Cargando datos...");
    var relacion = {1: 'Aguascalientes', 2: 'Baja California', 3: 'Baja California Sur', 4: 'Campeche', 5: 'Coahuila', 6: 'Colima', 7: 'Chiapas', 8: 'Chihuahua', 9: 'Ciudad de México', 10: 'Durango', 11: 'Guanajuato', 12: 'Guerrero', 13: 'Hidalgo', 14: 'Jalisco', 15: 'México', 16: 'Michoacán', 17: 'Morelos', 18: 'Nayarit', 19: 'Monterrey', 20: 'Oaxaca', 21: 'Puebla', 22: 'Quéretaro', 23: 'Quintana Roo', 24: 'San Luis Potosí', 25: 'Sinaloa', 26: 'Sonora', 27: 'Tabasco', 28: 'Tamaulipas', 29: 'Tlaxcala', 30: 'Veracruz', 31: 'Yucatán', 32: 'Zacatecas'}
    var entidad = relacion[entidad_numero];
    console.log(entidad);
    //rowDiputados y rowSenadores
    var html = "<div class='col-md-1'></div><div class='col-md-10 text-center center'>";
    for (var i = 0; i < diputados.length; i++) {
        if (diputados[i]["entidad"] == entidad ) {
            if (diputados[i]["distrito"]==distrito) {
                html = html + "<div class='col-md-4 center text-center magic-column'> <img src='$imagen'> <h1>$nombre</h1> </div>".replace("$imagen", diputados[i]["imagen"]).replace("$nombre", diputados[i]["nombre"]);
            }
        }
    }
    html = html + '</div>';
    $("#rowDiputados").append(html);
    html = "<div class='col-md-1'></div><div class='col-md-10 text-center center'>";
    for (i = 0; i < senadores.length; i++) {
        if (senadores[i]["estado"] == entidad) {
                html = html + "<div class='col-md-4 center text-center magic-column'> <img src='$imagen'> <h1>$nombre</h1> </div>".replace("$imagen", senadores[i]["imagen"]).replace("$nombre", senadores[i]["nombre"]);
        }
    }
    html = html + '</div>';
    $("#rowSenadores").append(html);

    $('html, body').animate({
        scrollTop: $("#results").offset().top
    }, 2000);
}

$('[data-toggle="tooltip"]').tooltip();
$('.land').click(function() {
    var estado = $(this).data("title");
    console.log(estado);
    $('.land').removeClass('active');
    $(this).addClass("active");
    if (estado === "Jalisco") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('14', [20.566667, -103.676389], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Colima") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('06', [19.096666666667, -103.96083333333], 10);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Baja California Sur") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('03', [25.846111, -111.972778], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Campeche") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('04', [18.836389, -90.403333], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Coahuila") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('05', [27.302222, -102.044722], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Chiapas") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('07', [16.41, -92.408611], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Chihuahua") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('08', [28.814167, -106.439444], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Distrito Federal") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('09', [19.419444, -99.145556], 10);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Durango") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('10', [24.934722, -104.911944], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Guanajuato") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('11', [21.018889, -101.262778], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Guerrero") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('12', [17.613056, -99.95], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Hidalgo") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('13', [20.478333, -98.863611], 9);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "México") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('15', [19.354167, -99.630833], 9);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Morelos") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('17', [18.7475, -99.070278], 10);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Nuevo León") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('19', [25.566667, -99.970556], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Oaxaca") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('20', [16.898056, -96.414167], 9);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Veracruz") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('30', [19.428889, -98.160833], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Puebla") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('21', [19.003611, -97.888333], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Querétaro") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('22', [20.591, -100.391], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Quintana Roo") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('23', [19.6, -87.916667], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "San Luis Potosí") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('24', [22.603333, -100.429722], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Sinaloa") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('25', [25.002778, -107.502778], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Sonora") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('26', [29.646111, -110.868889], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Tabasco") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('27', [17.972222, -92.588889], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Tamaulipas") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('28', [24.287222, -98.563333], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Tlaxcala") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('29', [19.428889, -98.160833], 9);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Yucatán") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('31', [20.833333, -89], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === "Zacatecas") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('32', [23.292778, -102.700556], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    }else if (estado === 'Nayarit') {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('18', [21.743888888889, -105.22833333333], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Baja California") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('02', [29.95, -115.11666666667], 7);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Michoacán") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('16', [19.168611111111, -101.89972222222], 8);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else if (estado === "Aguascalientes") {
        $("#results").html(resetPoint);
        $("#map").css('display', 'block');
        $("#pac-input").css('display', 'block');
        init('01', [22.021666666667, -102.35638888889], 10);
        $('html, body').animate({
            scrollTop: $("#map").offset().top
        }, 2000);
    } else {
        iziToast.show({
            theme: 'dark',
            title: 'Lo sentimos',
            message: 'Todavía no tenemos los datos de tu estado. Si gustas colaborar, envíanos un mail.',
            position: 'bottomCenter',
            progressBarColor: 'rgb(234, 49, 21)',
            timeout: 10000
        });
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function init(estado, coordenadas, zoom_input) {
    var markersArray = [];

    function clearOverlays() {
        for (var i = 0; i < markersArray.length; i++) {
            markersArray[i].setMap(null);
        }
        markersArray.length = 0;
    }


    var mapOptions = {
        disableDefaultUI: false,
        zoom: zoom_input,
        scrollwheel: false,
        center: { lat: coordenadas[0], lng: coordenadas[1] },
        //center: new google.maps.LatLng(19.5445516,-99.1430878) // Nova Scotia
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var urljson = 'data/' + estado + '.geojson';
    map.data.loadGeoJson(urljson);
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
        '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
        '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
        '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
        '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
        '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
        '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
        '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
    ];
    //{"gid":3,"id":3,"entidad":18,"distrito":3} properties that we have
    //set random colors
    map.data.setStyle(function() {
        var random = getRandomInt(1, colorArray.length - 1);
        var color = colorArray[random];
        if (random > -1) {
            colorArray.splice(random, 1);
        }
        return {
            fillColor: color
        };
    });
    map.data.addListener('click', function(event) {
        var entidad = event.feature.getProperty('entidad');
        var distrito = event.feature.getProperty('distrito');
        console.log("Estas picando el estado " + entidad + " y el distrito " + distrito);
        $("#results").css('display', 'block');
        cargarDatos(distrito, entidad);
    });

    google.maps.event.addListener(map, 'click', function(e) {
        clearOverlays();
        var markerMagic = new google.maps.Marker({
            position: e.latLng,
            map: map,
            icon: "dist/images/marker.png",
            zIndex: 100
        });
        markersArray.push(markerMagic);
    });
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        console.log("eu nuevo lugar");
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        clearOverlays();

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            // Create a marker for each place.
            markersArray.push(new google.maps.Marker({
                map: map,
                icon: "dist/images/marker.png",
                title: place.name,
                position: place.geometry.location,
                zIndex: 1
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}
