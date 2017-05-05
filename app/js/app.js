require('normalize.css');
require('../style/style.less');
const $ = require('jquery');

// variables
let showCursor = false;
let revealCounter = 0;
let greetingMessage = 'hi({ to: you });'.split("");
let headerOffset = 70;

$(document).ready(function() {
  var revealer = setInterval(function(){
    if (revealCounter < greetingMessage.length) {
      revealCounter ++;
      let textToShow = greetingMessage.slice(0, revealCounter).join('');
      $("#greetingText").text(textToShow);
    } else {
      clearInterval(revealer);
    }
  }, 80);
  setInterval(blinkCursor, 500);

  //Scroll from links in header
  $('#aboutLink').click(function() {
    $('html, body').animate({
      scrollTop: ($('#aboutMe').offset().top - headerOffset)
    }, 500);
  });
  $('#skillsLink').click(function() {
    $('html, body').animate({
      scrollTop: ($('#skills').offset().top - headerOffset)
    }, 500);
  });
  $('#workLink').click(function() {
    $('html, body').animate({
      scrollTop: ($('#work').offset().top - headerOffset)
    }, 500);
  });
  $('#contactLink').click(function() {
    $('html, body').animate({
      scrollTop: ($('#contact').offset().top - headerOffset)
    }, 500);
  });

});

function blinkCursor() {
  showCursor = !showCursor;
  if (showCursor) {
    $("#cursor").show();
    $("#space").hide();
  } else {
    $("#cursor").hide();
    $("#space").show();
  }
}
