import m from 'mithril'

export default {
    url: './data/photo.json', 
    dataType: 'json', 
    async: true,
    type: 'GET',
    success: function(data) {
        const ajaxElement = document.querySelector('.home-sec5-container-row')
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
         
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}