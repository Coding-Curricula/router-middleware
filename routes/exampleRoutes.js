const express = require('express')
const router = express.Router()
const exampleController = require('../controllers/exampleController')

router.get('/c', [exampleController.cb0, exampleController.cb1, exampleController.cb2])

module.exports = router