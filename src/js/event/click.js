$(document.body).on('click', function (e) {

    const $this = $(e.target)

    if ($this.attr('data-toggle') == 'dropdown') {
        if ($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $('.header_navbar-ul-dropdown').addClass('active').children('.header_dropdown-ul').stop(false, false).slideDown()
        } else {
            $this.attr('data-switch', 'false')
            $('.header_navbar-ul-dropdown').removeClass('active').children('.header_dropdown-ul').stop(false, false).slideUp()
        }
    } else {
        $('.header_navbar-ul-li-link').attr('data-switch', 'false')
        $('.header_navbar-ul-dropdown').removeClass('active').children('.header_dropdown-ul').stop(false, false).slideUp()
    }


})