import m from 'mithril'

const ajaxElement = document.querySelector('#video-search')
class VideoSearch {
    constructor(){
        this.list = []
    }
    ajaxSearch(data){
        //ajax判斷搜尋條件 data = ajaxObject.item
        //變數使用 vnode.state = this
        return true
    }
    oninit(vnode){
        m.request({
            method: "GET",
            url: "./data/video.json",
        })
        .then(function(items) {
            vnode.state.list = items.knowledge
        })
    }
    view(vnode){
        return m("div",{
            class: "knowledge-sec2_video"
        }, [
            m("div", {
                class: "knowledge-sec2_video-formGroup"
            }, [
                m('form',[
                    m('input[type="text"]',{
                        placeholder: 'Search'
                    }),
                    m('button[type="submit"]',{
                        value: ''
                    })
                ])
            ]),
            m('div',{
                class: 'knowledge-sec2_video-row'
            },[
                this.list.map(item=>{
                    if(this.ajaxSearch(item)){
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
                                m('a',{
                                    title: item.title,
                                    href: item.href
                                },[
                                    m('h4', item.heading),
                                ]),
                                m('p', item.paragraph)
                            ])
                        ])
                    }
                }),
            ])
        ])
    }
}

if(ajaxElement != undefined){
    m.route(ajaxElement, "/", {
        "/": VideoSearch
    })
}
