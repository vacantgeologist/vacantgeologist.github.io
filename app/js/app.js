require('normalize.css');
require('../style/style.less');
const $ = require('jquery');

// variables
let showCursor = false;
let revealCounter = 0;
let greetingMessage = 'hi({ to: you });'.split("");

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
