console.log('Client side file loaded')

var result = document.getElementById('info');
var result_feel = document.getElementById('feels')
var x = document.getElementById('weather-form').addEventListener('submit', (e) => {
    e.preventDefault()
    var loc = document.getElementById('weather-form--input').value;

    result.innerHTML = "Loading..."

    fetch(`http://localhost:3000/api?q=${loc}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                result.innerHTML = (`${data.error.message}`)
            }
            else {
                console.log(data)
                result.innerHTML = (`Todays temperature is ${data.current.temp_c}°c with ${data.current.condition.text} condition in ${data.location.name}, ${data.location.region}, ${data.location.country}`)
                result_feel.innerHTML = (`However it feels like ${data.current.feelslike_c}°c out there.`)
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