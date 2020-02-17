import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'
import Banner from './banner'


export default function (data) {
    const element1 = document.querySelector('#banner-ourbraud')
    Banner(data,element1)

    const element2 = document.querySelector('#silck-awards')
    if (element2 != undefined) {
        m.render(element2, [
            data.awards.map(item => {
                return m('div', {
                    class: 'silck-item'
                }, [
                    m('figure', [
                        m('img', {
                            src: item.src,
                            alt: item.alt
                        }),
                    ]),
                    m('h3', [
                        m('span', item.description)
                    ])
                ])
            })

        ])
        $('#silck-awards').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [{

                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }

            }, {

                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            }]
        })
    }

    const element3 = document.querySelector('.ourbraud-sec5_table-body')
    if (element3 != undefined) {
        m.render(element3, data.worldwide.map(item => {
            return m('div', {
                class: 'ourbraud-sec5_table-body-row'
            }, [
                m('div', {
                    class: 'ourbraud-sec5_table-body-row-col'
                }, [
                    m('a', {
                        href: item.href,
                        title: item.title
                    }, item.date)
                ]),
                m('div', {
                    class: 'ourbraud-sec5_table-body-row-col'
                }, [
                    m('a', {
                        href: item.href,
                        title: item.title
                    }, item.show)
                ]),
                m('div', {
                    class: 'ourbraud-sec5_table-body-row-col'
                }, [
                    m('a', {
                        href: item.href,
                        title: item.title
                    }, item.locations)
                ])
            ])
        }))
    }

}