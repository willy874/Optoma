import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import * as Models from '../model'

export default {
    url: Models.Ajax.knowledge.url, 
    dataType: Models.Ajax.knowledge.fileType, 
    async: true,
    type: Models.Ajax.knowledge.method,
    success: function(data) {
        const ajaxElement = document.querySelector('#knowledge-area')
        if(data.msg =="false" ) return; 
        if(ajaxElement == undefined ) return;
            
            m.render(ajaxElement,data.knowledge.filter(item=>{
                return item.keyword.some(keyword=>{return keyword == Models.Status.knowledge.ajaxCondition})
            }).map(items=>{ 
                return m('div',{
                    class: 'knowledge-sec2_video-row-col'
                },[
                    items.article.map(item=>{
                        return m('div',{
                            class: 'knowledge-sec2_video-row-col-figure'
                        },[ 
                            m('figure',[
                                m('div.img',{
                                    style:{
                                        backgroundImage: `url(${item.src})`
                                    },
                                }),
                                m('h4',[
                                    m('a',{
                                        //target: '_blank',
                                        title: item.title,
                                        href: item.url,
                                        "data-fancybox": item.type === 'youtube'
                                    },item.heading),
                                ] ),
                                m('p', item.figcaption)
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
        
    },
    error: function() {
        console.log('ajax:',Models.Ajax.knowledge.url,'，載入失敗')
    }
}
