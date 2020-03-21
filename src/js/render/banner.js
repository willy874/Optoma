import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default function (data,element){
    if (element != undefined) {
        m.render(element, [
            data.banner.map((item,index) => {
                return (item.type === "image") ? m('div', {
                    class: 'silck-item',
                    style: {
                        backgroundImage: `url(${item.src})`
                    }
                }, [
                    m('figure', [
                        m('mask')
                    ]),
                    m('div', {
                        class: 'silck-item-heading'
                    }, [
                        m('h2', m.trust(item.heading)),
                        m('h3', m.trust(item.description))
                    ])
                ]) : (item.type === "youtobe") ? m('div', {
                    class: 'silck-item'
                }, [
                    m('div', {
                        class: 'silck-item-video'
                    }, [
                        m('div[allowfullscreen]', {
                            class: `silck-item-video-iframe ${(index===0)?'active': '' }`,
                            'data-videoid': item.src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(),
                            //src: `https://www.youtube.com/embed/${item.src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()}`,
                            //frameborder: 0,
                            //allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            title: item.title,
                            style: {
                                width: '100%',
                            }
                        }),
                        m('div', {
                            class: 'silck-item-video-hover'
                        })
                    ])
                ]) : ''

            })

        ])
        
        $(element).slick({
            dots: true,
            infinite: true,
            autoplay: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
        })
        window.timer = setTimeout(() => {
            $(element).slick('slickNext')
        }, 5000);
    }
}