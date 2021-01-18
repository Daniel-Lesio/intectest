

const LinksList = [
    {
        name : 'Home',
        url : '/Home'
    },
    {
        name : 'News',
        url : '/News'
    },
    {
        name : 'About Us',
        url : '/About'
    },
    {
        name : 'References',
        url : '/References'
    },
    {
        name : 'Case Study',
        url : '/Cases'
    },
    {
        name : 'Services',
        url : '/Services'
    },
    {
        name : 'Career',
        url : '/Career'
    },
    {
        name : 'Contact Us',
        url : '/Contact'
    },
]





const fs = require('fs')
const path = require('path')
const data = JSON.stringify(LinksList)
fs.writeFileSync('links.json',data)