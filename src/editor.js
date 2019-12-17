import $ from 'jquery/src/jquery'
import 'jquery-migrate/dist/jquery-migrate.min'
import '../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
//import 'jquery.animate-number/jquery.animateNumber.min'

import Navbar from './js/component/navbar'
$.ajax(Navbar)
import Slick from './js/component/slick'
$.ajax(Slick)
import Design from './js/component/design'
$.ajax(Design)
import Knowledge from './js/component/knowledge'
$.ajax(Knowledge)

import './js/event/click'


 