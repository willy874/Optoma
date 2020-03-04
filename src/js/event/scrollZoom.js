import $ from 'jquery/src/jquery'

export default  function (){
    if ($('.home-sec2').isInViewport() && window.innerWidth >= 1600){
        const bgsize =  (window.scrollY < 800)?( window.scrollY > 600)? 105 - (window.scrollY / 20): 75 : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
    if ($('.home-sec2').isInViewport() && window.innerWidth < 1600 && window.innerWidth >= 1200){
        const bgsize =  (window.scrollY < 700)?( window.scrollY > 500)? 100 - (window.scrollY / 20): 75 : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
    if ($('.home-sec2').isInViewport() && window.innerWidth < 1200){
        const bgsize =  (window.scrollY < 600)?( window.scrollY > 400)? 95 - (window.scrollY / 20): 75 : 65
        $('.home-sec2').css('background-size', `${bgsize}%`)
    }
}