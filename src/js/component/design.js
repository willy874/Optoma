import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import * as Models from '../model'

export default {
    url: Models.Ajax.design.url, 
    dataType: Models.Ajax.design.fileType, 
    async: true,
    type: Models.Ajax.design.method,
    success: function(data) {
        if( data.msg =="false" ) return

        const ajaxElement1 = document.querySelector('.home-sec5-container-row')
        let eachIndex = 0
        if( ajaxElement1 != undefined){
            m.render(ajaxElement1,[
                data.home.reverse().map(item=>{
                    if(eachIndex<3) return m('div',{
                        class: 'home-sec5-container-row-col',
                    },[
                        m('a',{
                            href: item.href,
                            title: item.title
                        },[
                            m('figure',{
                                style:{
                                    backgroundImage: `url(${item.src})`,
                                }
                            })
                        ])
                        
                    ])
                    eachIndex++
                })
            ])
        }

        const ajaxElement2 = document.querySelector('#design-area')
        if(ajaxElement2 != undefined ){
            m.render(ajaxElement2,data.list.filter(item=>{
                return item.keyword.some(keyword=>{return keyword == Models.Status.design.ajaxCondition})
            }).map(items=>{ 
                return m('div',{
                    class: 'design-sec2_video-row-col'
                },[
                    items.article.map(item=>{
                        return m('div',{
                            class: `design-sec2_video-row-col-figure ${(items.article.length > 1)? 'list': ''}`
                        },[ 
                            m('figure',[
                                m('img',{
                                    class: (items.article.length > 1)? 'list': '',
                                    alt: item.alt,
                                    src: item.src
                                }),
                                (item.heading)?m('h4',[
                                    m.trust(item.heading)
                                ]):'',                                
                                m('p',[ 
                                    m('a[target="_blank"]',{
                                        title: item.title,
                                        href: item.url,
                                        "data-fancybox": item.type === 'youtube'
                                    },[
                                        m.trust(item.figcaption)
                                    ]),
                                ]),
                            ])
                        ])
                    })
                ])
            }))

            $('[data-fancybox]').fancybox({
                youtube : {
                    controls : 0,
                    showinfo : 0
                },
                vimeo : {
                    color : 'f00'
                }
            })
        }
            
         
    },
    error: function() {
        console.log('ajax:',Models.Ajax.design.url,'，載入失敗')
    }
}