/* 
* Получение GET и POST запросов
*/
const http = require("http")
http.createServer((request, response) => {
    response.end('gooo')
}).listen(3000)


