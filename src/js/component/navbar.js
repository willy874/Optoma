import $ from 'jquery/src/jquery'
import m from 'mithril'

//ajax載入setting

const ajaxUrl = './data/article.json'
const ajaxType = 'json'
const ajaxMethod = 'GET'
//ajax載入的處理
const successFu = function(data) {
    if( data.msg =="false" ) return
    
    m.render(document.querySelector('#navbar-main'), [
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
            }, data.article.map(node => {
                return (node.hasOwnProperty('childrenNode'))? m('li',{
                        class: 'header_navbar-ul-dropdown'
                    },[
                        m('a',{
                            class: 'header_navbar-ul-li-link',
                            'data-toggle': 'dropdown',
                            'data-switch': 'false'
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
                                    href: childrenNode.href
                                }, childrenNode.nodeName)
                            ])
                        }))
                    ]):m('li', {
                        class: 'header_navbar-ul-li'
                    }, [
                        m('a', {
                            class: 'header_navbar-ul-li-link',
                            title: node.title,
                            href: node.href
                        }, node.nodeName)
                    ])
            }))
        ])
    ])




    // jquery 方法
    // const $navbar = $('.header_navbar-ul')
    // data.article.forEach(node => {
    //     if (node.hasOwnProperty('childrenNode')) {
    //         $navbar.html('')
    //         $navbar.append(`
    //         <li class="header_navbar-ul-dropdown">
    //             <a class="header_navbar-ul-li-link">${node.nodeName}</a>
    //             <ul class="header_dropdown-ul" id="node-${node.nodeId}"></ul>
    //         </li>`)
    //         const $navbarDropdown = $(`#node-${node.nodeId}`)
    //         node.childrenNode.forEach(childrenNode => {
    //             $navbarDropdown.append(`
    //             <li class="header_dropdown-ul-li">
    //                 <a class="header_dropdown-ul-li-link" title="${childrenNode.title}" href="${childrenNode.href}">${childrenNode.nodeName}</a>
    //             </li>`)
    //         })
    //     } else {
    //         $navbar.html('')
    //         $navbar.append(`
    //         <li class="header_navbar-ul-li">
    //             <a class="header_navbar-ul-li-link" title="${node.title}" href="${node.href}">${node.nodeName}</a>
    //         </li>`)
    //     }
    //  });
}
const errorFu = function() {
    console.log('ajax:',ajaxUrl,'，navbar載入失敗')
}

$.ajax({
    url: ajaxUrl, 
    dataType: ajaxType, 
    async: true,
    type: ajaxMethod,
    success: successFu,
    error: errorFu
});

