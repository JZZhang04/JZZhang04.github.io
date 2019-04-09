var slides = [
  {title: "Hotels in Miami", text: "This map shows all the hotel and inn facilities within Miami-Dade County. These facilities are divided into 5 types. You can click on the markers to see their names.",coordinates:[25.7, -80.2],zoom: 10.6},
  {title: "Downtown Miami", text: "This area is a cultural, financial, and commercial center of South Florida. As we can see, most facilities here are hotels, motels and condotels.",coordinates:[25.77, -80.19],zoom: 14},
  {title: "South Beach", text: "This area was the first section of Miami Beach to be developed, now a famous tourist attraction. Most of facilities here are hotels, but there are also other types.",coordinates:[25.78, -80.13],zoom: 16},
  {title: "Miami Airport", text: "MIA now offers more flights to Latin America and the Caribbean than any other U.S. airport, is the third-busiest airport for international passengers of America. We can see that most of facilities around the airport are hotels and motels.",coordinates:[25.8, -80.29],zoom: 14},
  {title: "Cpapcities", text: "This map shows hotels by their capacities, the darker the marker's color, the more rooms the hotel has. We can see that hotels with most rooms concentrate near the downtown, airport and Miami Beach.",coordinates:[25.7, -80.2],zoom: 10.6}
];

var currentSlide = 0;

var addTitle = (title) => {
$('.sidebar').append(`<h1 id='title'>${title}</h1>`)
};

var addText = (text) => {
$('.sidebar').append(`<p id='text'>${text}</p>`)
};

var setColor = (color) => {
$('#map').css('background-color', color)
};

var cleanup = () => {
$('#title').remove()
$('#text').remove()
};


var buildSlide = (slideObject) => {
cleanup()
addTitle(slideObject.title);
addText(slideObject.text);
setColor(slideObject.color);
map.flyTo(slideObject.coordinates, slideObject.zoom);
checkSlide2();
checkSlide3();
};

var checkSlide1 = () => {
  if (currentSlide == 4) {
    $('#next.button').hide();}
  else {
    $('#next.button').show();}
};

var checkSlide2 = () => {
  if (currentSlide == 0) {
    $('#previous.button').hide();}
  else {
    $('#previous.button').show();}
};

var checkSlide3 = () => {
  if (currentSlide == 4) {
    $('#leg2').show();
    $('#leg1').hide();}
  else {
    $('#leg2').hide();
    $('#leg1').show();}
};


buildSlide(slides[currentSlide])
$("#next").click(() => {
  currentSlide = currentSlide + 1;
  buildSlide(slides[currentSlide]);
  checkSlide1();
  lastpage();
  checkSlide3();
})
$("#previous").click(() => {
  currentSlide = currentSlide - 1;
  buildSlide(slides[currentSlide]);
  checkSlide1();
  checkSlide2();
  lastpage();
  checkSlide3();
})
