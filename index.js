const app = require('./app')
// Сможем задавать значение порта через консоль
const port = process.env.PORT || 5000

// Запускаем порт
app.listen(port, () => {
    console.log(`Server has been started on port ${port}!!!`)
    // response.send("<h2>Привет Express!</h2>")
})

