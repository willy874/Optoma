import * as Models from '../model'
import $ from 'jquery/src/jquery'
import 'jquery.animate-number/jquery.animateNumber.min'

const hasRender = {
    VisionMission: false,
    leadingThrough: false,
    coreValues: false,
    corporate: false,
}
$.fn.isInViewport = function () {
    if($(this).length === 0)return
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).scroll(function(){

    if ($('.home-sec4').isInViewport() && !hasRender.leadingThrough){
        hasRender.corporate = true
        $('.home-sec4-bgLower').addClass('animate')
    }


    if ($('.about-sec2').isInViewport() && !hasRender.VisionMission){
        hasRender.VisionMission = true
        $('.about-sec2-container-display-row-text-heading').addClass('animate')
        $('.about-sec2-container-display-row-text-heading').addClass('animate')
    }
    if ($('.about-sec3').isInViewport() && !hasRender.coreValues){
        hasRender.coreValues = true
        $('.about-sec3-graphics-center').addClass('animate')
        $('.about-sec3-graphics-center-heading').addClass('animate')
    }
    if ($('.about-sec5').isInViewport() && !hasRender.corporate){
        hasRender.corporate = true
        $('#countries').animateNumber({
            number: 159,
        },2500)
        $('#centers-worldwide').animateNumber({
            number: 204,
        },2500)
        $('#brandworldwide').animateNumber({
            number: 1,
        },500)
        $('#home-segment').animateNumber({
            number: 3,
        },1500)
    }
    
    
})