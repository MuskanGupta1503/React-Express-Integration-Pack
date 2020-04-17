const express = require('express')
const request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/new', (req, res) => res.send('My new route'))
app.get('/advice', (req, res) => {
    request('https://api.adviceslip.com/advice', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if(!error){
        res.send(body);
    }
    });
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))