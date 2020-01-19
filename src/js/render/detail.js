import m from 'mithril'

export default function(data){
    const element = document.querySelector('.detail-article-container-row')
        if(element == undefined ) return;
        m.render(element,data.recommend.map(item=>{
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
}

