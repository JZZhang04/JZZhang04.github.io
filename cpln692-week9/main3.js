mapboxgl.accessToken = 'pk.eyJ1IjoiamlhenVvIiwiYSI6ImNqdGtmNDQ5ajAzcnY0NHA5YzFzNnoxb3kifQ.6Su_VlXaALQNuYFUhuBs2w';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/jiazuo/cjttmgs3103wd1ful6c7cazrj' // replace this with your style URL
});

map.on('load', function() {
  var layers = ['<=2', '2-20', '20-50', '50-100', '100-200', '200-500', '500+'];
var colors = ['#f3d2fe', '#e18bfe', '#d769fc', '#c318fb', '#9703c9', '#630183','#2e013d'];

for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}
});
map.on('mousemove', function(e) {
  var hotel = map.queryRenderedFeatures(e.point, {
    layers: ['hotel']
  });

  if (hotel.length > 0) {
    document.getElementById('pd').innerHTML = '<h3><strong>' + hotel[0].properties.NAME + '</strong></h3><p><strong><em>' + hotel[0].properties.CAPACITY + '</strong> ROOMS</em></p>';
  } else {
    document.getElementById('pd').innerHTML = '<p>Hover over a point!</p>';
  }
});

map.getCanvas().style.cursor = 'default';

map.fitBounds([[-80.1, 26.1], [-80, 25.3]]);
