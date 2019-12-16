import $ from 'jquery/src/jquery'
import m from 'mithril'
//ajax載入url
const ajaxUrl = './data/photo.json'
const ajaxType = 'json'
const ajaxMethod = 'GET'
const ajaxElement = document.querySelector('.home-sec5-container-row')

//ajax載入成功的處理
const successFu = function(data) {
    let eachIndex = 0
    if( data.msg =="false" ) return
    if( ajaxElement == undefined) return
    m.render(ajaxElement,[
        data.design.reverse().map(item=>{
            
            if(eachIndex<3) return m('div',{
                class: 'home-sec5-container-row-col'
            },[
                m('a',{
                    href: item.href,
                    title: item.title
                },[
                    m('img',{
                        src: item.src
                    })
                ])
                
            ])
            eachIndex++
            
        })
        
    ])
     
}
//ajax載入失敗的處理
const errorFu = function() {
    console.log('ajax:',ajaxUrl,'，載入失敗')
}
$.ajax({
    url: ajaxUrl, 
    dataType: ajaxType, 
    async: true,
    type: ajaxMethod,
    success: successFu,
    error: errorFu
});