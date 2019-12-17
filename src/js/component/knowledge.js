import m from 'mithril'
import AjaxModel from '../model/ajaxModel'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')

export default {
    url: AjaxModel.video.url, 
    dataType: AjaxModel.video.fileType, 
    async: true,
    type: AjaxModel.video.method,
    success: function(data) {
        const ajaxElement = document.querySelector('#video-area')
        if(data.msg =="false" ) return; 
        if(ajaxElement != undefined){
            m.render(ajaxElement,data.knowledge.map(item=>{
                return m('div',{
                    class: `knowledge-sec2_video-row-col-${item.block}`
                },[ 
                    m('figure',[
                        m('div',{
                            style: {
                                backgroundImage: `url(${item.src})`
                            },
                            alt: item.alt
                        }),
                        m('a[target="_blank"][data-fancybox]',{
                            title: item.title,
                            href: item.url,
                        },[
                            m('h4', item.heading),
                        ]),
                        m('p', item.paragraph)
                    ])
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
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}
