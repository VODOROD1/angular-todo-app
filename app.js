const fs = require("fs")
const express = require("express")
const authRoutes = require('./routes/auth')

const app = express()

// Конкатинируем url импортированного роутинга с началом целого url
app.use('/api/auth', authRoutes)

module.exports = app
