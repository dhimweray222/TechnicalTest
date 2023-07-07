const express = require('express')
const router = express.Router()
const listRoutes = require('./taskRoutes')
const errorHandler = require('../helpers/error_handler')
// router.use('/login', authRoutes)
// router.use('/todos', todoRoutes)
router.use('/list', listRoutes)
router.use(errorHandler);

module.exports = router
