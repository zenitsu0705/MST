const express = require('express')
const app = express()
app.all((req, res, next) => {
    console.log('Accessing the secret section ...')
    next()
})
app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/home', (req, res) => {
    res.send('home page')
})

app.get('/*', (req, res) => {
    res.send('error 404 page not found')
})

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

app.listen(8080, () => {
    console.log('server started on port 8080')
})
