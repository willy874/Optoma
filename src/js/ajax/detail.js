import m from 'mithril'
import $ from 'jquery/src/jquery'
import * as Models from '../model'

export default {
    url: Models.Ajax.detail.url, 
    dataType: Models.Ajax.detail.fileType, 
    async: true,
    type: Models.Ajax.detail.method,
    success: function(data) {
        const ajaxElement = document.querySelector('#detail')
        if(data.msg =="false" ) return; 
        if(ajaxElement == undefined ) return;
        const ajaxElement1 = document.querySelector('.detail-banner')
        m.render(ajaxElement1,m('div',{
            class: 'detail-banner-container',
            style: {
                backgroundImage: `url(${data.detail.src})`
            }
        }))

        const ajaxElement2 = document.querySelector('.detail-article-container-header')
        m.render(ajaxElement2,[
            m('h2',m.trust(data.detail.heading)),
            m('h3',m.trust(data.detail.figcaption))
        ])

        const ajaxElement3 = document.querySelector('.detail-article-container-content')
        m.render(ajaxElement3,m('p',m.trust(data.detail.paragraph)))
        
        const ajaxElement4 = document.querySelector('.detail-article-container-row')
        m.render(ajaxElement4,data.detail.recommend.map(item=>{
            return m('div',{
                class: 'detail-article-container-row-col'
            },[
                m('div',{
                    class: 'detail-article-container-row-col-figure'
                },[ 
                    m('figure',[
                        m('div.img',{
                            style:{
                                backgroundImage: `url(${item.src})`
                            },
                        }),
                        (item.heading)?m('h4',[
                            m.trust(item.heading)
                        ]):'',                                
                        m('p',[ 
                            m('a',{
                                //target: '_blank',
                                title: item.title,
                                href: item.url,
                            },[
                                m.trust(item.figcaption)
                            ]),
                        ]),
                    ])
                ])
            ])
        }))
            
        
    },
    error: function() {
        console.log('ajax:',Models.Ajax.detail.url,'，載入失敗')
    }
}
