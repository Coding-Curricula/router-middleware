// importing dependencies
const express = require('express')
const morgan = require('morgan')

// importing middleware
const auth = require('./middleware/auth')

// creating an instance of express
const app = express()

// setting up port
const PORT = 8080

// middleware
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// import routes
const exampleRoutes = require('./routes/exampleRoutes')
const videoGameRoutes = require('./routes/videoGameRoutes')

// use routes
app.use('/examples', exampleRoutes)
app.use('/api/v1/video-games', videoGameRoutes)

// POST - login user - /api/v1/login - PUBLIC
app.post('/api/v1/login', auth, (req, res) => {
    try {
        const { username, password } = req.body;

        res.status(200).json({
            success: true,
            data: {
                username,
                password
            }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
})






// listen on port
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});