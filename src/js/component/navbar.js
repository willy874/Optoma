import * as $ from 'jquery/src/jquery'
//ajax載入setting
const ajaxUrl = './data/article.json'
const ajaxType = 'json'
const ajaxMethod = 'GET'
//ajax載入的處理
const beforeSendFu = function() {}
const successFu = function(data) {
    if( data.msg =="false" ) return
    data.article.forEach(node => {
         console.log('node',node)
     });
}
const completeFu = function(data) {
    if( data.msg =="false" ) return
}    
const errorFu = function() {
    console.log('ajax:',ajaxUrl,'，載入失敗')
}

$.ajax({
    url: ajaxUrl, 
    dataType: ajaxType, 
    async: true,
    type: ajaxMethod,
    beforeSend: beforeSendFu,
    success: successFu,
    complete: completeFu,
    error: errorFu
});