var $ = require("jquery");
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJlbm9sIiwiYSI6ImNrNnBzaTA2YTAyanUzaHFscXViNGt1YmYifQ.TqHgHhcysFdfaH0QvP6MGg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nazarenol/ck6puwuuj1hi41io6ocfo6mtf',
  center: [-75.401710, 41.221494], // your starting coordiantes
  zoom: 12.5,
  bearing: 35,
  pitch: 40,
  duration: 8000
});

map.scrollZoom.disable();

var chapters = {
  // give each location the same name as its section id, and set its coordinates here
  'location-one': {
    center: [-75.401710, 41.221494],
      zoom: 12.5,
      bearing: 35,
      pitch: 40,
      duration: 8000
  },
  'location-two': {
      center: [-75.748217, 40.740883],
      zoom: 11,
      bearing: 55,
      pitch: 70
  }
};

// Every time the page scrolls, we'll check which section is on the screen
$('#writing').scroll(function() {
  var arrPlaces = $("section");

  arrPlaces.each(function() {
    var offset = $(this).offset();
    var bottom = offset.top + $(this).outerHeight();
    var windowHeight = $(window).height();
    var theId = $(this).attr('id');
    if ($(window).width() > 767) {
      console.log(theId);
      if (offset.top < 200 && bottom > 200) {
        setActiveChapter(theId);
      }
    }
    else if (offset.top < windowHeight) {
      // this is for mobile; we trigger the map move as soon as a section enters the screen
      setActiveChapter(theId);
    }
    else {
      $(this).removeClass('active');
    }
  });
});

var activeChapterName = 'intro';

function setActiveChapter(theId) {
  $('#' + theId).addClass('active');
  if (theId === activeChapterName) return;
  map.flyTo(chapters[theId]);
  activeChapterName = theId;
};

// Open and close the optional navigation

$('.toggle').click(function() {
  $(this).toggleClass('open');
  $('.menu').toggleClass('open');
});

$('.menu .nav-icon').click(function() {
  $('.toggle').removeClass('open');
  $('.menu').removeClass('open');
});
