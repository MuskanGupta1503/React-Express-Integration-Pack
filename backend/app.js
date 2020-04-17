const express = require('express')
const request = require('request')
const axios = require('axios')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/new', (req, res) => res.send('My new route'))
app.get('/advice', (req, res) => {
    

axios
  .get('https://api.adviceslip.com/advice')
  .then(response => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(response)
    res.send(response.data)
  })
  .catch(error => {
    console.error(error)
    res.send('Server is 404')    
  })
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))