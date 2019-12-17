import m from 'mithril'
import AjaxModel from '../model/ajaxModel'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default {
    url: AjaxModel.slick.url, 
    dataType: AjaxModel.slick.fileType, 
    async: true,
    type: AjaxModel.slick.method,
    success: function(data) {
        const ajaxElement = document.querySelector('#silck-applications')
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
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}