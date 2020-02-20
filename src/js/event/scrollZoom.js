import $ from 'jquery/src/jquery'

export default  function (){
    if ($('.home-sec2').isInViewport() && window.innerWidth >= 1600){
        const bgsize =  (window.scrollY < 800)? 145 - (window.scrollY / 10) : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
    if ($('.home-sec2').isInViewport() && window.innerWidth < 1600 && window.innerWidth >= 1200){
        const bgsize =  (window.scrollY < 700)? 135 - (window.scrollY / 10) : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
    if ($('.home-sec2').isInViewport() && window.innerWidth < 1200){
        const bgsize =  (window.scrollY < 600)? 125 - (window.scrollY / 10) : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
}