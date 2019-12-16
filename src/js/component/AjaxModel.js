import $ from 'jquery/src/jquery'
import m from 'mithril'
const ajaxUrl = './data/video.json'
const ajaxType = 'json'
const ajaxMethod = 'GET'
const beforeSendFu = function() {
}
const completeFu = function(data) {
    if( data.msg =="false" ) return
}
const successFu = function(data) {
    if( data.msg =="false" ) return; 
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
    complete: completeFu,
    success: successFu,
    error: errorFu
});