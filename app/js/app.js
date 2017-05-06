/* jshint esversion: 6 */

require('normalize.css');
require('../style/style.less');
require('jquery-localize');

// Shared variables
var showCursor = false;
var revealCounter = 0;
var greetingMessage = 'hi({ to: you });'.split("");
var headerOffset = 70;

$(document).ready(function() {
  //i18n
  $("[data-localize]").localize("content", {language: "ja"});

  var revealer = setInterval(function(){
    if (revealCounter < greetingMessage.length) {
      revealCounter ++;
      var textToShow = greetingMessage.slice(0, revealCounter).join('');
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
