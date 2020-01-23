import m from 'mithril'
import $ from 'jquery/src/jquery'

export default function(data) {
    const element = document.querySelector('#social-link')
        if(data.msg =="false" ) return; 
        if(element == undefined ) return;
        const hash = window.location.hash
        m.render(element,[
            m('div',{
                class: 'social-main-container-tab'
            },[
                m('div',{
                    class: 'social-main-container-tab-navbar'
                },[
                    m('div',{
                        class: 'social-main_navbar-row'
                    },[
                        data.social.map((item,index)=>{
                            const active = (`${hash}` === `#${item.id}`)? true : (`${item.id}` === 'facebook' && (hash === undefined || hash === null || hash === ''))
                            return m('div',{
                                class: 'social-main_navbar-row-col'
                            },[ 
                                m('figure',{
                                    id: `${item.id}`,
                                    class: (active)?'active':'',
                                    'data-index': index
                                },[
                                    m('a',{
                                        href: item.icon.href,
                                        title: item.icon.title
                                        ,
                                    onclick: (e)=>{
                                        $(`.social-main_navbar-row-col figure`).removeClass('active')
                                        $(e.target).parent().addClass('active')
                                        $('html,body').stop().animate({scrollTop: $('.social-main-container-tab-navbar').position().top});
                                        if($(`#${item.id}`).is(':visible')){ $(`#${item.id}`).trigger('click'); }
                                        $('.social-main_pagination-panels').css('transform',`translateX(-${$(`#${item.id}`).attr('data-index')*100}%)`)
                                    }
                                    },[
                                        m('img',{
                                            src: item.icon.src.disabled,
                                            alt: item.icon.alt.disabled
                                        }),
                                        m('img',{
                                            class: 'active',
                                            src: item.icon.src.active,
                                            alt: item.icon.alt.active
                                        })
                                    ])
                                ])
                            ])
                        })    
                    ])
                ]),
                m('div',{
                    class: 'social-main-container-tab-pagination'
                },[
                    m('div',{
                        class: 'social-main_pagination-panels',
                    },[
                        data.social.map(item=>{
                            return m('div',{
                                class: 'social-main_pagination-panels-row'
                            },[ 
                                item.link.map(link=>{
                                    return m('div',{
                                        class: 'social-main_pagination-panels-row-col'
                                    },[ 
                                        m('figure',{
                                            class: '',
                                            style: `background-image: url(${link.src})`
                                        },[ 
                                            m('h4',{
                                                class: ''
                                            },[ 
                                                m('a',{
                                                    href: link.href,
                                                    title: link.title
                                                },link.heading)
                                            ])
                                        ])
                                    ])
                                })    
                            ])
                        })    
                    ])
                ])
            ])

            
        ])
        $('.social-main_pagination-panels').css('transform',`translateX(-${$(hash).attr('data-index')*100}%)`)
}