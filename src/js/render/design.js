import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import 'slick-carousel'
import {Status} from '../model'
import Banner from './banner'


export default function (data) {
        const element1 = document.querySelector('#banner-design')
        Banner(data,element1)

        const element2 = document.querySelector('#design-area')
        if(element2 == undefined )return
            m.render(element2,data.list.filter(item=>{
                return item.keyword.some(keyword=>{return keyword == Status.design.keyword})
            }).map(items=>{ 
                return m('div',{
                    class: 'design-sec2_video-row-col'
                },[
                    items.article.map(item=>{
                        return m('div',{
                            class: `design-sec2_video-row-col-figure ${(items.article.length > 1)? 'list': ''}`
                        },[ 
                            m('figure',[
                                m('.img',{
                                    class: `${(item.type === 'youtube')? 'video': ''} ${(items.article.length > 1) ? 'list' : ''}`,
                                },[
                                    m('img', {
                                        src: item.src,
                                        alt: item.title,
                                    }),
                                ]),
                                (item.heading)?m('h4',[
                                    m.trust(item.heading)
                                ]):'',                                
                                m('p',[ 
                                    m('a',{
                                        //target: '_blank',
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