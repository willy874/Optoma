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
             $('#banner-applications').slick({
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
                                'data-scroll': 'true',
                                href: item.href,
                                title: item.title
                            },item.heading)
                        ])
                    ])
                })
                
            ])
             $('#navbar-applications').slick({
                 dots: false,
                 infinite: true,
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
        //home about
        const ajaxElement4 = document.querySelector('#silck-about')
        if( ajaxElement4 != undefined){ 
            m.render(ajaxElement4,[
                data.about.map(item=>{
                    return m('div',{
                        class: 'silck-item'
                    },[
                        m('figure',{
                            style:{
                                backgroundImage: `url(${item.src})`
                            }
                        },[
                            m('div',{
                                class: 'year'
                            },[
                                m('a',{
                                    //href: item.href,
                                    title: item.year
                                },item.year)
                            ]),
                            m('figcaption',[
                                m('a',{
                                    //href: item.href,
                                    title: item.title
                                },[m.trust(item.figcaption)])
                            ])
                        ]),
                        
                    ])
                })
                
            ])
             $('#silck-about').slick({
                 dots: true,
                 infinite: false,
                 speed: 300,
                 slidesToShow: 4,
                 slidesToScroll: 1,
                 autoplay: false,
                 centerMode: true,
                 centerPadding: '0px',
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>',
                 responsive: [{
               
                     breakpoint: 1200,
                     settings: {
                       slidesToShow: 3,
                     }
               
                   }, {
               
                     breakpoint: 992,
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
        const ajaxElement5 = document.querySelector('#silck-year')
        if( ajaxElement5 != undefined){ 
            m.render(ajaxElement5,[
                data.about.map((item,index)=>{
                    return m('div',{
                        class: 'silck-item',
                        onclick: (e)=>{
                            $('#silck-about').slick('slickGoTo',index)
                        }
                    
                    },[
                        m('button'),
                        m('span',item.year)
                    ])
                })
                
            ])
             $('#silck-year').slick({
                 dots: false,
                 infinite: false,
                 autoplay: false,
                 speed: 300,
                 slidesToShow: 8,
                 slidesToScroll: 1,
                 prevArrow: '<button type="button" class="slick-prev"></button>',
                 nextArrow: '<button type="button" class="slick-next"></button>'
             }) 
             
        }
        $('#silck-about').slick('slickGoTo',data.about.length - 2)
        //banner ourbraud
        const ajaxElement6 = document.querySelector('#banner-ourbraud')
        if( ajaxElement6 != undefined){ 
            m.render(ajaxElement6,[
                data.bannerOurBraud.map(item=>{
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
        //home Applications
        const ajaxElement7 = document.querySelector('#silck-awards')
        if( ajaxElement7 != undefined){ 
            m.render(ajaxElement7,[
                data.awardsOurBraud.map(item=>{
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
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}

//awards-ourbraud