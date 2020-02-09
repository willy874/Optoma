import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default function (data) {
    const element1 = document.querySelector('#banner-applications')
    if (element1 != undefined) {
        m.render(element1, [
            data.banner.map(item => {
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
                        m('h2', item.heading),
                        m('h3', item.description)
                    ])

                ]) : (item.type === "youtobe") ? m('div', {
                    class: 'silck-item'
                }, [
                    m('div', {
                        class: 'silck-item-video'
                    }, [
                        m('iframe[allowfullscreen]', {
                            src: `https://www.youtube.com/embed/${item.src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop()}`,
                            frameborder: 0,
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
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
        $('#banner-applications').slick({
            dots: true,
            infinite: true,
            autoplay: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
        })
        
    }
    const element2 = document.querySelector('#navbar-applications')
    if (element2 != undefined) {
        m.render(element2, [
            data.navbar.map(item => {
                return m('div', {
                    class: 'silck-item'
                }, [
                    m('h3', [
                        m('a', {
                            'data-scroll': 'true',
                            href: item.href,
                            title: item.title
                        }, item.heading)
                    ])
                ])
            })

        ])
        $('#navbar-applications').slick({
            dots: false,
            infinite: true,
            autoplay: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }]
        })
    }
}