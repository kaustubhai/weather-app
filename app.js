const express = require('express')
const path = require('path');
const hbs = require('hbs');
const apiCall = require('./utils/api-call');
const api = require('./utils/api-call');

const app = express();

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
    if(!req.query.q){
    res.render('api', {
        'title': 'API Page',
        'author': 'Kaustubh Mishra'
    })
    }
    else {
        res.render('api', {
            'title': 'API Page',
            'author': 'Kaustubh Mishra',
            'location': req.query.q,
        }) 
    }
})

app.get('/about', (req, res) => {
    res.render('details', {
        'title': 'About Us',
        'author': 'Kaustubh Mishra'
    })
})

app.get('/test', (req, res) => {
    res.send(test);
    // var x = (req.query.q?req.query.q:'unknown')
    // api(x.split(' ').join('-'), (response) => {
    //     res.send({'query': req.query.q,
    //               'weather': response,
    //     })
    // })
})

app.get('*', (req, res) => {
    res.render('404', {
        'title': '404 Error',
        'author': 'Kaustubh Mishra'
    })
})
// let location = 'lucknow';



app.listen(5000)