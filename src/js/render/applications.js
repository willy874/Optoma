import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'
import Banner from './banner'


export default function (data) {
    const element1 = document.querySelector('#banner-applications')
    Banner(data,element1)
    
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