import m from 'mithril'
import $ from 'jquery/src/jquery'


export default class VideoSearch{
    constructor(){
        this.search = []
    }
    view(){
        const {
            data
        } = vnode.attrs
        const data = window.videoSearch.knowledge
        return m("div",{
            class: "knowledge-sec2_video"
        }, [
            m("div", {
                class: "knowledge-sec2_video-formGroup"
            }, [
                m('form',[
                    this.search.map(item=>{
                        return m('label')
                    }),
                    m('input')
                ])
            ]),
            m('div',{
                class: 'knowledge-sec2_video-row'
            },[
                data
            ])
        ])
    }
}
