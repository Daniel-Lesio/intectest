const testimonials = [
    {
        id : 0,
        testimonial : 'It is much appreciated to have a partner with an affable and pragmatic approach to discuss and solve the typical construction issues',
        author : 'Carlos Gómez, Goldbeck Solar'
    },
    {
        id : 1,
        testimonial : 'It is much appreciated to have a partner with an affable and pragmatic approach to discuss and solve the typical construction issues',
        author : 'Carlos Gómez, Goldbeck Solar'
    },
    {
        id : 2,
        testimonial : 'It is much appreciated to have a partner with an affable and pragmatic approach to discuss and solve the typical construction issues',
        author : 'Carlos Gómez, Goldbeck Solar'
    },
    {
        id : 3,
        testimonial : 'It is much appreciated to have a partner with an affable and pragmatic approach to discuss and solve the typical construction issues',
        author : 'Carlos Gómez, Goldbeck Solar'
    },
    
]

const fs = require('fs')
const path = require('path')

const data = JSON.stringify(testimonials)

fs.writeFileSync('testimonials.json',data)