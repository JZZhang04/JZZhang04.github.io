mapboxgl.accessToken = 'pk.eyJ1IjoiamlhenVvIiwiYSI6ImNqdGtmNDQ5ajAzcnY0NHA5YzFzNnoxb3kifQ.6Su_VlXaALQNuYFUhuBs2w';

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/jiazuo/cjtti8tlr0etw1fpoehmov3vu' // replace this with your style URL
});

map.getCanvas().style.cursor = 'default';

map.fitBounds([[-19.2421875, 57.972741], [57.63671875, 18.696361]]);

map.on('load', function() {
  var layers = ['Roman Empire', 'Historical Sites'];
var colors = ['#d2795b', '#AC5A5A'];

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
  var prov = map.queryRenderedFeatures(e.point, {
    layers: ['provinces-1oh7u7']
  });

  if (prov.length > 0) {
    document.getElementById('pd').innerHTML = '<h3><strong>' + prov[0].properties.name + '</strong></h3><p><strong><em>' + '</strong>Province/Area</em></p>';
  } else {
    document.getElementById('pd').innerHTML = '<p>Hover over an area to see its name in the Roman time.</p>';
  }
});
