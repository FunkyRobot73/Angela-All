const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res){
  //console.log(req);
  res.sendFile(__dirname + "/index.html")
  
});

app.get("/bmicalculator", function(req, res){
  //console.log(req);
  res.sendFile(__dirname + "/bmicalculator.html")
  
});

app.post("/", function(req, res){
  let num1 = Number(req.body.num1)
  let num2 = Number(req.body.num2)
  let answer = num1 + num2;
  res.send("The Result is: " + answer);
})

app.post("/bmicalculator", function(req, res){
  let height1 = parseFloat(req.body.height)
  let weight1 = parseFloat(req.body.weight)
  let total_bmi = weight1 / (height1 * height1);
  res.send("<h1>Your BMi is: </h1>" + total_bmi);
})

app.listen(3000, function(){
  console.log("Server started on Port 3000");

});

