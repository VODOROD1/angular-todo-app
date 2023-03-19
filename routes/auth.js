const express = require("express")
const authController = require("../controllers/authController")

const router = express.Router()

// localhost:5000/api/auth/login
// router.get('/login', authController.login)
// localhost:500/api/auth/register
// router.get('/register', authController.register)

// localhost:5000/api/auth/login
router.post('/login', authController.login)
// localhost:500/api/auth/register
router.post('/register', authController.register)

module.exports = router
