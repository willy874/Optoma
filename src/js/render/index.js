import {
    PageData,
    Route
} from '../model'
import Navbar from './navbar'
import Home from './home'
import Ourbraud from './ourbraud'
import About from './about'
import Applications from './applications'
import Innovation from './innovation'
import Design from './design'
import Knowledge from './knowledge'
import Social from './social'
import Detail from './detail'

const search = window.location.search

Navbar(PageData.node)
Home(PageData.home)
Ourbraud(PageData.ourbraud)
About(PageData.about)
Applications(PageData.applications)
Innovation(PageData.innovation)
Design(PageData.design)
Knowledge(PageData.knowledge)
Social(PageData.social)
Detail(PageData.detail)

console.log('PageData',PageData)