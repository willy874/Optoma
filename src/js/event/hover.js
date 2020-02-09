$('.header_navbar-ul-dropdown').hover(function (){
    $this = $(this).children('.header_navbar-ul-li-link')
    
    if ($this.attr('data-switch') == 'false' && $(window).width() >= 1200) {
        $this.attr('data-switch', 'true')
        $this.parent().addClass('active')
    }
},function(){
    $this = $(this).children('.header_navbar-ul-li-link')
    
    if ($this.attr('data-switch') == 'true' && $(window).width() >= 1200) {
        $this.attr('data-switch', 'false')
        $this.parent().removeClass('active')
    }
})