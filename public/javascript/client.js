console.log('Client side file loaded')

var result = document.getElementById('info');

var x = document.getElementById('weather-form').addEventListener('submit', (e) => {
    e.preventDefault()
    var loc = document.getElementById('weather-form--input').value;

    result.innerHTML = "Loading..."

fetch(`https://api.weatherapi.com/v1/current.json?key=b7833d2613ff47a1a80220536201809&q=${loc}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            result.innerHTML = (`${data.error.message}`)
        }
        else{
            result.innerHTML = (`Todays temperature is ${data.current.temp_c}°c with ${data.current.condition.text} condition in ${data.location.name}, ${data.location.region}, ${data.location.country}`)
        }
    })
})
})

// var x = (req.query.q?req.query.q:'unknown')
//     api(x.split(' ').join('-'), (response) => {
//         res.send({'query': req.query.q,
//                   'weather': response,
//         })
//     })