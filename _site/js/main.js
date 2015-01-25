(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Universidad Federal Rio de Janeiro"; // Venue
    /////////////////////////////////////////////////// Adress

    var fn = {
        // Launch Functions
        Launch: function () {
            fn.MenuSticky();
            fn.MainSlider();
            fn.MainSliderAlign();
            fn.Navigation();
            fn.Apps();
        },

        // Sticky Menu
        MenuSticky: function () {
            var menu = document.querySelector('#menu'),
                origOffsetY = menu.offsetTop + 100;
            function scroll() {
                if ($(window).scrollTop() >= origOffsetY) {
                    $('#menu').addClass('sticky');
                    $('#menu').removeClass('fixed');
                } else {
                    $('#menu').removeClass('sticky');
                    $('#menu').addClass('fixed');
                }
            }
            document.onscroll = scroll;
        },

        // Main FlexSlider
        MainSlider: function () {
            $(window).load(function () {
                $('.main-slider').flexslider({
                    noCSS: true,
                    touch: false,
                    controlNav: false,
                    directionNav: false,
                    animation: "fade",
                    start: function () {
                        $('#preloader').addClass('ready');
                    }
                });
            });
        },

        // Align Slider Horizontally
        MainSliderAlign: function () {
            var imageWidth, widthFix, container = $('.header-bg');
            function centerImage() {
                imageWidth = container.find('img').width();
                widthFix = imageWidth / 2;
                container.find('img').css('margin-left', -widthFix);
            }
            $(window).on("load resize", centerImage);
        },

        // One Page Navigation
        Navigation: function () {
            $('#menu').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                filter: '',
                easing: 'swing',
                scrollOffset: 60,
            });
        },

        //// FlexSlider
        //Slider: function () {
            //$('.flexslider').flexslider({
                //noCSS: true,
                //touch: false,
                //directionNav: false,
                //animation: "fade"
            //});
        //},

        // Apps
        Apps: function () {
            // Accordion
            $('.accordion-group').accordion();
            // Go Top
            $('#gotop').click(function () {
                $('html, body').scrollTo($('#header'), 300);
            });
            // Go Register
            $('#goregister').click(function () {
                $('html, body').scrollTo($('#register'), 300);
            });
            // Register
            $('#registerBtn').click(function () {
                window.open('http://www.mydomain.com?ReportID=1', '_blank');
            });
            
            //$(window).trigger('scroll.onePageNav');
            
        }
    };

    $(document).ready(function () {
        fn.Launch();
    });

})(jQuery);
