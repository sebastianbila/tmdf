jQuery(document).ready(function($) {
    mainMenu();
    homePageWhatIsTabs();
    homePageFeaturedCompaniesSlider();
    homePageHowDoesItWorkSlider();
    homePageMainSlider();
    homePageСalc();

    howItWorksForInvestorsPageCalc();
    howItWorksForInvestorsPageAccordeon();
    howItWorksForEntrepreneursPageAccordeon();

    howItWorksForEntrepreneursCalc();

    function howItWorksForEntrepreneursCalc() {
        $(".how-it-works-for-entrepreneurs-page .calculator .calc .amount input").keyup(function(event) {
            $(this).closest('.calc').find('.founder input').val('$' + (Math.round($(this).val() * 0.1)).toLocaleString('en-US'));
            $(this).closest('.calc').find('.fund input').val('$' + (Math.round($(this).val() * 0.9)).toLocaleString('en-US'));
            $(this).closest('.calc').find('.summa input').val('$' + (Math.round($(this).val() * 2)).toLocaleString('en-US'));
        });
    }

    function homePageСalc() {
        $(".home-page .no-equity .calc .amount input").keyup(function(event) {
            $(this).closest('.calc').find('.founder input').val('$' + (Math.round($(this).val() * 0.1)).toLocaleString('en-US'));
            $(this).closest('.calc').find('.fund input').val('$' + (Math.round($(this).val() * 0.9)).toLocaleString('en-US'));
            $(this).closest('.calc').find('.summa input').val('$' + (Math.round($(this).val() * 2)).toLocaleString('en-US'));
        });
    }




    function mainMenu() {
        $('.hamburger').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $('.menu').toggleClass('active')
            $('.header-menu').toggleClass('active')
            $('.header-top').toggleClass('active')
        });
        $(document).mouseup(function(event) {
            if ($(window).width() < 768) {
                event.preventDefault();
                var container = $('.header-top');
                if (!container.is(event.target) && container.has(event.target).length === 0) {
                    container.removeClass("active");
                    container.find(".hamburger").removeClass("active");
                    container.find(".header-menu").removeClass("active");
                }
            }
        });
        $(".menu-item-has-children > a").click(function(event) {
            event.preventDefault();
            if ($(this).hasClass("active")) {
                $('.header-menu').find(".sub-menu").hide();
                $('.header-menu').find(".menu-item-has-children > a").removeClass("active");
                $(this).removeClass("active");
                $(this).parent().find(".sub-menu").hide();

            } else {
                $('.header-menu').find(".sub-menu").hide();
                $('.header-menu').find(".menu-item-has-children > a").removeClass("active");
                $(this).addClass("active");
                $(this).parent().find(".sub-menu").show();
            }
        });
        $(document).mouseup(function(event) {
            if ($(window).width() > 768) {
                event.preventDefault();
                var container = $(".menu-item-has-children");
                if (!container.is(event.target) && container.has(event.target).length === 0) {
                    container.find("a").removeClass("active");
                    container.find(".sub-menu").hide();
                }
            }
        });
    }



    function homePageMainSlider() {
        $('.header-home .header-bottom .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            adaptiveHeight: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    arrows: false,
                }
            }]

        });

    }

    function homePageHowDoesItWorkSlider() {
        enquire.register("screen and (max-width:767px)", {
            setup: function() {
                $('.how-does-it-work .slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    fade: false,
                    swipe: false,
                    swipeToSlide: false,
                    touchMove: false,
                    infinite: false,
                    draggable: false,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            asNavFor: '.slider-nav',
                            arrows: false,
                        }
                    }]

                });


                $(".how-does-it-work .slider-nav .step").click(function(event) {
                    $('.how-does-it-work .slider-for').slick('slickGoTo', $(this).index());
                });
                $('.how-does-it-work .slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                    $(".how-does-it-work .slider-nav .step").removeClass('active');
                    $(".how-does-it-work .slider-nav .step").eq(currentSlide).addClass('active');
                });
                $('.how-does-it-work .slider-nav .step').first().addClass('active');

            },
            match: function() {
                $('.how-does-it-work .slider-nav').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    dots: false,
                    arrows: true,
                    infinite: false,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: false,
                });
                $('.how-does-it-work .slider-nav').slick('slickGoTo', 0);
                $('.how-does-it-work .slider-for').slick('slickGoTo', 0);
                $('.how-does-it-work .slider-nav .step').removeClass('active');

            },
            unmatch: function() {
                $('.how-does-it-work .slider-nav').slick('slickGoTo', 0);
                $('.how-does-it-work .slider-nav .step').first().addClass('active');
                $('.how-does-it-work .slider-for').slick('slickGoTo', 0);
                $(' .how-does-it-work .slider-nav').slick('unslick');
            },
        });

    }


    function homePageFeaturedCompaniesSlider() {
        $('.home-page .featured-companies .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            infinite: true,
        });
    }


    function howItWorksForInvestorsPageAccordeon() {
        $(".how-it-works-for-investors-page .popular-questions .accordion").click(function() {
            if ($(this).find('.question').next().is(":visible")) {
                $(this).find('.question').next().slideUp();
            } else {
                $(".accordion").find(".answer").slideUp();
                $(this).find('.question').next().slideToggle();

            }
        });
    }

    function howItWorksForEntrepreneursPageAccordeon() {
        $(".how-it-works-for-entrepreneurs-page .popular-questions .accordion").click(function() {
            if ($(this).find('.question').next().is(":visible")) {
                $(this).find('.question').next().slideUp();
            } else {
                $(".accordion").find(".answer").slideUp();
                $(this).find('.question').next().slideToggle();

            }
        });
    }

    function homePageWhatIsTabs() {
        $(".home-page .tabs .tabs-nav .tab").click(function(event) {
            $(".tabs .tabs-content .tab-content").hide().eq($(this).index()).show();
            $(this).addClass('active').siblings().removeClass('active');
        });
    }


    function howItWorksForInvestorsPageCalc() {
        let form = document.querySelector('.how-it-works-for-investors-page .calc .form');
        if (form != null) {
            let amount = document.querySelector('#amount');
            let summa = document.querySelector('#summa');
            amount.addEventListener('input', () => {
                let val = amount.value;
                val = val.replace(/[^.\d]/g, '');
                amount.value = '$ ' + Math.round(val).toLocaleString('en-US');
                summa.placeholder = '$ ' + (Math.round(val * 2)).toLocaleString('en-US');
            })
        }
    }




});