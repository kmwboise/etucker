/*!
 * Vitality v2.1.0 (http://themes.startbootstrap.com/vitality-v2.1.0)
 * Copyright 2013-2018 Start Bootstrap
 * Purchase a license to use this theme at (https://wrapbootstrap.com)
 */
/*!
 * Vitality v2.0.3 (http://themes.startbootstrap.com/vitality-v2.0.3)
 * Copyright 2013-2017 Start Bootstrap
 * Purchase a license to use this theme at (https://wrapbootstrap.com)
 */

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
$(document).ready(function() {
  if (isPhoneDevice) {
    //mobile
  } else {
    //desktop
    // Initialize WOW.js
    wow = new WOW({
      offset: 50
    })
    wow.init();
  }
});

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 69)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 70
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Activates floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Owl Carousel Settings

    

  $(".services-carousel").owlCarousel({
    singleItem: true,
    navigation: false,
    pagination: false,
    autoPlay:true,
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    transitionStyle: "fadeUp"
  });

  $(".testimonials-carousel").owlCarousel({
    singleItem: true,
    navigation: true,
    pagination: true,
    autoHeight: true,
    autoPlay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    navigationText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    transitionStyle: "backSlide"
  });


  // Vide - Video Background Settings
  //$('header.video').vide({
    //mp4: "mp4/Morning-Routine.mp4",
    //poster: "img/agency/backgrounds/Morning-Routine.jpg"
  //}, {
    //posterType: 'jpg'
  //});
    
    
    //date picker
    $('.datepicker').datepicker();
    


})(jQuery); // End of use strict
