import m from 'mithril'

export default {
    url: './data/name.json', 
    dataType: 'json', 
    async: true,
    type: 'GET',
    beforeSend: function() {
    },
    complete: function(data) {
        if( data.msg =="false" ) return
    },
    success: function(data) {
        if( data.msg =="false" ) return; 
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
}