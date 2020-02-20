import * as Models from '../model'
import $ from 'jquery/src/jquery'
import 'jquery.animate-number/jquery.animateNumber.min'
import isInViewAnimate from './isInViewAnimate'
import scrollZoom from './scrollZoom'



$(window).scroll(function(){

    isInViewAnimate()
    scrollZoom()

})