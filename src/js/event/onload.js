import * as Models from '../model'

$(document).ready(function(){
    const hash = window.location.hash
    const search = window.location.search
    const readyElement1 = ( search != '' && search == Models.Route.applications) ? document.querySelector(hash) : undefined
    if( readyElement1 != undefined){
        $(hash).prev().children('a').attr('data-switch', 'true')     
        $(hash).stop(false, false).slideDown()

        const targetTop = $(hash).position().top - 50;
        if(targetTop)$('html,body').stop().animate({scrollTop:targetTop});
        window.history.pushState('','','?page=applications')
    }
})

