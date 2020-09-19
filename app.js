const request = require('request');

const url = `http://api.weatherapi.com/v1/current.json?key=b7833d2613ff47a1a80220536201809&q=lucknow`;

request({ url: url, json: true }, (err, res) => {
    if (!err){
        console.log(`Todays temperature is ${res.body.current.temp_c} with ${res.body.current.condition.text} environment`);
    }
})