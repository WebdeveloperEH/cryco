(function ($) {
  "use strict";

  $(window).on("load", function () {
    preloader();
    wowAnimation();
  });

  /*------------------------------------------
	= preloader
	-------------------------------------------*/

  function preloader() {
    $(".preloader").delay().fadeOut();
  }

  /*------------------------------------------
	= back to top
	-------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".xb-backtotop").addClass("active");
    } else {
      $(".xb-backtotop").removeClass("active");
    }
  });
  $(function () {
    $(".scroll").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });

  /*------------------------------------------
	= sticky header
	-------------------------------------------*/
  // sticky header
  if ($(".stricky").length) {
    $(".stricky")
      .addClass("original")
      .clone(true)
      .insertAfter(".stricky")
      .addClass("stricked-menu")
      .removeClass("original");
  }
  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 100;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
  });

  /*------------------------------------------
	= header search
	-------------------------------------------*/
  $(".header-search-btn").on("click", function (e) {
    e.preventDefault();
    $(".header-search-form-wrapper").addClass("open");
    $('.header-search-form-wrapper input[type="search"]').focus();
    $(".body-overlay").addClass("active");
  });
  $(".xb-search-close").on("click", function (e) {
    e.preventDefault();
    $(".header-search-form-wrapper").removeClass("open");
    $("body").removeClass("active");
    $(".body-overlay").removeClass("active");
  });

  /*------------------------------------------
	= sidebar
	-------------------------------------------*/
  $(".sidebar-menu-close, .body-overlay").on("click", function () {
    $(".offcanvas-sidebar").removeClass("active");
    $(".body-overlay").removeClass("active");
  });

  $(".offcanvas-sidebar-btn").on("click", function () {
    $(".offcanvas-sidebar").addClass("active");
    $(".body-overlay").addClass("active");
  });
  $(".body-overlay").on("click", function () {
    $(this).removeClass("active");
    $(".header-search-form-wrapper").removeClass("open");
  });

  /*------------------------------------------
	= mobile menu
	-------------------------------------------*/
  $(".xb-nav-hidden li.menu-item-has-children > a").append(
    '<span class="xb-menu-toggle"></span>'
  );
  $(
    ".xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children"
  ).append('<span class="xb-menu-toggle"></span>');
  $(".xb-menu-toggle").on("click", function () {
    if (!$(this).hasClass("active")) {
      $(this)
        .closest("ul")
        .find(".xb-menu-toggle.active")
        .toggleClass("active");
      $(this)
        .closest("ul")
        .find(".sub-menu.active")
        .toggleClass("active")
        .slideToggle();
    }
    $(this).toggleClass("active");
    $(this).closest(".menu-item").find("> .sub-menu").toggleClass("active");
    $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
  });

  $(".xb-nav-hidden li.menu-item-has-children > a").on("click", function () {
    var target = $(e.target);
    if ($(this).attr("href") === "#" && !target.is(".xb-menu-toggle")) {
      e.stopPropagation();
      if (!$(this).find(".xb-menu-toggle").hasClass("active")) {
        $(this)
          .closest("ul")
          .find(".xb-menu-toggle.active")
          .toggleClass("active");
        $(this)
          .closest("ul")
          .find(".sub-menu.active")
          .toggleClass("active")
          .slideToggle();
      }
      $(this).find(".xb-menu-toggle").toggleClass("active");
      $(this).closest(".menu-item").find("> .sub-menu").toggleClass("active");
      $(this).closest(".menu-item").find("> .sub-menu").slideToggle();
    }
  });
  $(".xb-nav-mobile").on("click", function () {
    $(this).toggleClass("active");
    $(".xb-header-menu").toggleClass("active");
  });

  $(".xb-menu-close, .xb-header-menu-backdrop").on("click", function () {
    $(this).removeClass("active");
    $(".xb-header-menu").removeClass("active");
  });

  /*------------------------------------------
	= data background and bg color
	-------------------------------------------*/
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ") "
    );
  });
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  /*------------------------------------------
	= wow animation
	-------------------------------------------*/
  function wowAnimation() {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }

  /*------------------------------------------
	= counter
	-------------------------------------------*/
  if ($(".xbo").length) {
    $(".xbo").appear();
    $(document.body).on("appear", ".xbo", function (e) {
      var odo = $(".xbo");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
      window.xboOptions = {
        format: "d",
      };
    });
  }

  /*------------------------------------------
	= partner slider
	-------------------------------------------*/
  var slider = new Swiper(".partner-active", {
    loop: true,
    spaceBetween: 0,
    speed: 400,
    slidesPerView: 6,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });
  /*------------------------------------------
	= partner slider two
	-------------------------------------------*/
  var slider = new Swiper(".partner-slider-two", {
    loop: true,
    spaceBetween: 20,
    speed: 400,
    slidesPerView: 9,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 9,
      },
      1200: {
        slidesPerView: 7,
      },
      992: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 5,
      },
      576: {
        slidesPerView: 4,
      },
      0: {
        slidesPerView: 3,
      },
    },
  });

  /*------------------------------------------
	= footer-testimonial-slider
	-------------------------------------------*/
  var slider = new Swiper(".testimonial-slider", {
    loop: true,
    spaceBetween: 0,
    speed: 400,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  /*------------------------------------------
	= xb-testimonial-slider
	-------------------------------------------*/
  var slider = new Swiper(".xb-testimonial-slider", {
    loop: true,
    spaceBetween: 0,
    speed: 400,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= dm-team-slider
	-------------------------------------------*/
  var slider = new Swiper(".dm-team-slider", {
    loop: true,
    spaceBetween: 30,
    speed: 400,
    slidesPerView: 5,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  /*------------------------------------------
	= brand slider
	-------------------------------------------*/
  var slider = new Swiper(".brand-slider", {
    slidesPerView: 6,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 30,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  /*------------------------------------------
	= service slider
	-------------------------------------------*/
  var slider = new Swiper(".service-slider", {
    spaceBetween: 0,
    slidesPerView: 4,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= service details slider
	-------------------------------------------*/
  var slider = new Swiper(".service-gallery-slider", {
    gap: 30,
    slidesPerView: 5,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 6000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= award slider
	-------------------------------------------*/
  var slider = new Swiper(".award-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    roundLengths: true,
    loop: true,
    navigation: {
      nextEl: ".xb-swiper-arrow-next",
      prevEl: ".xb-swiper-arrow-prev",
    },
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= award slider
	-------------------------------------------*/
  var slider = new Swiper(".portfolio-slider", {
    spaceBetween: 30,
    slidesPerView: 2,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
		= dm-brand slider
		-------------------------------------------*/
  var slider = new Swiper(".dm-brand-slider", {
    spaceBetween: 148,
    slidesPerView: 6,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 3,
      },
    },
  });

  /*------------------------------------------
	= dm-service slider
	-------------------------------------------*/
  var slider = new Swiper(".dm-service-slider", {
    spaceBetween: 0,
    slidesPerView: 4,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= dm-testimonial slider
	-------------------------------------------*/
  var slider = new Swiper(".dm-testimonial-slider", {
    spaceBetween: 0,
    slidesPerView: 3,
    roundLengths: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= dm-instragram slider
	-------------------------------------------*/
  var slider = new Swiper(".instragram-slider", {
    spaceBetween: 0,
    slidesPerView: 6,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 6,
      },
      992: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= ds-testimonial-slider
	-------------------------------------------*/
  var slider = new Swiper(".ds-testimonial-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= ds-brand-slider
	-------------------------------------------*/
  var slider = new Swiper(".ds-brand-slider", {
    spaceBetween: 89,
    slidesPerView: 5,
    roundLengths: true,
    loop: true,
    autoplay: {
      enabled: true,
      delay: 4000,
    },
    speed: 400,
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 4,
      },
      576: {
        slidesPerView: 3,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  /*------------------------------------------
	= magnificPopup
	-------------------------------------------*/
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  $(".popup-video").magnificPopup({
    type: "iframe",
    mainClass: "mfp-zoom-in",
  });

  /*------------------------------------------
	= Accordion Box
	-------------------------------------------*/
  if ($(".accordion_box").length) {
    $(".accordion_box").on("click", ".acc-btn", function () {
      var outerBox = $(this).parents(".accordion_box");
      var target = $(this).parents(".accordion");

      if ($(this).next(".acc_body").is(":visible")) {
        $(this).removeClass("active");
        $(this).next(".acc_body").slideUp(300);
        $(outerBox).children(".accordion").removeClass("active-block");
      } else {
        $(outerBox).find(".accordion .acc-btn").removeClass("active");
        $(this).addClass("active");
        $(outerBox).children(".accordion").removeClass("active-block");
        $(outerBox).find(".accordion").children(".acc_body").slideUp(300);
        $(outerBox)
          .find(".accordion .accordion-inner")
          .children(".acc_body")
          .slideUp(300);
        target.addClass("active-block");
        $(this).next(".acc_body").slideDown(300);
      }
    });
  }

  //  Countdown
  $("[data-countdown]").each(function () {
    var $this = $(this),
      finalDate = $(this).data("countdown");
    if (!$this.hasClass("countdown-full-format")) {
      $this.countdown(finalDate, function (event) {
        $this.html(
          event.strftime(
            '<div class="single"><p>Days</p><h1>%D</h1></div> <div class="single"><p>Hours</p><h1>%H</h1></div> <div class="single"><p>Minutes</p><h1>%M</h1></div> <div class="single"><p>SECONDS</p><h1>%S</h1></div>'
          )
        );
      });
    } else {
      $this.countdown(finalDate, function (event) {
        $this.html(
          event.strftime(
            '<div class="single"><p>Years</p><h1>%Y</h1></div> <div class="single"><p>Months</p><h1>%m</h1></div> <div class="single"><p>Weeks</p><h1>%W</h1></div> <div class="single"><p>Days</p><h1>%d</h1></div> <div class="single"><p>Hours</p><h1>%H</h1></div> <div class="single"><p>Minutes</p><h1>%M</h1></div> <div class="single"><p>SECONDS</p><h1>%S</h1></div>'
          )
        );
      });
    }
  });
})(jQuery);
