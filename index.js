const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = 8080

app.use(express.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

const cb0 = function (req, res, next) {
    console.log('CB0')
    // res.send('Hello from A!')
    // next()
}

const cb1 = function (req, res, next) {
    console.log('CB1')
    // res.send('Hello from B!')
    next()
}

const cb2 = function (req, res) {
    console.log('CB2')
    res.send('Hello from C!')
}

const middleware = function (req, res, next) {
    console.log('Middleware')
    next()
}

app.get('/example/c', [cb0, middleware, cb1, middleware, cb2])

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});