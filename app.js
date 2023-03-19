const fs = require("fs")
const express = require("express")
const bodyParser = require("body-parser") // подключили пакет для кодировки ulr
const cors = require("cors")
const morgan = require("morgan")

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')

const app = express()

// подключаем morgan в режиме разработки
app.use(morgan('dev'))
// 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Конкатинируем url импортированного роутинга с началом целого url
app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app
