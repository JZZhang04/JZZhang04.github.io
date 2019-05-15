//boundary polygon style
var myStyle0 = function(feature) {
    return {color:'white',fillColor:"T",weight: 1.5,fillOpacity: 0};
};

//circle marker style
var myStyle = function(feature) {
  switch(feature.properties.fatal) {
    case 1: return {
      radius: 1,
      color: "#c83349",
      opacity: 1,
      fillOpacity: 0.8
    };
    case 0: return {
      radius: 1,
      //fillColor: "#ffcc5c",
      color: "#f2ae72",
      opacity: 1,
      fillOpacity: 0.8
    };
    default: return {
      radius: 1,
      //fillColor: "#b8a9c9",
      color: "#622569",
      opacity: 1,
      fillOpacity: 0.8
    };
  }
};

// controls adding parks and vacant properties
//https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+ppr_tree_canopy_outlines_2015&filename=ppr_tree_canopy_outlines_2015&format=geojson&skipfields=cartodb_id

$('#count').click(function(){
  removeMarkers();
  $.getJSON('https://raw.githubusercontent.com/ToadHa/MUSA611_Final_Project/master/Fou_Use1.json',function(data){
      L.geoJson(data,{style: myStyle0}).addTo(map);
      });
});

//define some functions
var removeMarkers = function() {
    map.eachLayer(function (layer) {
    map.removeLayer(layer);
});
var Stamen_TonerLite = L.tileLayer('https://api.mapbox.com/styles/v1/jiazuo/cjv1q09l53b821flit5ckay28/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamlhenVvIiwiYSI6ImNqdjFyeGFtZjF4bm40ZHF4cDZ6Z3hlaWEifQ.l0ev15iev-Epdyqx7Niimw', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      container: 'after',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
      ext: 'png',
      center: [39.9526, -75.1652],
      zoom: 12.5
    }).addTo(map);

var Boundary = $.getJSON("https://raw.githubusercontent.com/MUSA-620-Spring-2019/week-10/master/data/City_Limits.geojson",function(limit){
    L.geoJson(limit,{style: myStyle0}).addTo(map);
    });
};


//
//All records
$('#Show_All').click(function(){
  removeMarkers();
  $.getJSON("https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.year+"<dd>"+"</dd>"+
          'Wound: '+feature.properties.wound+"<dd>"+"</dd>"+'Victim Age: '+feature.properties.age+"<dd>"+"</dd>"+'Victim Sex: '+feature.properties.sex);
        }
      }).addTo(map);
  });
});//get geojson data of shootings

$('#Hide_All').click(function(){
	removeMarkers();
	});


//Filter by Year
$('#mySelect').change(function(){
    removeMarkers()
    var value = $(this).val();
    $.getJSON("https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.year==value)
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.year+"<dd>"+"</dd>"+'Wound: '+feature.properties.wound+"<dd>"+"</dd>"+'Victim Age: '+feature.properties.age+"<dd>"+"</dd>"+'Victim Sex: '+feature.properties.sex);}
              }
        }).addTo(map);
    });
});

//Filter by Race
$('#mySelect2').change(function(){
    removeMarkers()
    var value = $(this).val();
    console.log(value)
    $.getJSON("https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id",
     function(data) {
        L.geoJson(data, {
            pointToLayer: function(feature, latlng) { if (feature.properties.race==value.charAt(0))
              { return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.year+"<dd>"+"</dd>"+'Wound: '+feature.properties.wound+"<dd>"+"</dd>"+'Victim Age: '+feature.properties.age+"<dd>"+"</dd>"+'Victim Sex: '+feature.properties.sex);}
              }
        }).addTo(map);
    });
});

//Filter by location
$('#interior').click(function(){
  removeMarkers()
  $.getJSON("https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.inside==1)
            {
              return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.year+"<dd>"+"</dd>"+'Wound: '+feature.properties.wound+"<dd>"+"</dd>"+'Victim Age: '+feature.properties.age+"<dd>"+"</dd>"+'Victim Sex: '+feature.properties.sex);}
            }
      }).addTo(map);
  });
});

$('#exterior').click(function(){
  removeMarkers()
  $.getJSON("https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+shootings&filename=shootings&format=geojson&skipfields=cartodb_id",
   function(data) {
      L.geoJson(data, {
          pointToLayer: function(feature, latlng) { if (feature.properties.inside==0)
            {
               return L.circleMarker(latlng, myStyle(feature,latlng)).bindPopup('Year: '+feature.properties.year+"<dd>"+"</dd>"+'Wound: '+feature.properties.wound+"<dd>"+"</dd>"+'Victim Age: '+feature.properties.age+"<dd>"+"</dd>"+'Victim Sex: '+feature.properties.sex);}
            }
      }).addTo(map);
  });
});
