const express = require('express')
const morgan = require('morgan')

const app = express()

const PORT = 8080

app.use(express.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// import routes
const exampleRoutes = require('./routes/exampleRoutes')
const videoGameRoutes = require('./routes/videoGameRoutes')

// use routes
app.use('/examples', exampleRoutes)
app.use('/api/v1/video-games', videoGameRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});