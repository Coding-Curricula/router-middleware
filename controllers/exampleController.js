const cb0 = function (req, res, next) {
    console.log('CB0')
    // res.send('Hello from A!')
    next()
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

module.exports = {
    cb0,
    cb1,
    cb2,
    middleware
}