/*
 * Получение GET и POST запросов
 */
const http = require("http");
const url = require("url");

http
  .createServer((request, response) => {
    if (request.method === "GET") {
      console.log(request.method);
      const urlRequest = url.parse(request.url, true);
      console.log("urlRequest", urlRequest);
      console.log(urlRequest.query.test);
      if (urlRequest.query.test % 2 === 0) {
        response.end("AAAAA");
      } else {
        response.end("BBBBB");
      }
    } else if (request.method === "POST") {

    }
  })
  .listen(3000);
