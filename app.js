const apiCall = require('./utils/api-call');
const api = require('./utils/api-call');

let location = 'lucknow';

api(process.argv[2].split(' ').join('-'), (response) => {
    console.log(response)
})
