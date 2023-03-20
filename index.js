const app = require('./app')
// Сможем задавать значение порта через консоль
const port = process.env.PORT || 5000

// Запускаем порт
app.listen(port, () => {

    console.log(`Server has been started on port ${port}!!!`)
    // response.send("<h2>Привет Express!</h2>")
    function tribonacci(signature,n){
        let resultArr = []
        
        
        if(signature.length > n) {
          while(n > 0) {
            console.log("signature.length", signature[signature.length -1 - n])
            resultArr.push(signature[signature.length -1 - n])
            --n
          }
        } else {
            n -= 3
            resultArr = [...signature]
        }
        
        while(n > 0) {
          --n
          let newElem = resultArr[resultArr.length-3] +
              resultArr[resultArr.length-2] +
              resultArr[resultArr.length-1]
          resultArr.push(newElem)
        }
        
        return resultArr
      }
    let result = tribonacci([1,1,1], 1)
    console.log('RESULT',result)

})
