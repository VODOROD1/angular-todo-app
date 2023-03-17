/*
 * Получение GET и POST запросов
 */
const http = require("http")
const url = require("url")
// const {parseQuerystring} = require("querystring")
const querystring = require('node:querystring');

http
  .createServer((request, response) => {
    if (request.method === "GET") {
      console.log(request.method)
      const urlRequest = url.parse(request.url, true)
      console.log("urlRequest", urlRequest)
      console.log(urlRequest.query.test)
      if (urlRequest.query.test % 2 === 0) {
        response.end("AAAAA")
      } else {
        response.end("BBBBB")
      }
    } else if (request.method === "POST") {
        let body = ''
        request.on('data', chunk => {
            body += chunk.toString()
        })
        request.on('end', () => {
            console.log('body',body)
            let params = querystring.parse(body)
            console.log("params",params)
            response.end('ok')
        })
    }
  })
  .listen(3000)
