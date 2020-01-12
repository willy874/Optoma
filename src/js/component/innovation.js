import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import * as Models from '../model'

export default {
    url: Models.Ajax.innovation.url, 
    dataType: Models.Ajax.innovation.fileType, 
    async: true,
    type: Models.Ajax.innovation.method,
    success: function(data) {
        if( data.msg =="false" ) return

        const ajaxElement1 = document.querySelector('#innovation-area')
        console.log(ajaxElement1)
        if(ajaxElement1 != undefined ){
            m.render(ajaxElement1,data.list.filter(item=>{
                return item.keyword.some(keyword=>{return keyword == Models.Status.innovation.ajaxCondition})
            }).map(items=>{ 
                return m('div',{
                    class: 'innovation-sec2_video-row-col'
                },[
                    items.article.map(item=>{
                        return m('div',{
                            class: `innovation-sec2_video-row-col-figure ${(items.article.length > 1)? 'list': ''}`
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
        console.log('ajax:',Models.Ajax.innovation.url,'，載入失敗')
    }
}