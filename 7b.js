const express = require('express')
const app = express()
const router = express.Router()
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

router.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

app.use('/', router)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

const cookieParser = require('cookie-parser')
app.use(cookieParser())
