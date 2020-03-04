import * as Models from '../model'
import isInViewAnimate from './isInViewAnimate'
import scrollZoom from './scrollZoom'

$(window).resize(function(){
    
    //dropdown 關閉
    $('.header_navbar-ul-li-link').attr('data-switch', 'false')
    $('.header_navbar-ul-dropdown').removeClass('active')
    //navbar 關閉
    $('.header_navbar-btn').attr('data-switch', 'false')
    $('#navbar-menu').removeClass('active')
    $('.header_navbar-btn').removeClass('active')
    

    // if ($('.applications-container-sec').isInViewport() && $(window).width() >= 768 ){
    //     $('.applications-container-sec').stop(false, false).slideDown(10)
    //     $('.applications-container-btn').children('a').attr('data-switch', 'false')
    //     $('.applications-container-btn').children('a').children('.plus').removeClass('active')
    // }else if($('.applications-container-sec').isInViewport() && $(window).width() < 768 ){
    //     $('.applications-container-sec').stop(false, false).slideUp(10)
    //     $('.applications-container-btn').children('a').attr('data-switch', 'false')
    //     $('.applications-container-btn').children('a').children('.plus').removeClass('active')
    // }

    isInViewAnimate()
    scrollZoom()

})