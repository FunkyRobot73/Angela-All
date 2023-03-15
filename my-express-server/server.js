const express = require("express");
const app = express();

app.get("/", function(req, res){
  //console.log(req);
  res.send("<h1>Hello Carlos!</h1>")
});

app.get("/contact", function(req, res){
  //console.log(req);
  res.send("<h1>To contact Carlos Sousa ==> carlos@funklyrobot.ca</h1>")
});

app.get("/about", function(req, res){
  //console.log(req);
  res.send("<h2>Carlos is an old dude trying to code...</h2>")
});

app.get("/hobbies", function(req, res){
  //console.log(req);
  res.send("<ul><li>Comics</li><li>Star Trek</li><li>Code</li>")
});

app.listen(3000, function(){
  console.log("Server started on Port 3000");

});

