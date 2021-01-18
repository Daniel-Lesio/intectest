const positions = [
    {
        id : 0,
        position : 'Engineering',
        city : 'Berlin'
    },
    {
        id : 1,
        position : 'Design Engineering',
        city : 'Warsaw'
    },
    {
        id : 2,
        position : 'Lead Engineering',
        city : 'Amsterdam'
    },
    {
        id : 3,
        position : 'Test Automation',
        city : 'Milan'
    },
    {
        id : 4,
        position : 'Mechanical',
        city : 'Cracow'
    },
    {
        id : 5,
        position : 'Lead Engineering',
        city : 'Paris'
    },
    {
        id : 6,
        position : 'Designer',
        city : 'Torino'
    },
    {
        id : 7,
        position : 'Mechanical Engineering',
        city : 'Barcelona'
    },
    {
        id : 8,
        position : 'Engineering Mechanical Designer',
        city : 'Tokyo'
    },
    {
        id : 9,
        position : 'Engineering Lead',
        city : 'Berlin'
    },
]



const fs = require('fs')
const path = require('path')
const data = JSON.stringify(positions)
fs.writeFileSync('positions.json',data)