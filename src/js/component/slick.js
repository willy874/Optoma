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
        if( data.msg =="false" ) return
        //home Applications
        const ajaxElement1 = document.querySelector('#silck-applications')
        if( ajaxElement1 != undefined){ 
            m.render(ajaxElement1,[
                data.homeApplications.map(item=>{
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
               
                     breakpoint: 1200,
                     settings: {
                       slidesToShow: 2,
                     }
               
                   }, {
               
                     breakpoint: 768,
                     settings: {
                       slidesToShow: 1,
                     }
               
                   }]
               })    
        }
        //banner Applications
        const ajaxElement2 = document.querySelector('#banner-applications')
        if( ajaxElement2 != undefined){ 
            m.render(ajaxElement2,[
                data.bannerApplications.map(item=>{
                    return m('div',{
                        class: 'silck-item'
                    },[
                        m('figure',[
                            m('img',{
                                src: item.src,
                                alt: item.alt
                            }),
                            m('h2',item.heading),
                            m('h3',item.description)
                        ])
                    ])
                })
                
            ])
             $('#banner-applications').slick({
                 dots: true,
                 infinite: true,
                 speed: 400,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 autoplay: true,
                 autoplaySpeed: 5000,
               })    
        }
        //navbar Applications
        const ajaxElement3 = document.querySelector('#navbar-applications')
        if( ajaxElement3 != undefined){ 
            m.render(ajaxElement3,[
                data.navbarApplications.map(item=>{
                    return m('div',{
                        class: 'silck-item'
                    },[
                        m('h3',[
                            m('a',{
                                href: item.href,
                                title: item.title
                            },item.heading)
                        ])
                    ])
                })
                
            ])
             $('#navbar-applications').slick({
                 dots: false,
                 infinite: false,
                 autoplay: false,
                 speed: 300,
                 slidesToShow: 6,
                 slidesToScroll: 6,
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>',
                 responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                  },{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                  },{
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                  }]
               })    
        }

    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}


/*
<div id="banner-applications">
        <div class="silck-item">
            <figure>
                <img src="" alt="">
                <h2>Applications</h2>
                <h3>Delivering comprehensive bing image solutions that enhance communication and reinforce collaboration.</h3>
            </figure>
        </div>
    </div>   
*/