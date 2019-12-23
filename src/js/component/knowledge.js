import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import * as Models from '../model'

export default {
    url: Models.Ajax.article.url, 
    dataType: Models.Ajax.article.fileType, 
    async: true,
    type: Models.Ajax.article.method,
    success: function(data) {
        const ajaxElement = document.querySelector('#video-area')
        if(data.msg =="false" ) return; 
        if(ajaxElement == undefined ) return;
            
            m.render(ajaxElement,data.knowledge.filter(item=>{
                return item.keyword.some(keyword=>{return keyword == Models.Status.knowledge.ajaxCondition})
            }).map(items=>{ 
                return items.article.map(item=>{
                    return m('div',{
                        class: (items.article.length === 1)?`knowledge-sec2_video-row-col-2`:`knowledge-sec2_video-row-col-1`
                    },[ 
                        m('figure',[
                            m('img',{
                                alt: item.alt,
                                src: item.src
                            }),
                            m('a[target="_blank"]',{
                                title: item.title,
                                href: item.url,
                                "data-fancybox": item.type === 'youtube'
                            },[
                                m('h4', item.heading),
                            ]),
                            m('p', item.figcaption)
                        ])
                    ])
                })
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
        
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}
