import m from 'mithril'
import $ from 'jquery/src/jquery'
import * as Models from '../model'

export default {
    url: Models.Ajax.worldwide.url, 
    dataType: Models.Ajax.worldwide.fileType, 
    async: true,
    type: Models.Ajax.worldwide.method,
    success: function(data) {
        const ajaxElement = document.querySelector('.ourbraud-sec5_table-body')
        if(data.msg =="false" ) return; 
        if(ajaxElement == undefined ) return;
        m.render(ajaxElement,data.worldwide.map(item=>{
            return m('div',{
                class: 'ourbraud-sec5_table-body-row'
            },[ 
                m('div',{
                    class: 'ourbraud-sec5_table-body-row-col'
                },[
                    m('a',{
                        href: item.href,
                        title: item.title
                    },item.date)
                ]),
                m('div',{
                    class: 'ourbraud-sec5_table-body-row-col'
                },[
                    m('a',{
                        href: item.href,
                        title: item.title
                    },item.show)
                ]),
                m('div',{
                    class: 'ourbraud-sec5_table-body-row-col'
                },[
                    m('a',{
                        href: item.href,
                        title: item.title
                    },item.locations)
                ])
            ])
        }))
            
        
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}
