import $ from 'jquery/src/jquery'
import m from 'mithril'
import 'slick-carousel'


const ajaxUrl = './data/slick.json'
const ajaxType = 'json'
const ajaxMethod = 'GET'
const ajaxElement = document.querySelector('#silck-applications')
const successFu = function(data) {
    if( data.msg =="false" ) return
    if( ajaxElement == undefined) return
    m.render(ajaxElement,[
        data.applications.map(item=>{
            return m('div',{
                class: 'silck-item'
            },[
                m('figure',[
                    m('img',{
                        src: item.src
                    })
                ]),
                m('h3',[
                    m('a',{
                        href: item.href,
                        title: item.title
                    },item.heading)
                ])
            ])
        })
        
    ])
    
     $('#silck-applications').slick({
         dots: true,
         infinite: true,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow: '<button type="button" class="slick-prev"><img alt="prev" src="./images/Manuscript/prev.jpg" alt="prev"></button>',
         nextArrow: '<button type="button" class="slick-next"><img alt="next" src="./images/Manuscript/next.jpg" alt="next"></button>',
         responsive: [{
       
             breakpoint: 991,
             settings: {
               slidesToShow: 2,
             }
       
           }, {
       
             breakpoint: 576,
             settings: {
               slidesToShow: 1,
             }
       
           }]
       })
}
const errorFu = function() {
    console.log('ajax:',ajaxUrl,'，載入失敗')
}
$.ajax({
    url: ajaxUrl, 
    dataType: ajaxType, 
    async: true,
    type: ajaxMethod,
    success: successFu,
    error: errorFu
});