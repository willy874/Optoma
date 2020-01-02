import m from 'mithril'
import AjaxModel from '../model/ajaxModel'

export default {
    url: AjaxModel.photo.url, 
    dataType: AjaxModel.photo.fileType, 
    async: true,
    type: AjaxModel.photo.method,
    success: function(data) {
        const ajaxElement = document.querySelector('.home-sec5-container-row')
        let eachIndex = 0
        if( data.msg =="false" ) return
        if( ajaxElement == undefined) return
        m.render(ajaxElement,[
            data.design.reverse().map(item=>{
                
                if(eachIndex<3) return m('div',{
                    class: 'home-sec5-container-row-col',
                },[
                    m('a',{
                        href: item.href,
                        title: item.title
                    },[
                        m('figure',{
                            style:{
                                backgroundImage: `url(${item.src})`,
                            }
                        })
                    ])
                    
                ])
                eachIndex++
                
            })
            
        ])
         
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}