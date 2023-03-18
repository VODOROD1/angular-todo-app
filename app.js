const fs = require("fs")
const express = require("express")
const app = express()

app.get("/", function(request, response){
  console.log('!!!response!!!',response)
  response.status(200).json({
    message: 'Working'
  })
  // отправляем ответ
  // response.send("<h2>Привет Express!</h2>") 
})

app.listen(3000, () => {
  console.log('Server has been started!')
})

