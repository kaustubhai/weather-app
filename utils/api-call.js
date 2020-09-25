const request = require('request');

const apiCall = (location, callback) => {

    const url = `http://api.weatherapi.com/v1/current.json?key=b7833d2613ff47a1a80220536201809&q=${location}`;

    request({ url: url, json: true }, (err, res) => {
        if (err)
            callback('No Internet founded')
        else{
            callback(res.body);
        }
    })
}
module.exports = apiCall;

// res.body.error.message
// `Todays temperature is ${res.body.current.temp_c} with ${res.body.current.condition.text} in ${res.body.location.name}, ${res.body.location.region}, ${res.body.location.country}`