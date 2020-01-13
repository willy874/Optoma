import $ from 'jquery/src/jquery'
//import 'jquery-migrate/dist/jquery-migrate.min'
//import 'jquery.animate-number/jquery.animateNumber.min'
import * as Models from './js/model'

Models.Status.knowledge.ajaxCondition = 'knowledge'
Models.Status.design.ajaxCondition = 'design'
Models.Status.innovation.ajaxCondition = 'innovation'

import Navbar from './js/ajax/navbar'
$.ajax(Navbar)
import Slick from './js/ajax/slick'
$.ajax(Slick)
import HomeDesign from './js/ajax/homeDesign'
$.ajax(HomeDesign)

const search = window.location.search
import Design from './js/ajax/design'
if(search === Models.Route.design) $.ajax(Design)
import Knowledge from './js/ajax/knowledge'
if(search === Models.Route.knowledge) $.ajax(Knowledge)
import Innovation from './js/ajax/innovation'
if(search === Models.Route.innovation) $.ajax(Innovation)
import Worldwide from './js/ajax/worldwide'
if(search === Models.Route.ourbraud) $.ajax(Worldwide)
import Social from './js/ajax/social'
if(search === Models.Route.social) $.ajax(Social)
import Detail from './js/ajax/detail'
if(search === Models.Route.detail) $.ajax(Detail)


import './js/event/onload'
import './js/event/click'