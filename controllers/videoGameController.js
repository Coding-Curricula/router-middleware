const videoGames = [
    {
        id: 1,
        name: 'Call of Duty: Modern Warfare',
        genre: 'FPS',
        rating: 4.5
    },
    {
        id: 2,
        name: 'The Legend of Zelda: Breath of the Wild',
        genre: 'Action-adventure',
        rating: 5
    },
    {
        id: 3,
        name: 'Super Mario Odyssey',
        genre: 'Platformer',
        rating: 4.8
    },
]

// GET - get all video games - /api/v1/video-games - PUBLIC
const getVideoAllGames = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: videoGames
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// GET - get single video game by id - /api/v1/video-games/:id - PUBLIC
const getVideoGame = (req, res) => {
    try {
        const videoGame = videoGames.find(videoGame => videoGame.id === parseInt(req.params.id))
        if (!videoGame) {
            throw Error(`Video game with id ${req.params.id} not found`)
        }

        res.status(200).json({
            success: true,
            data: videoGame
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// POST - add new video game - /api/v1/video-games - PRIVATE
const addVideoGame = (req, res) => {
    try {
        const { name, genre, rating } = req.body

        if (!name || !genre || !rating) {
            throw Error('Please provide name, genre and rating')
        }

        const newVideoGame = {
            id: videoGames.length + 1,
            name,
            genre,
            rating
        }

        videoGames.push(newVideoGame)

        res.status(201).json({
            success: true,
            data: newVideoGame
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// PUT - update video game - /api/v1/video-games/:id - PRIVATE
const updateVideoGame = (req, res) => {
    try {
        const { name, genre, rating } = req.body

        if (!name || !genre || !rating) {
            throw Error('Please provide name, genre and rating')
        }

        const videoGame = videoGames.find(videoGame => videoGame.id === parseInt(req.params.id))
        if (!videoGame) {
            throw Error(`Video game with id ${req.params.id} not found`)
        }

        videoGame.name = name
        videoGame.genre = genre
        videoGame.rating = rating

        res.status(200).json({
            success: true,
            data: videoGame
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

// DELETE - delete video game - /api/v1/video-games/:id - PRIVATE
const deleteVideoGame = (req, res) => {
    try {
        const videoGame = videoGames.find(videoGame => videoGame.id === parseInt(req.params.id))
        if (!videoGame) {
            throw Error(`Video game with id ${req.params.id} not found`)
        }

        const index = videoGames.indexOf(videoGame)
        videoGames.splice(index, 1)

        res.status(200).json({
            success: true,
            data: videoGames
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}

module.exports = {
    getVideoAllGames,
    getVideoGame,
    addVideoGame,
    updateVideoGame,
    deleteVideoGame
}

