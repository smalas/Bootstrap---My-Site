var stickyNavLen;

$(document).ready(function() {
  applyNavigation();
});

function applyNavigation() {
  smoothScroll();
  applyStickyNav();
  imageExpander();
}

function applyStickyNav() {
  stickyNavLen = $('#general-tools').offset().top-1;

  $(window).on('scroll', function() {
    stickyNav();
  })
}

function stickyNav() {
  if ($(window).scrollTop() > stickyNavLen) {
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  }
}

function smoothScroll() {
  $('.smooth-scroll').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
}

function imageExpander(){
  $('#color-emotion-wheel').on('click', function(){
    $('.color-wheel').addClass('active');
  });

  $('#type-choice-graphic').on('click', function(){
    $('.type-choices').addClass('active');
  });

  $('.expanded-image').on('click', function(){
    $('.expanded-image').removeClass('active');
  });
}
