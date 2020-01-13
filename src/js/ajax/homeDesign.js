import m from 'mithril'
import $ from 'jquery/src/jquery'
require('@fancyapps/fancybox/dist/jquery.fancybox')
import * as Models from '../model'

export default {
    url: Models.Ajax.designHome.url, 
    dataType: Models.Ajax.designHome.fileType, 
    async: true,
    type: Models.Ajax.designHome.method,
    success: function(data) {
        if( data.msg =="false" ) return

        const ajaxElement1 = document.querySelector('.home-sec5-container-row')
        if( ajaxElement1 == undefined) return
            m.render(ajaxElement1,[
                data.home.reverse().map(item=>{
                    return m('div',{
                        class: 'home-sec5-container-row-col',
                    },[
                        m('a',{
                            //target: '_blank',
                            href: item.url,
                            title: item.title
                        },[
                            m('figure',{
                                style:{
                                    backgroundImage: `url(${item.src})`,
                                }
                            })
                        ])
                        
                    ])
                })
            ])
        
            
         
    },
    error: function() {
        console.log('ajax:',Models.Ajax.design.url,'，載入失敗')
    }
}