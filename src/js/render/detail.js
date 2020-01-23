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
                        m('img', {
                            src: item.src,
                            alt: item.title,
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

