const fs = require("fs")
const express = require("express")
const bodyParser = require("body-parser") // подключили пакет для кодировки ulr
const cors = require("cors")
const morgan = require("morgan")
const mongoose = require("mongoose")

const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const categoryRoutes = require('./routes/category')
const orderRoutes = require('./routes/order')
const positionRoutes = require('./routes/position')
// const keys = require('./config/keys')

const app = express()

// mongoose.connect(keys.mongoURI)
//   .then(() => console.log("MongoDB connected!!!"))
//   .catch(error => console.log(error))

// подключаем morgan в режиме разработки
// app.use(morgan('dev'))
// app.use(cors())
// 
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Конкатинируем url импортированного роутинга с началом целого url
app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

//////////////////
// DB Connection
// const mysql = require('mysql2');

// const config = {
//     host     : 'b1gu4pl56h6sg9pj8cav.mdb.yandexcloud.net',
//     port     : 3306,
//     user     : 'user1',
//     password : '13246857',
//     database : 'fullstackPractice',
//     ssl: {
//         rejectUnauthorized: true,
//         ca: fs.readFileSync('/home/<домашняя директория>/.mysql/root.crt').toString(),
//     },
// }

// const conn = mysql.createConnection(config)
// conn.connect(err => {if (err) throw err})
// conn.query('SELECT version()', (err, result, fields) => {
//     if (err) throw err
//     console.log(result[0])
//     conn.end()
// })

///////////////////////////////////////////////////

module.exports = app
