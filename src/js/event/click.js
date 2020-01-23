import {Route} from '../model'


$(document.body).on('click', function (e) {

    const $this = $(e.target)
    if ($this.attr('data-toggle') == 'dropdown') {
        if ($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $this.parent().addClass('active')//.children('.header_dropdown-ul').show()
        } else {
            $this.attr('data-switch', 'false')
            $this.parent().removeClass('active')//.children('.header_dropdown-ul').hide()
        }
    } else {
        $('.header_navbar-ul-li-link').attr('data-switch', 'false')
        $('.header_navbar-ul-dropdown').removeClass('active')//.children('.header_dropdown-ul').hide()
    }
//
    if ($this.attr('data-toggle') == 'navbar-collapse'){
        if($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $($this.attr('data-target')).addClass('active')
            $this.addClass('active')
        }
        else{
             $('.header_navbar-btn').attr('data-switch', 'false')
             $('#navbar-menu').removeClass('active')
             $('.header_navbar-btn').removeClass('active')
        }   
    }else if($this.attr('data-toggle') == 'dropdown'){
    }else{
        $('.header_navbar-btn').attr('data-switch', 'false')
        $('#navbar-menu').removeClass('active')
        $('.header_navbar-btn').removeClass('active')
    }

    if($this.attr('data-scroll') == 'true'){
        const targetTop = $($this.attr('href')).position().top - 50;
        $('html,body').stop().animate({scrollTop:targetTop});
        if($('#navbar-applications').is(':visible')){ $('#navbar-applications').trigger('click'); }          
    }

    if($this.attr('data-toggle') == 'navTab-collapse'){
        if($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $($this.attr('data-target')).stop(false, false).slideDown()
            $this.children('.plus').addClass('active')
        }else{
            $('.applications-container-btn a').attr('data-switch', 'false')
            $($this.attr('data-target')).stop(false, false).slideUp()
            $this.children('.plus').removeClass('active')
        }
    }
    
    if($this.attr('data-social') == 'true' && window.location.search == Route.social){
        e.preventDefault()
        let target = $this.attr('data-target')
        $(`.social-main_navbar-row-col figure`).removeClass('active')
        $(`#${target}`).addClass('active')
        $('html,body').stop().animate({scrollTop: $('.social-main-container-tab-navbar').position().top});
        if($(`#${target}`).is(':visible')){ $(`#${target}`).trigger('click'); }
        $('.social-main_pagination-panels').css('transform',`translateX(-${$(`#${target}`).attr('data-index')*100}%)`)
    }


    //popup
    if ($this.attr('id') === 'popup'){
        $('#popup').removeClass('popup-show');
        $('#popup').addClass('popup-hide');
    }
    if ($this.attr('data-click') === 'popupOpen'){
        $('#popup').removeClass('popup-hide');
        $('#popup').addClass('popup-show');
    }
    if ($this.attr('data-click') === 'popupClose'){
        $('#popup').removeClass('popup-show');
        $('#popup').addClass('popup-hide');
    }
})