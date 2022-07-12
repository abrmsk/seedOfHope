jQuery(function($) {
    "use strict";

    /// resise & size window & block
    function size_window_block(){
        let w = $(window).width(), h = $(window).height();
        $('.ale_header').css({ 'width' : w, 'height' : h });
        $('.ale_header .in_box').css({ 'width' : w - w/100*10, 'height' : h - h/100*15 });
    }
    $(window).resize(size_window_block);
    $(document).ready(size_window_block);

    $('.ale_hover a').on('mouseover', function (e) {
        $('.ale_hover_element span').css({'opacity':1 }).addClass('animate1');
    }).on('mousemove', function (e) {
        $('.ale_hover_element').css({'top':e.clientY-50, 'left':e.clientX-50 });
    }).on('mouseout', function (e) {
        $('.ale_hover_element span').css({'opacity':0}).removeClass('animate1');
    })

    // Name Former
    function randColor() {
        let r = Math.floor(Math.random() * (256)),
            g = Math.floor(Math.random() * (256)),
            b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    let name_list = $('.name_former span');
    console.log(name_list);
    for (let i = 0; i < name_list.length; i++) {
        let rndt = Math.floor(Math.random() * (90 - 1)) + 1;
        let rndl = Math.floor(Math.random() * (90 - 1)) + 1;

        console.log( name_list[i].attributes[0].nodeValue );
        $('.' + name_list[i].attributes[0].nodeValue ).css({
            'position':'absolute',
            'top':rndt+'%',
            'left':rndl+'%',
            'color':randColor(),
            'opacity':'.3',
        });
    }
    // Background move
    $('.ale_header').on('mouseover', function (e) {

    })

    // Scroll Blocks
    // function slide() {
    //     h = document.documentElement.clientHeight;
    //     $('.main_box, .two, .three').css('height', h);
    // };
    // $(window).resize(slide);
    // $(document).ready(slide);
    //
    // $(document).bind('mousewheel DOMMouseScroll', function(event) {
    //     scroll(event);
    // });
    //
    // let num = 1;
    // let scrolling = false;
    //
    // function scroll(event) {
    //     event.preventDefault();
    //     if (!scrolling) {
    //         scrolling = true;
    //         if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
    //             num--;
    //             num = num < 1 ? 1 : num;
    //         } else {
    //             num++;
    //             num = num > 3 ? 3 : num;
    //         }
    //
    //         $('html, body').animate({
    //             scrollTop: $(".num" + num).offset().top
    //         }, 500, "linear", function() {
    //             scrolling = false;
    //         });
    //     }
    // }

    // // Menu
    // let closed;
    // function width_doc() {
    //     return $(window).width();
    // }
    // if ($('.ale_header .header_top .btn_menu').length) {
    //     $('.ale_header .header_top .btn_menu').on('click', function (e) {
    //         if (width_doc() > 980) {
    //             $('.ale_menu_nav').removeClass('hide_mg');
    //             $('.ale_menu_head').addClass('hide_mg');
    //
    //         } else if (width_doc() > 960 && width_doc() <= 980) {
    //             if(closed === undefined || closed) {
    //                 $('.ale_header').css('padding-top', '244px');
    //                 $('.ale_menu_nav').css('margin-top','122px');
    //                 closed = false;
    //             } else {
    //                 console.log('fal');
    //                 $('.ale_header').css('padding-top', '122px');
    //                 $('.ale_menu_nav').css('margin-top','-122px');
    //                 closed = true;
    //             }
    //
    //         } else if (width_doc() > 640 && width_doc() <= 980) {
    //             if(closed === undefined || closed) {
    //                 $('.ale_header').css('padding-top', '334px');
    //                 $('.ale_menu_nav').css('margin-top','212px');
    //                 closed = false;
    //             } else {
    //                 $('.ale_header').css('padding-top', '215px');
    //                 $('.ale_menu_nav').css('margin-top','-212px');
    //                 closed = true;
    //             }
    //         }
    //     })
    // }
    // if ($('.ale_header .nav_item.key').length) {
    //     $('.ale_header .nav_item.key').on('click', function (e) {
    //         let w = $(document).width();
    //         if (w > 980) {
    //             console.log('ayay');
    //             $('.ale_menu_nav').addClass('hide_mg');
    //             $('.ale_menu_head').removeClass('hide_mg');
    //         }
    //     })
    // } // -Menu

    // // list services
    // $(window).on("load", function () {
    //     let e = $('a.cur').width();
    //     $('.line').width(e);
    // });
    //
    // let list_service = $('.ale_main .list_services span a');
    // if ( list_service.length ) {
    //     list_service.click( function (e) {
    //         e.preventDefault();
    //         // alert('Здесь есть вопрос куда прикручивать этот клик\n к видео вверху или к слайдам внизу?');
    //         let l = $(this).position().left;
    //         let w = $(this).width();
    //         $(".line").width(w).css({left: l});
    //         list_service.removeClass("cur");
    //         $(this).addClass("cur");
    //     });
    // } // -list services
    //
    // // clients slider
    // if ( $(".slider_box").length ) {
    //     $(".slider_box").slick({
    //         slidesToShow: 7,
    //         slidesToScroll: 1,
    //         dots: false,
    //         arrows: false,
    //         centerMode: true,
    //         focusOnSelect: true,
    //         autoplay: true,
    //         autoplaySpeed: 1500,
    //         centerPadding: "60px",
    //         responsive: [{
    //             breakpoint: 1300,
    //             settings: {arrows: false, centerMode: true, centerPadding: "40px", slidesToShow: 6}
    //         }, {
    //             breakpoint: 1024,
    //             settings: {arrows: false, centerMode: true, centerPadding: "40px", slidesToShow: 5}
    //         }, {
    //             breakpoint: 980,
    //             settings: {arrows: false, centerMode: true, centerPadding: "10px", slidesToShow: 4}
    //         }, {
    //             breakpoint: 640,
    //             settings: {arrows: false, centerMode: true, centerPadding: "40px", slidesToShow: 3}
    //         }]
    //     });
    // } // -clients slider



});
