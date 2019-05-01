var express = require("express");
var app = express();
const https = require("https");

const url = "https://jsonplaceholder.typicode.com/posts";
let responseBody = "";
  
https.get(url, res => {
  res.setEncoding("utf8");
  res.on("data", data => {
    responseBody += data;
  });
  res.on("end", () => {
    responseBody = JSON.parse(responseBody);
    console.log(responseBody);
  });
});

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/userDetails", (req, res, next) => {
    console.log('responseBody:', responseBody)
    res.json(responseBody);
   // console.log('res:', res)
   });

app.listen(3100, () => {
 console.log("Server running on port 3100");
});