const hrefUrl = window.location.href
const hostName = window.location.hostname
const ajaxUrl = './data/designHome.json'

export default {
    design: {
        url:'./data/design.json',
        method: 'GET',
        fileType: 'json',
    },
    node: {
        url:'./data/node.json',
        method: 'GET',
        fileType: 'json',
    },
    slick: {
        url:'./data/slick.json',
        method: 'GET',
        fileType: 'json',
    },
    knowledge: {
        url:'./data/knowledge.json',
        method: 'GET',
        fileType: 'json'
    },
    innovation: {
        url:'./data/innovation.json',
        method: 'GET',
        fileType: 'json'
    },
    worldwide: {
        url:'./data/worldwide.json',
        method: 'GET',
        fileType: 'json'
    },
    social: {
        url:'./data/social.json',
        method: 'GET',
        fileType: 'json'
    },
    detail: {
        url:'./data/detail.json',
        method: 'GET',
        fileType: 'json'
    },
    designHome: {
        url: (window.location.host === 'localhost')?'./data/designHome.json': ajaxUrl,
        method: 'GET',
        fileType: 'json'
    },
}