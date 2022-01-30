ACC.carousel = {

    _autoload: [
        ["bindCarousel", $(".js-owl-carousel").length > 0],
        "bindJCarousel"
    ],

    carouselConfig: {
        "default": {
            navigation: true,
            navigationText: ['<span class="fa-stack carousel-controls"><img src="/_ui/responsive/common/images/deals-arrow-left.png" /><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>',
                '<span class="fa-stack carousel-controls"><img src="/_ui/responsive/common/images/deals-arrow-right.png" /><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'
            ],
            pagination: false,
            itemsCustom: [
                [0, 2],
                [640, 4],
                [1024, 5],
                [1400, 5]
            ]
        },
        "rotating-image": {
            navigation: false,
            pagination: true,
            singleItem: true
        },
        "lazy-reference": {
            navigation: true,
            navigationText: ['<span class="fa-stack carousel-controls"><img src="/_ui/responsive/common/images/deals-arrow-left.png" /><i class="fa fa-chevron-circle-left fa-stack-1x fa-inverse"></i></span>',
                '<span class="fa-stack carousel-controls"><img src="/_ui/responsive/common/images/deals-arrow-right.png" /><i class="fa fa-chevron-circle-right fa-stack-1x fa-inverse"></i></span>'
            ],
            pagination: false,
            itemsDesktop: [5000, 5],
            itemsDesktopSmall: [1200, 5],
            itemsTablet: [768, 4],
            itemsMobile: [480, 3],
            lazyLoad: true
        }
    },

    bindCarousel: function() {

        $(".js-owl-carousel").each(function() {
            var $c = $(this);
            $.each(ACC.carousel.carouselConfig, function(key, config) {
                if ($c.hasClass("js-owl-" + key)) {
                    var $e = $(document).find(".js-owl-" + key);
                    $e.owlCarousel(config);
                }
            });
        });

    },

    bindJCarousel: function() {
        $(".modal").colorbox({
            onComplete: function() {
                ACC.common.refreshScreenReaderBuffer();
            },
            onClosed: function() {
                ACC.common.refreshScreenReaderBuffer();
            }
        });
        $('.svw').each(function() {
            $(this).waitForImages(function() {
                $(this).slideView({ toolTip: true, ttOpacity: 0.6, autoPlay: true, autoPlayTime: 8000 });
            });
        });
    }

};