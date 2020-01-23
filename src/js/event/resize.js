import * as Models from '../model'


$(window).resize(function(){

    //dropdown 關閉
    $('.header_navbar-ul-li-link').attr('data-switch', 'false')
    $('.header_navbar-ul-dropdown').removeClass('active')
    //navbar 關閉
    $('.header_navbar-btn').attr('data-switch', 'false')
    $('#navbar-menu').removeClass('active')
    $('.header_navbar-btn').removeClass('active')
    
})