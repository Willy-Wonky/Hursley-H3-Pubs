var landscape = L.tileLayer('https://tile.thunderforest.com/landscape/{z}/{x}/{y}{r}.png?apikey=4e01c7ba8815416d95153546e4edc6c9', {
        attribution: 'Map data &copy; <a href="http://www.thunderforest.com/">Thunderforest</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    }),

    satellite = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'map data &copy; <a href="http://www.esri.com/">Esri</a> i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
var mymap = L.map('mapContainer', {
    center: [50.99851, -1.3539],
    zoom: 10,
    layers: [landscape]
});

F_E_pubs = L.geoJSON.ajax("data/F_E_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

N_pubs = L.geoJSON.ajax("data/N_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

E_pubs = L.geoJSON.ajax("data/E_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

W_pubs = L.geoJSON.ajax("data/W_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

N_F_pubs = L.geoJSON.ajax("data/N_F_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

C_pubs = L.geoJSON.ajax("data/C_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);

S_pubs = L.geoJSON.ajax("data/S_pubs.geojson", {
    pointToLayer: returnPubMarker
}).addTo(mymap);



// C_pubs.on("data:loaded", function () {
//     mymap.fitBounds(C_pubs.getBounds());

// });

var baseMaps = {
    "Landscape": landscape,
    "Satellite": satellite


};
var overlayMaps = {
    // "All Pubs": pubs,
    // "Pubs near water": w_pubs,
    // "Pubs with open fires": f_pubs,
    // "Car parks to run from": cp,
    // "Town and city pubs": city_pubs,
    "eastern pubs": E_pubs,
    "far eastern pubs": F_E_pubs,
    "Northern pubs": N_pubs,
    "Western pubs": W_pubs,
    "New Forest pubs": N_F_pubs,
    "Central pubs": C_pubs,
    "Southern pubs": S_pubs

}


L.control.layers(baseMaps, overlayMaps).addTo(mymap);



function returnPubMarker(json, latlng) {
    var att = json.properties;
    if (att.rating == 10) {
        var colorPub = "red";
    } else if (att.rating == 9) {
        var colorPub = "#ff1615";
    } else if (att.rating == 8) {
        var colorPub = "#ff3031";
    } else if (att.rating == 7) {
        var colorPub = "#ff4e4e";
    } else if (att.rating == 6) {
        var colorPub = "#ff7170";
    } else if (att.rating == 5) {
        var colorPub = "#ff9393";
    } else if (att.rating == 4) {
        var colorPub = "#ff9393";
    } else if (att.rating == 3) {
        var colorPub = "#ffcfcf";
    } else if (att.rating == 2) {
        var colorPub = "#ffeaeb";
    } else {
        var colorPub = "#fff";
    }
    return L.circleMarker(latlng, {
        radius: 10,
        color: colorPub
    }).bindTooltip(
        att.name + "<br>" + att.rating + " " + "out of 10" + "<br>" + att.garden + "<br>" + att.parking + "<br>" + att.beer + "<br>" + att.dogs + "<br>" + att.hash);
};
mymap.zoomControl.remove();