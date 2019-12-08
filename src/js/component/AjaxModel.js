import * as $ from 'jquery/src/jquery'

console.log('ajax')
//ajax載入url
const ajaxUrl = './data/article.json'
//ajax載入檔案類型
const ajaxType = 'json'
//ajax載入檔案類型
const ajaxMethod = 'GET'
//ajax載入前的處理
const beforeSendFu = function() {
}
//ajax載入後的處理
const completeFu = function(data) {
    if( data.msg =="false" )
    { 
     return; 
    }
}
//ajax載入成功的處理
const successFu = function(data) {
    if( data.msg =="false" )
    { 
     return; 
    }
    data.forEach(node => {
    });
     
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
    beforeSend: beforeSendFu,
    complete: completeFu,
    success: successFu,
    error: errorFu
});