import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default function(data) {
        const element1 = document.querySelector('.home-sec5-container-row')
        if( element1 != undefined){ 
            m.render(element1,[
                data.design.map(item=>{
                    return m('div',{
                        class: 'home-sec5-container-row-col',
                    },[
                        m('figure',[
                            m('a',{
                                //target: '_blank',
                                href: item.url,
                                title: item.title
                            },[
                                m('img', {
                                    src: item.src,
                                    alt: item.title
                                })
                            ])
                        ])
                    ])
                })
            ])
        }

        const element2 = document.querySelector('#silck-applications')
        if( element2 != undefined){ 
            m.render(element2,[
                data.applications.map(item=>{
                    return m('div',{
                        class: 'silck-item'
                    },[
                        m('figure',[
                            m('a',{
                                href: item.href,
                                title: item.title
                            },[
                                m('img',{
                                    src: item.src
                                })
                            ])
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
                 slidesToScroll: 3,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>',
                 responsive: [{
               
                     breakpoint: 1200,
                     settings: {
                       slidesToShow: 2,
                       slidesToScroll: 2,
                     }
               
                   }, {
               
                     breakpoint: 768,
                     settings: {
                       slidesToShow: 1,
                       slidesToScroll: 1,
                     }
               
                   }]
               })    
        }
}