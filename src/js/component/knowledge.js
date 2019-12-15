import m from 'mithril'
import VideoSearch from './video-search'

$.ajax({
    url: './data/video.json', 
    dataType: 'json', 
    async: true,
    type: 'GET',
    success: function(data){
        window.videoSearch.data.knowledge = data.knowledge
    },
    error: function() {
        console.log('ajax:',ajaxUrl,'，載入失敗')
    }
});

const domElement = document.querySelector('#video-search')
if(domElement != undefined) m.mount(domElement, VideoSearch)     