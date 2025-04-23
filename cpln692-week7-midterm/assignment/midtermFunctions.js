/* ================================
Week 7 Assignment: Midterm Functions + Signatures
================================ */

//Miami map
var mapOpts = {
  center: [25.8, -80.2],
  zoom: 11.5
};
var map = L.map('map', mapOpts);

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//hotels in Miami by category
var dataset = "https://opendata.arcgis.com/datasets/d37bbc15e7304b4ca4607783283147b7_0.geojson"

var parsedData;
var featureGroup;

//hotels in Miami by types
var myStyle1 = function(feature) {
  switch(feature.properties.TYPE) {
    case 'HOTL': return {
      radius: 6,
      fillColor: "#48D1CC",
      color: "#008B8B",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 'MOTL': return {
      radius: 6,
      fillColor: "#90EE90",
      color: "#2E8B57",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 'BNB': return {
      radius: 6,
      fillColor: "#FFD700",
      color: "#FFA500",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 'CNDO': return {
      radius: 6,
      fillColor: "#7B68EE",
      color: "#6A5ACD",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 'DWEL': return {
      radius: 6,
      fillColor: "#DDA0DD",
      color: "#DA70D6",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
};


//hotels in Miami by capacities
var myStyle2 = function(feature) {
    if (feature.properties.CAPACITY<=20) { return {
      radius: 6,
      fillColor: "#B0E0E6",
      color: "#48D1CC",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 1
    };
  }
    else if (feature.properties.CAPACITY>20 && feature.properties.CAPACITY<=100) { return {
      radius: 6,
      fillColor: "#1E90FF",
      color: "#4169E1",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 1
    };
  }
    else if (feature.properties.CAPACITY>100 && feature.properties.CAPACITY<=500) { return {
      radius: 6,
      fillColor: "#0000FF",
      color: "#0000CD",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 1
    };
  }
    else if (feature.properties.CAPACITY>500){ return {
      radius: 6,
      fillColor: "#483D8B",
      color: "#0E154E",
      weight: 1.5,
      opacity: 1,
      fillOpacity: 1
    };
  }
};

var first4pages = $(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    parsedData = data;
    featureGroup = L.geoJson(parsedData, {
           pointToLayer: function(feature, latlng) {
           return L.circleMarker(latlng, myStyle1(feature,latlng)).bindPopup(feature.properties.NAME);
     }
     })
     featureGroup.addTo(map);
  })
});


var lastpage = () => {
  featureGroup = L.geoJson(parsedData, {
    pointToLayer: function(feature, latlng) {
      switch (currentSlide) {
        case 0: return L.circleMarker(latlng, myStyle1(feature,latlng)).bindPopup(feature.properties.NAME);
        case 1: return L.circleMarker(latlng, myStyle1(feature,latlng)).bindPopup(feature.properties.NAME);
        case 2: return L.circleMarker(latlng, myStyle1(feature,latlng)).bindPopup(feature.properties.NAME);
        case 3: return L.circleMarker(latlng, myStyle1(feature,latlng)).bindPopup(feature.properties.NAME);
        case 4: return L.circleMarker(latlng, myStyle2(feature,latlng)).bindPopup(feature.properties.NAME);
      }
    }
  }).addTo(map);
};
