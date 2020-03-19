import * as Models from '../model'
import $ from 'jquery/src/jquery'
import 'jquery.animate-number/jquery.animateNumber.min'
import isInViewAnimate from './isInViewAnimate'
import scrollZoom from './scrollZoom'



$(window).scroll(function(){

    if(window.scrollY < 400 && $('.gotop-button').isInViewport()){
        $('.gotop-button').fadeOut()
    }
    if(window.scrollY > 400 && !($('.gotop-button').isInViewport())){
        $('.gotop-button').fadeIn()
    }

    isInViewAnimate()
    scrollZoom()
})