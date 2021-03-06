import m from 'mithril'
import $ from 'jquery/src/jquery'
import 'slick-carousel'

export default function (data) {
    
    const element1 = document.querySelector('#silck-about')
    if (element1 != undefined) {
        
        m.render(element1, [
            data.milestones.map(item => {
                return m('div', {
                    class: 'silck-item',
                }, [
                    m('div',{
                        class: 'silck-item-dispay'
                    },[
                        m('img',{
                            src: item.src,
                            alt: item.year
                        }),
                        m('figure', [
                            m('div', {
                                class: 'year'
                            }, [
                                m('a', {
                                    //href: item.href,
                                    title: item.year
                                }, item.year)
                            ]),
                            m('figcaption', [
                                m('a', {
                                    //href: item.href,
                                    title: item.title
                                }, [m.trust(item.figcaption)])
                            ])
                        ])
                    ]),
                    

                ])
            })

        ])
        $('#silck-about').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            //centerMode: true,
            //centerPadding: '0px',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            responsive: [{

                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }

            }, {

                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }

            }, {

                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }

            }]
        })
        if ($(window).width() > 1200) {
            $('#silck-about').slick('slickGoTo', data.milestones.length-4)
        }else if($(window).width() > 992){
            $('#silck-about').slick('slickGoTo', data.milestones.length-3)
        }else if($(window).width() > 576){
            $('#silck-about').slick('slickGoTo', data.milestones.length-2)
        }else{
            $('#silck-about').slick('slickGoTo', data.milestones.length-1)
        }
        
    }
    const element2 = document.querySelector('#silck-year')
    const year = {
        indexNumber: ''
    }
    if (element2 != undefined) {
        m.render(element2, [
            data.milestones.map((item,index,array) => {
                if (year.indexNumber === item.year ) {
                    year.indexNumber = item.year
                    return
                }
                year.indexNumber = item.year
                return m('div', {
                    class: 'silck-item',
                    onclick: (e) => {
                        let last = 0
                        if ($(window).width() > 1200) {
                            last = 3
                        }else if($(window).width() > 992){
                            last = 2
                        }else if($(window).width() > 576){
                            last = 1
                        }
                        if (index >= array.length-last) {
                            $('#silck-about').slick('slickGoTo', array.length-last-1)
                        }else{
                            $('#silck-about').slick('slickGoTo', index)
                        }
                        
                    }

                }, [
                    m('button'),
                    m('span', item.year)
                ])
            })

        ])
        $('#silck-year').slick({
            dots: false,
            infinite: false,
            autoplay: false,
            touchMove: false,
            draggable: false,
            speed: 300,
            slidesToShow: 8,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        })
        $('#silck-year').slick('slickGoTo', data.milestones.length-8)
        
    }
    
}