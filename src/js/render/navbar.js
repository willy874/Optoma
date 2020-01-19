import m from 'mithril'

export default function(data) {
    const element = document.querySelector('#navbar-main')
    if( element == undefined) return
    m.render(element, [
        m('nav',{
            class: 'header-container-navbar'
        },[
            m('div',{
                class: 'header_navbar-logo'
            },[
                m('a', {
                    title: 'back home',
                    href: './index.php'
                }, [
                    m('img', {
                        src: './images/optoma-logo.png'
                    })
                ])
            ]),
            m('button[type="button"]', {
                class: 'header_navbar-btn',
                'data-toggle':"navbar-collapse",
                'data-target':"#navbar-menu",
                'data-switch':"false",
            },[
                m('span',{class: 'header_navbar-btn-icon'})
            ]),
            m('ul', {
                id: 'navbar-menu',
                class: 'header_navbar-ul'
            }, data.node.map(node => {
                return (node.hasOwnProperty('childrenNode'))? m('li',{
                        class: 'header_navbar-ul-dropdown'
                    },[
                        m('a',{
                            class: 'header_navbar-ul-li-link',
                            'data-toggle': 'dropdown',
                            'data-switch': 'false',
                        }, node.nodeName),
                        m('ul',{
                            class: 'header_dropdown-ul',
                            id: `node-${node.nodeId}`
                        }, node.childrenNode.map(childrenNode => {
                            return m('li',{
                                class: 'header_dropdown-ul-li'
                            },[
                                m('a',{
                                    class: 'header_dropdown-ul-li-link',
                                    title: childrenNode.title,
                                    href: childrenNode.href,
                                }, childrenNode.nodeName)
                            ])
                        }))
                    ]):m('li', {
                        class: 'header_navbar-ul-li'
                    }, [
                        m('a', {
                            class: 'header_navbar-ul-li-link',
                            title: node.title,
                            href: node.href,
                        }, node.nodeName)
                    ])
            }))
        ])
    ])
}