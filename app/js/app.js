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
  // i18n
  $("[data-localize]").localize("content", {language: "en"});

  // Language selector hide/show
  $(".lang").hide();
  $(".lang-current, .lang").hover(showLangSelect, hideLangSelect);

  // Select language
  $(".localize-en").click(function(){
    setCurrentLang('en');
    $(".localize-en").addClass('current-mobile-lang');
    $(".localize-ja").removeClass('current-mobile-lang');
  });
  $(".localize-ja").click(function(){
    setCurrentLang('ja');
    $(".localize-ja").addClass('current-mobile-lang');
    $(".localize-en").removeClass('current-mobile-lang');
  });

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

function showLangSelect() {
  $(".lang").show();
}

function hideLangSelect () {
  $(".lang").hide();
}

function setCurrentLang(lang) {
  if (lang === 'en') {
    $("[data-localize]").localize("content", {language: "en"});
    $(".lang-current").text('English');
    // Hide menu after click
    $(".lang").hide();
    return;
  }
  if (lang === 'ja') {
    $("[data-localize]").localize("content", {language: "ja"});
    $(".lang-current").text('日本語');
    // Hide menu after click
    $(".lang").hide();
    return;
  }
}
