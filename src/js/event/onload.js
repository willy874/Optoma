import * as Models from '../model'

//const href = window.location.href

$(document).ready(function(){
    //console.log('document ready')
    //console.log('hash',hash)
    //console.log('search',search)
    //console.log('href',href)
    const hash = window.location.hash
    const search = window.location.search
    const readyElement1 = ( search != '' && search == '?page=applications') ? document.querySelector(hash) : undefined
    if( readyElement1 != undefined){
        $(hash).prev().children('a').attr('data-switch', 'true')     
        $(hash).stop(false, false).slideDown()

        const targetTop = $(hash).position().top - 50;
        $('html,body').stop().animate({scrollTop:targetTop});
    }
})

