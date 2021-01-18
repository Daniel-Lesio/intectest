const referencesList = [
    {   id : 0,
        name : 'Floating1',
        place : 'Netherlands',
        capacity : '2.5 MW',
        completion : 'completed',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing metus, blandit laoreet eget. Ullamcorper donec mi quis interdum molestie amet id sit pharetra. Id leo ac tempor feugiat vitae arcu platea. Gravida sed sed arcu, at. Ac risus semper sodales condimentum. Nibh non tristique ut volutpat. Consectetur proin ipsum elementum consequat. Ultrices lorem sit nisl.',
        imgs : [
            'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1599819/pexels-photo-1599819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ]
    },
    {
        id : 1,
        name : 'Floating',
        place : 'Netherlands',
        capacity : '2.5 MW',
        completion : 'completed',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing metus, blandit laoreet eget. Ullamcorper donec mi quis interdum molestie amet id sit pharetra. Id leo ac tempor feugiat vitae arcu platea. Gravida sed sed arcu, at. Ac risus semper sodales condimentum. Nibh non tristique ut volutpat. Consectetur proin ipsum elementum consequat. Ultrices lorem sit nisl.',
        imgs : [
            'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1599819/pexels-photo-1599819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ]
    },
    {
        id : 2,
        name : 'Floating',
        place : 'Netherlands',
        capacity : '2.5 MW',
        completion : 'completed',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing metus, blandit laoreet eget. Ullamcorper donec mi quis interdum molestie amet id sit pharetra. Id leo ac tempor feugiat vitae arcu platea. Gravida sed sed arcu, at. Ac risus semper sodales condimentum. Nibh non tristique ut volutpat. Consectetur proin ipsum elementum consequat. Ultrices lorem sit nisl.',
        imgs : [
            'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/1599819/pexels-photo-1599819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'https://images.pexels.com/photos/2800845/pexels-photo-2800845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        ]
    },
]

const fs = require('fs')
const path = require('path')
const data = JSON.stringify(referencesList)
fs.writeFileSync('references.json',data)