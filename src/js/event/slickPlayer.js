import $ from 'jquery/src/jquery'
import uuid from 'uuid'

const banner = '.silck-banner'
const video = $('.silck-item-video-iframe')

window.onYTAPIReady = () => {
    for (let i = 0; i < video.length; i++) {
        const id = uuid()
        const videoId = video[i].dataset.videoid
        video[i].id = id
        video[i].player = new YT.Player(id, {
            videoId: videoId,
            events: {
                'onReady': (e) => {
                    e.target.mute().playVideo()
                },
                'onStateChange': (e) => {
                    const active = $(e.target.a).hasClass('active')
                    if (e.data === 1 && !active) {
                        e.target.stopVideo()
                    }
                    if (e.data === 0 && active) {
                        $(banner).slick('slickNext')
                    }
                },
            }
        })
    }
}

$(banner).on('afterChange', function (event, slick, index) {
    const e = {
        event: event,
        slick: slick,
        currentSlide: index,
    }
    let playVideoBoolen = true
    const iframe = $(banner + ' .slick-slide.slick-active iframe')
    if (iframe.length === 1) {
        iframe.addClass('active')
        for (let i = 0; i < video.length; i++) {
            if (iframe[0].id === video[i].id) {
                playVideoBoolen = false
                video[i].player.mute().playVideo()
            }
        }
    }
    if (playVideoBoolen) {
        setTimeout(() => {
            $(banner).slick('slickNext')
        }, 5000);
    }
})
$(banner).on('beforeChange', function (event, slick, index) {
    const e = {
        event: event,
        slick: slick,
        currentSlide: index,
    }
    const iframe = $(banner + ' .slick-slide.slick-active iframe')
    if (iframe.length === 1) {
        iframe.removeClass('active')
        for (let i = 0; i < video.length; i++) {
            if (iframe[0].id === video[i].id) {
                video[i].player.stopVideo()
            }
        }
    }
})

