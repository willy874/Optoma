$('.header_navbar-ul-dropdown').hover(function (){
    $this = $(this).children('.header_navbar-ul-li-link')
    
    if ($this.attr('data-switch') == 'false') {
        $this.attr('data-switch', 'true')
        $this.parent().addClass('active')
    }
},function(){
    $this = $(this).children('.header_navbar-ul-li-link')
    
    if ($this.attr('data-switch') == 'true') {
        $this.attr('data-switch', 'false')
        $this.parent().removeClass('active')
    }
})