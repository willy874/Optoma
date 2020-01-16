import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default function(data){
    const element1 = document.querySelector('#banner-ourbraud')
        if( element1 != undefined){ 
            m.render(element1,[
                data.banner.map(item=>{
                    return (item.type === "image")?m('div',{
                        class: 'silck-item',
                        style:{
                            backgroundImage: `url(${item.src})`
                        }
                    },[
                        m('figure',[
                            m('mask')
                        ]),
                        m('div',{
                            class: 'silck-item-heading'
                        },[
                            m('h2',item.heading),
                            m('h3',item.description)
                        ])
                        
                    ]):(item.type === "youtobe")? m('div',{
                        class: 'silck-item'
                    },[
                        m('div',{
                            class: 'silck-item-video'
                        },[
                            m('iframe[allowfullscreen]',{
                                src: `https://www.youtube.com/embed/${item.src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()}`,
                                frameborder: 0,
                                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                                title: item.title,
                                style: {
                                    width: '100%',
                                }
                            }),
                            m('div',{
                                class: 'silck-item-video-hover'
                            })
                        ])
                    ]): ''

                })
                
            ])
             $('#banner-ourbraud').slick({
                 dots: true,
                 infinite: true,
                 autoplay: false,
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>',
                 speed: 400,
                 slidesToShow: 1,
                 slidesToScroll: 1,
               })    
        }

        const element2 = document.querySelector('#silck-awards')
        if( element2 != undefined){ 
            m.render(element2,[
                data.awards.map(item=>{
                    return m('div',{
                        class: 'silck-item'
                    },[
                        m('figure',[
                            m('img',{
                                src: item.src,
                                alt: item.alt
                            }),
                        ]),
                        m('h3',[
                            m('span',item.description)
                        ])
                    ])
                })
                
            ])
             $('#silck-awards').slick({
                 dots: true,
                 infinite: true,
                 speed: 300,
                 slidesToShow: 4,
                 slidesToScroll: 4,
                 autoplay: true,
                 autoplaySpeed: 2000,
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>',
                 responsive: [{
               
                     breakpoint: 1200,
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

        const element3 = document.querySelector('.ourbraud-sec5_table-body')
        if(element3 != undefined ){
            m.render(element3,data.worldwide.map(item=>{
                return m('div',{
                    class: 'ourbraud-sec5_table-body-row'
                },[ 
                    m('div',{
                        class: 'ourbraud-sec5_table-body-row-col'
                    },[
                        m('a',{
                            href: item.href,
                            title: item.title
                        },item.date)
                    ]),
                    m('div',{
                        class: 'ourbraud-sec5_table-body-row-col'
                    },[
                        m('a',{
                            href: item.href,
                            title: item.title
                        },item.show)
                    ]),
                    m('div',{
                        class: 'ourbraud-sec5_table-body-row-col'
                    },[
                        m('a',{
                            href: item.href,
                            title: item.title
                        },item.locations)
                    ])
                ])
            }))
        }

}