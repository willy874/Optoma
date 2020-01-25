import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import {Status} from '../model'

const renderKnowledge = (element, dataJson) =>{
    m.render(element,dataJson.list.filter(item=>{
        return item.keyword.some(keyword=>{
            if(Status.knowledge.keyword === 'All') return true
            return keyword == Status.knowledge.keyword
        })
    }).map(items=>{ 
        return m('div',{
            class: 'knowledge-sec2_video-row-col'
        },[
            items.article.map(item=>{
                return m('div',{
                    class: `knowledge-sec2_video-row-col-figure ${(items.article.length > 1) ? 'list' : ''}`,
                },[ 
                    m('figure',[
                        m('.img',{
                            class: `${(item.type === 'youtube')? 'video': ''}`,
                        },[
                            m('img', {
                                src: item.src,
                                alt: item.title,
                            }),
                        ]),
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


export default function(data) {
    const element1 = document.querySelector('#knowledge-area')
    if(element1 != undefined ){
        renderKnowledge(element1,data)
    }
    const element2 = document.querySelector('.popup-main')
    if(element2 != undefined ){
        m.render(element2,
            data.keyword.map(item => {
                return m('button', {
                    id: item,
                    onclick: (e) =>{
                        $('#popup').removeClass('popup-show');
                        $('#popup').addClass('popup-hide');
                        Status.knowledge.keyword = item
                        $('#keyword').html(item)
                        renderKnowledge(element1,data)
                    }
                },[
                    m('span',item)
                ])
            })
        )
    }
    
    
}