import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import 'slick-carousel'
import {Status} from '../model'

const renderInnovation = (element, dataJson) =>{
    m.render(element, dataJson.list.filter(item => {
        return item.keyword.some(keyword => {
            if (Status.innovation.keyword === 'All') return true
            return keyword == Status.innovation.keyword
        })
    }).map(items => {
        return m('div', {
            class: 'innovation-sec2_video-row-col'
        }, [
            items.article.map(item => {
                return m('div', {
                    class: `innovation-sec2_video-row-col-figure ${(items.article.length > 1)? 'list': ''} ${(item.type === 'youtube')? 'video': ''}`
                }, [
                    m('figure', [
                        m('.img',{
                            class: `${(item.type === 'youtube')? 'video': ''} ${(items.article.length > 1) ? 'list' : ''}`,
                        },[
                            m('img', {
                                src: item.src,
                                alt: item.title,
                            }),
                        ]),
                        (item.heading) ? m('h4', [
                            m.trust(item.heading)
                        ]) : '',
                        m('p', [
                            m('a', {
                                //target: '_blank',
                                title: item.title,
                                href: item.url,
                                "data-fancybox": item.type === 'youtube'
                            }, [
                                m.trust(item.figcaption)
                            ]),
                        ]),
                    ])
                ])
            })
        ])
    }))

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    })
}


export default function (data) {
        const element1 = document.querySelector('#banner-innovation')
        if( element1 != undefined){ 
            m.render(element1,[
                data.banner.map(item=>{
                    return (item.type === "image")? m('div',{
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
                            m('h2',m.trust(item.heading)),
                            m('h3',m.trust(item.description))
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
             $('#banner-innovation').slick({
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


    const element2 = document.querySelector('#innovation-area')
    if (element2 != undefined) {
        
        renderInnovation(element2,data)
        
    }

    const element3 = document.querySelector('.innovation-sec2_video-buttonGroup')
    if (element3 != undefined) {
        m.render(element3, [
            m('button', {
                class: 'active',
                id: 'All',
                onclick: (e) =>{
                    $(`#${Status.innovation.keyword}`).removeClass('active')
                    $('#All').addClass('active')
                    Status.innovation.keyword = 'All'
                    renderInnovation(element2,data)
                }
            },[
                m('span','All')
            ]),
            data.keyword.map(item => {
                return m('button', {
                    id: item,
                    onclick: (e) =>{
                        $(`#${Status.innovation.keyword}`).removeClass('active')
                        $(e.target).addClass('active')
                        Status.innovation.keyword = item
                        renderInnovation(element2,data)
                    }
                },[
                    m('span',item)
                ])
            })
        ])
    }
    
}