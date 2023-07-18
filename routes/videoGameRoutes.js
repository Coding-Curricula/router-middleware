const express = require('express')
const router = express.Router()
const videoGameController = require('../controllers/videoGameController')

// import middleware
const auth = require('../middleware/auth')

router.route('/')
    .get(videoGameController.getVideoAllGames)
    .post(videoGameController.addVideoGame, auth)

router.route('/:id')
    .get(videoGameController.getVideoGame)
    .put(videoGameController.updateVideoGame, auth)
    .delete(videoGameController.deleteVideoGame, auth)

module.exports = router