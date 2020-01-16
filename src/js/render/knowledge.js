import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import {Status} from '../model'
export default function(data) {
    const element = document.querySelector('#knowledge-area')
    if(element == undefined ) return;
        m.render(element,data.list.filter(item=>{
            return item.keyword.some(keyword=>{return keyword == Status.knowledge.keyword})
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
    
}