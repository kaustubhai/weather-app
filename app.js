const express = require('express')
const path = require('path');
const hbs = require('hbs');
const apiCall = require('./utils/api-call');

const app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        'title': 'Homepage',
        'author': 'Kaustubh Mishra'
    })
})

app.get('/api', (req, res) => {
        apiCall(req.query.q, (data) => {
            res.send(data)
        })
})

app.get('/about', (req, res) => {
    res.render('details', {
        'title': 'About Us',
        'author': 'Kaustubh Mishra'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        'title': '404 Error',
        'author': 'Kaustubh Mishra'
    })
})
// let location = 'lucknow';



app.listen(port)