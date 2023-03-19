const express = require("express")
const analyticsController = require("../controllers/analyticsController")

const router = express.Router()

// localhost:5000/api/analytics/overview
router.get('/overview', analyticsController.overview)
// localhost:500/api/analytics/analytics
router.get('/', analyticsController.analytics)

// localhost:5000/api/auth/login
// router.post('/login', analyticsController.login)
// localhost:500/api/auth/register
// router.post('/register', analyticsController.register)

module.exports = router