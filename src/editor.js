import $ from 'jquery/src/jquery'
//import 'jquery-migrate/dist/jquery-migrate.min'
//import 'jquery.animate-number/jquery.animateNumber.min'
import * as Models from './js/model'
Models.Status.knowledge.ajaxCondition = 'Wireless'


import Navbar from './js/component/navbar'
$.ajax(Navbar)
import Slick from './js/component/slick'
$.ajax(Slick)
import Design from './js/component/design'
$.ajax(Design)
import Knowledge from './js/component/knowledge'
$.ajax(Knowledge)
import Worldwide from './js/component/worldwide'
$.ajax(Worldwide)
import Social from './js/component/social'
$.ajax(Social)

import './js/event/onload'
import './js/event/click'
