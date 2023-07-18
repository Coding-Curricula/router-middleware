const express = require('express')
const router = express.Router()
const videoGameController = require('../controllers/videoGameController')

router.route('/')
    .get(videoGameController.getVideoAllGames)
    .post(videoGameController.addVideoGame)

router.route('/:id')
    .get(videoGameController.getVideoGame)
    .put(videoGameController.updateVideoGame)
    .delete(videoGameController.deleteVideoGame)

module.exports = router