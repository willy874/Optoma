$(document.body).on('click', function (e) {

    const $this = $(e.target)

    if ($this.attr('data-toggle') == 'dropdown') {
        if ($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $this.parent().addClass('active').children('.header_dropdown-ul').stop(false, false).slideDown()
        } else {
            $this.attr('data-switch', 'false')
            $this.parent().removeClass('active').children('.header_dropdown-ul').stop(false, false).slideUp()
        }
    } else {
        $('.header_navbar-ul-li-link').attr('data-switch', 'false')
        $('.header_navbar-ul-dropdown').removeClass('active').children('.header_dropdown-ul').stop(false, false).slideUp()
    }

    if ($this.attr('data-toggle') == 'navbar-collapse'){
        if($this.attr('data-switch') == 'false') {
            $this.attr('data-switch', 'true')
            $($this.attr('data-target')).addClass('active')
            $this.addClass('active')
        }else{
            $this.attr('data-switch', 'false')
            $($this.attr('data-target')).removeClass('active')
            $this.removeClass('active')
        }
    }
})