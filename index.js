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

app.get("/userDetails", (req, res, next) => {
    res.json(responseBody);
   });

app.listen(3100, () => {
 console.log("Server running on port 3000");
});